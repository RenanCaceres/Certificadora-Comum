/**
 * Try, Catch & Learn - Course Player Controller
 * Platform REA - UTFPR Cornélio Procópio
 */

(function () {
  'use strict';

  // State
  let currentLesson = null;
  let currentModule = null;
  let completedLessons = new Set();
  let isTheaterMode = false;
  let activeTab = 'overview';
  let preferredSource = 'local'; // 'local' or 'youtube'

  // LocalStorage keys
  const STORAGE_KEYS = {
    COMPLETED: 'tcl_completed_lessons',
    LAST_LESSON: 'tcl_last_lesson',
    THEATER: 'tcl_theater_mode',
    VIDEO_PREF: 'tcl_video_preference'
  };

  // Helper to find lesson by ID
  function findLessonById(lessonId) {
    for (const mod of COURSE_DATA.modules) {
      for (const les of mod.lessons) {
        if (les.id === lessonId) {
          return { module: mod, lesson: les };
        }
      }
    }
    // Default to first lesson
    if (COURSE_DATA.modules.length > 0 && COURSE_DATA.modules[0].lessons.length > 0) {
      return {
        module: COURSE_DATA.modules[0],
        lesson: COURSE_DATA.modules[0].lessons[0]
      };
    }
    return null;
  }

  // Helper to find flat index of lesson
  function getAllLessons() {
    const list = [];
    COURSE_DATA.modules.forEach(m => {
      m.lessons.forEach(l => {
        list.push({ module: m, lesson: l });
      });
    });
    return list;
  }

  // Load saved state
  function loadSavedState() {
    try {
      const savedCompleted = localStorage.getItem(STORAGE_KEYS.COMPLETED);
      if (savedCompleted) {
        completedLessons = new Set(JSON.parse(savedCompleted));
      }
      isTheaterMode = localStorage.getItem(STORAGE_KEYS.THEATER) === 'true';
      preferredSource = localStorage.getItem(STORAGE_KEYS.VIDEO_PREF) || 'local';
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  // Save state
  function saveCompletedState() {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify([...completedLessons]));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  function saveLastLesson(lessonId) {
    try {
      localStorage.setItem(STORAGE_KEYS.LAST_LESSON, lessonId);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  // Render Playlist Accordion
  function renderPlaylist(filterQuery = '') {
    const container = document.getElementById('playlistModulesContainer');
    if (!container) return;

    const query = filterQuery.trim().toLowerCase();
    container.innerHTML = '';

    COURSE_DATA.modules.forEach((mod, modIdx) => {
      // Filter lessons if query present
      const matchingLessons = mod.lessons.filter(les => {
        if (!query) return true;
        return (
          les.title.toLowerCase().includes(query) ||
          les.number.toLowerCase().includes(query) ||
          (les.topics && les.topics.some(t => t.toLowerCase().includes(query)))
        );
      });

      if (query && matchingLessons.length === 0) {
        return; // skip module if nothing matches
      }

      // Check how many completed in this module
      const modCompleted = mod.lessons.filter(l => completedLessons.has(l.id)).length;
      const isCurrentModule = currentModule && currentModule.id === mod.id;
      const isExpanded = query ? true : isCurrentModule || modIdx === 0;

      const modItem = document.createElement('div');
      modItem.className = `playlist-module-item ${isExpanded ? 'active' : ''}`;
      modItem.id = `playlist-mod-${mod.id}`;

      modItem.innerHTML = `
        <button class="playlist-module-header" type="button" aria-expanded="${isExpanded}">
          <div class="playlist-module-info">
            <span class="module-title-text">${mod.title}</span>
            <span class="module-count">${modCompleted}/${mod.lessons.length} aulas • ${mod.badge}</span>
          </div>
          <svg class="module-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="playlist-lessons-list" style="display: ${isExpanded ? 'block' : 'none'};">
          ${matchingLessons.map(les => {
            const isPlaying = currentLesson && currentLesson.id === les.id;
            const isDone = completedLessons.has(les.id);

            return `
              <div class="playlist-lesson-card ${isPlaying ? 'current-playing' : ''} ${isDone ? 'is-completed' : ''}" data-lesson-id="${les.id}">
                <button class="lesson-check-btn" type="button" title="${isDone ? 'Marcar como não vista' : 'Marcar como concluída'}" data-check-id="${les.id}">
                  <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
                <div class="lesson-meta-click" data-select-id="${les.id}">
                  <div class="lesson-title-row">
                    <span class="lesson-num">${les.number}</span>
                    <span class="lesson-name">${les.title}</span>
                  </div>
                  <div class="lesson-submeta">
                    <span class="lesson-duration">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      ${les.duration}
                    </span>
                    ${les.videoType === 'local_or_youtube' ? '<span class="badge-source-opt">HD Local / YT</span>' : ''}
                    ${isPlaying ? '<span class="now-playing-pill"><span class="now-playing-dot"></span> Assistindo</span>' : ''}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;

      container.appendChild(modItem);
    });

    attachPlaylistEvents();
    updateOverallProgress();
  }

  // Attach event listeners to playlist
  function attachPlaylistEvents() {
    // Module Accordion Toggle
    document.querySelectorAll('.playlist-module-header').forEach(header => {
      header.addEventListener('click', () => {
        const parent = header.closest('.playlist-module-item');
        const list = parent.querySelector('.playlist-lessons-list');
        const isExpanded = parent.classList.contains('active');

        if (isExpanded) {
          parent.classList.remove('active');
          list.style.display = 'none';
          header.setAttribute('aria-expanded', 'false');
        } else {
          parent.classList.add('active');
          list.style.display = 'block';
          header.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Lesson Card Selection
    document.querySelectorAll('.lesson-meta-click').forEach(elem => {
      elem.addEventListener('click', () => {
        const lessonId = elem.getAttribute('data-select-id');
        loadLesson(lessonId, true);
      });
    });

    // Checkmark button toggle
    document.querySelectorAll('.lesson-check-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const lessonId = btn.getAttribute('data-check-id');
        toggleLessonCompletion(lessonId);
      });
    });
  }

  // Update Overall Progress bar
  function updateOverallProgress() {
    const all = getAllLessons();
    const total = all.length;
    const done = completedLessons.size;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);

    const progressBar = document.getElementById('playerProgressBarFill');
    const progressText = document.getElementById('playerProgressPercent');
    const countText = document.getElementById('playerProgressCount');

    if (progressBar) progressBar.style.width = `${pct}%`;
    if (progressText) progressText.textContent = `${pct}%`;
    if (countText) countText.textContent = `${done} de ${total} aulas concluídas`;

    // Also update Toggle Complete button text
    const btnToggleComplete = document.getElementById('btnToggleComplete');
    if (btnToggleComplete && currentLesson) {
      const isDone = completedLessons.has(currentLesson.id);
      if (isDone) {
        btnToggleComplete.classList.add('btn-completed-active');
        btnToggleComplete.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Concluída
        `;
      } else {
        btnToggleComplete.classList.remove('btn-completed-active');
        btnToggleComplete.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          Marcar como Concluída
        `;
      }
    }
  }

  // Toggle completion
  function toggleLessonCompletion(lessonId) {
    if (completedLessons.has(lessonId)) {
      completedLessons.delete(lessonId);
      if (window.showToast) window.showToast('Aula desmarcada como concluída.', 'info');
    } else {
      completedLessons.add(lessonId);
      if (window.showToast) window.showToast('Parabéns! Aula concluída com sucesso! 🎉', 'success');
    }
    saveCompletedState();
    renderPlaylist(document.getElementById('lessonSearchInput')?.value || '');
  }

  // Load a lesson into the stage
  function loadLesson(lessonId, shouldScroll = false) {
    const found = findLessonById(lessonId);
    if (!found) return;

    currentModule = found.module;
    currentLesson = found.lesson;
    saveLastLesson(lessonId);

    // Update Header and Badges
    const badgeEl = document.getElementById('currentLessonBadge');
    const titleEl = document.getElementById('currentLessonTitle');
    const moduleEl = document.getElementById('currentModuleTitle');
    const durationEl = document.getElementById('currentLessonDuration');

    if (badgeEl) badgeEl.textContent = currentLesson.number;
    if (titleEl) titleEl.textContent = currentLesson.title;
    if (moduleEl) moduleEl.textContent = currentModule.title;
    if (durationEl) durationEl.textContent = currentLesson.duration;

    // Render Video Player
    renderVideoPlayer(currentLesson);

    // Render Subplayer Tabs Content
    renderSubplayerTabs(currentLesson);

    // Update Next / Prev buttons state
    updateNavigationButtons();

    // Re-render playlist to update 'current-playing' state
    renderPlaylist(document.getElementById('lessonSearchInput')?.value || '');

    // Optionally scroll video player into smooth view
    if (shouldScroll) {
      const playerWrapper = document.getElementById('coursePlayerSection');
      if (playerWrapper) {
        playerWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Render Video Player (switch between HTML5 video and YouTube iframe)
  function renderVideoPlayer(lesson) {
    const stage = document.getElementById('videoStage');
    if (!stage) return;

    stage.innerHTML = '';

    const hasLocal = !!lesson.localVideoSrc;
    const hasYoutube = !!lesson.youtubeId;

    // Source switcher bar if lesson supports both
    let sourceSwitcherHtml = '';
    if (hasLocal && hasYoutube) {
      sourceSwitcherHtml = `
        <div class="video-source-switch" id="videoSourceSwitch">
          <span>Fonte do vídeo:</span>
          <button type="button" class="source-pill ${preferredSource === 'local' ? 'active' : ''}" data-source="local">
            Vídeo Local HD (MP4)
          </button>
          <button type="button" class="source-pill ${preferredSource === 'youtube' ? 'active' : ''}" data-source="youtube">
            YouTube Embed
          </button>
        </div>
      `;
    }

    let mediaHtml = '';
    const useLocal = hasLocal && (preferredSource === 'local' || !hasYoutube);

    if (useLocal) {
      mediaHtml = `
        <video 
          id="activeHtml5Player" 
          class="stage-video" 
          controls 
          preload="metadata" 
          poster="assets/img/video-poster.svg"
          playsinline
        >
          <source src="${lesson.localVideoSrc}" type="video/mp4">
          Seu navegador não suporta reprodução direta de vídeo MP4.
        </video>
      `;
    } else if (hasYoutube) {
      mediaHtml = `
        <iframe 
          id="activeIframePlayer"
          class="stage-iframe"
          src="https://www.youtube-nocookie.com/embed/${lesson.youtubeId}?rel=0&modestbranding=1&autoplay=0" 
          title="${lesson.title}"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        ></iframe>
      `;
    } else {
      mediaHtml = `
        <div class="video-placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <p>Conteúdo em gravação ou atualização.</p>
        </div>
      `;
    }

    stage.innerHTML = `
      ${sourceSwitcherHtml}
      <div class="video-embed-aspect">
        ${mediaHtml}
      </div>
    `;

    // Attach source switcher event
    if (hasLocal && hasYoutube) {
      const switchContainer = document.getElementById('videoSourceSwitch');
      if (switchContainer) {
        switchContainer.querySelectorAll('.source-pill').forEach(btn => {
          btn.addEventListener('click', () => {
            preferredSource = btn.getAttribute('data-source');
            try {
              localStorage.setItem(STORAGE_KEYS.VIDEO_PREF, preferredSource);
            } catch (e) {}
            renderVideoPlayer(currentLesson);
          });
        });
      }
    }

    // Auto mark as completed when HTML5 video finishes
    const html5Video = document.getElementById('activeHtml5Player');
    if (html5Video) {
      html5Video.addEventListener('ended', () => {
        if (!completedLessons.has(currentLesson.id)) {
          toggleLessonCompletion(currentLesson.id);
        }
      });
    }
  }

  // Render Subplayer Tabs
  function renderSubplayerTabs(lesson) {
    // 1. Overview Tab
    const tabOverview = document.getElementById('tabOverview');
    if (tabOverview) {
      tabOverview.innerHTML = `
        <div class="tab-pane-content">
          <h3 class="pane-title">${lesson.title}</h3>
          <p class="pane-description">${lesson.description || 'Descrição detalhada em breve.'}</p>
          
          <h4 class="subhead">Tópicos Abordados nesta Aula</h4>
          <ul class="topics-checklist">
            ${(lesson.topics || []).map(topic => `
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>${topic}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    // 2. Theory Tab
    const tabTheory = document.getElementById('tabTheory');
    if (tabTheory) {
      const pdfPath = lesson.theoryPdf || 'Conteúdo-Teórico/Fase 1 - Primeiros Passos em C.pdf';
      const pdfName = pdfPath.split('/').pop();
      tabTheory.innerHTML = `
        <div class="tab-pane-content">
          <div class="pdf-callout-card">
            <div class="pdf-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div class="pdf-card-info">
              <h4>Apostila Teórica Oficial</h4>
              <p>${pdfName} • Alinhado aos padrões didáticos da UTFPR</p>
            </div>
            <a href="${pdfPath}" target="_blank" class="btn btn-secondary btn-sm" download>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Baixar PDF
            </a>
          </div>
          <div class="embedded-preview-notice">
            <p>💡 <em>Dica:</em> Abra o PDF em uma aba separada para acompanhar os exemplos e tabelas durante a videoaula.</p>
          </div>
        </div>
      `;
    }

    // 3. Missions Tab
    const tabMissions = document.getElementById('tabMissions');
    if (tabMissions) {
      const missionsPdf = lesson.missionsPdf || 'Conteúdo-Teórico/Caderno_de_Missoes_III.pdf';
      const missionsName = missionsPdf.split('/').pop();
      tabMissions.innerHTML = `
        <div class="tab-pane-content">
          <div class="pdf-callout-card missions-card">
            <div class="pdf-card-icon mission-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="12 6 12 12 14 14"></polygon>
              </svg>
            </div>
            <div class="pdf-card-info">
              <h4>Caderno de Missões & Desafios</h4>
              <p>${missionsName} • Exercícios práticos categorizados por nível</p>
            </div>
            <a href="${missionsPdf}" target="_blank" class="btn btn-primary btn-sm" download>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Baixar Caderno de Missões
            </a>
          </div>
          <div class="gabarito-banner">
            <span class="badge-gabarito">Gabarito Disponível</span>
            <p>Você pode conferir todas as resoluções comentadas no <strong>Gabarito Comentado III</strong> na seção Biblioteca abaixo.</p>
          </div>
        </div>
      `;
    }

    // 4. Code Snippet Tab
    const tabCode = document.getElementById('tabCode');
    if (tabCode) {
      const code = lesson.solutionCode || '// Nenhum código demonstrativo vinculado a esta aula.';
      tabCode.innerHTML = `
        <div class="tab-pane-content">
          <div class="code-box-header">
            <div class="code-box-dots">
              <span class="code-dot red"></span>
              <span class="code-dot yellow"></span>
              <span class="code-dot green"></span>
              <span class="code-lang-label">C (C99 / GCC)</span>
            </div>
            <button id="btnCopyCode" class="btn-copy-code" type="button" title="Copiar código">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copiar Código</span>
            </button>
          </div>
          <pre class="code-box-pre"><code id="codeSnippetContent">${escapeHtml(code)}</code></pre>
        </div>
      `;

      // Copy code listener
      const copyBtn = document.getElementById('btnCopyCode');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(code).then(() => {
            copyBtn.classList.add('copied');
            copyBtn.querySelector('span').textContent = 'Copiado!';
            if (window.showToast) window.showToast('Código copiado para a área de transferência!', 'success');
            setTimeout(() => {
              copyBtn.classList.remove('copied');
              copyBtn.querySelector('span').textContent = 'Copiar Código';
            }, 2000);
          }).catch(() => {
            if (window.showToast) window.showToast('Não foi possível copiar o código automaticamente.', 'error');
          });
        });
      }
    }

    // 5. Resources Tab
    const tabResources = document.getElementById('tabResources');
    if (tabResources) {
      const resList = lesson.resources || [];
      tabResources.innerHTML = `
        <div class="tab-pane-content">
          <h4 class="subhead">Links & Ferramentas Complementares</h4>
          ${resList.length > 0 ? `
            <div class="resource-links-grid">
              ${resList.map(r => `
                <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-card-link">
                  <div class="resource-link-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                  <div class="resource-link-meta">
                    <span class="res-label">${r.label}</span>
                    <span class="res-url">${r.url.replace(/^https?:\/\//, '').split('/')[0]}</span>
                  </div>
                </a>
              `).join('')}
            </div>
          ` : `
            <p class="pane-description">Nenhum link adicional necessário para esta aula.</p>
          `}
        </div>
      `;
    }
  }

  // Update Next/Prev Lesson Navigation
  function updateNavigationButtons() {
    const all = getAllLessons();
    const curIdx = all.findIndex(item => item.lesson.id === currentLesson.id);

    const btnPrev = document.getElementById('btnPrevLesson');
    const btnNext = document.getElementById('btnNextLesson');

    if (btnPrev) {
      if (curIdx <= 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add('disabled');
      } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove('disabled');
      }
    }

    if (btnNext) {
      if (curIdx >= all.length - 1) {
        btnNext.disabled = true;
        btnNext.classList.add('disabled');
      } else {
        btnNext.disabled = false;
        btnNext.classList.remove('disabled');
      }
    }
  }

  function goToPreviousLesson() {
    const all = getAllLessons();
    const curIdx = all.findIndex(item => item.lesson.id === currentLesson.id);
    if (curIdx > 0) {
      loadLesson(all[curIdx - 1].lesson.id, true);
    }
  }

  function goToNextLesson() {
    const all = getAllLessons();
    const curIdx = all.findIndex(item => item.lesson.id === currentLesson.id);
    if (curIdx < all.length - 1) {
      loadLesson(all[curIdx + 1].lesson.id, true);
    }
  }

  // Theater Mode Toggle
  function toggleTheaterMode() {
    isTheaterMode = !isTheaterMode;
    const playerWrapper = document.getElementById('coursePlayerSection');
    const btnTheater = document.getElementById('btnTheaterMode');

    if (playerWrapper) {
      if (isTheaterMode) {
        playerWrapper.classList.add('theater-active');
      } else {
        playerWrapper.classList.remove('theater-active');
      }
    }

    if (btnTheater) {
      btnTheater.classList.toggle('active', isTheaterMode);
      btnTheater.setAttribute('title', isTheaterMode ? 'Sair do Modo Teatro' : 'Modo Teatro');
    }

    try {
      localStorage.setItem(STORAGE_KEYS.THEATER, isTheaterMode ? 'true' : 'false');
    } catch (e) {}
  }

  // Subplayer Tab Switcher
  function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.subplayer-tab-btn');
    const tabPanes = document.querySelectorAll('.subplayer-pane');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        if (!targetTab) return;

        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPane = document.getElementById(`tab${capitalize(targetTab)}`);
        if (targetPane) {
          targetPane.classList.add('active');
        }
        activeTab = targetTab;
      });
    });
  }

  // Search input handler
  function setupSearch() {
    const searchInput = document.getElementById('lessonSearchInput');
    const searchClear = document.getElementById('lessonSearchClear');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      renderPlaylist(val);
      if (searchClear) {
        searchClear.style.display = val ? 'flex' : 'none';
      }
    });

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchClear.style.display = 'none';
        renderPlaylist('');
      });
    }
  }

  // Keyboard Navigation Shortcuts
  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Don't interfere if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 't' || e.key === 'T') {
        toggleTheaterMode();
      } else if (e.key === 'n' || e.key === 'N') {
        goToNextLesson();
      } else if (e.key === 'p' || e.key === 'P') {
        goToPreviousLesson();
      }
    });
  }

  // Helper: Escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function capitalize(s) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // Initialization
  function init() {
    loadSavedState();

    // Check theater mode preference
    if (isTheaterMode) {
      const playerWrapper = document.getElementById('coursePlayerSection');
      if (playerWrapper) playerWrapper.classList.add('theater-active');
      const btnTheater = document.getElementById('btnTheaterMode');
      if (btnTheater) btnTheater.classList.add('active');
    }

    // Determine starting lesson
    let startLessonId = localStorage.getItem(STORAGE_KEYS.LAST_LESSON);
    const startLesson = findLessonById(startLessonId);

    if (startLesson) {
      loadLesson(startLesson.lesson.id, false);
    } else if (COURSE_DATA.modules.length > 0 && COURSE_DATA.modules[0].lessons.length > 0) {
      loadLesson(COURSE_DATA.modules[0].lessons[0].id, false);
    }

    // Setup global button listeners
    const btnPrev = document.getElementById('btnPrevLesson');
    if (btnPrev) btnPrev.addEventListener('click', goToPreviousLesson);

    const btnNext = document.getElementById('btnNextLesson');
    if (btnNext) btnNext.addEventListener('click', goToNextLesson);

    const btnToggleComplete = document.getElementById('btnToggleComplete');
    if (btnToggleComplete) {
      btnToggleComplete.addEventListener('click', () => {
        if (currentLesson) toggleLessonCompletion(currentLesson.id);
      });
    }

    const btnTheater = document.getElementById('btnTheaterMode');
    if (btnTheater) btnTheater.addEventListener('click', toggleTheaterMode);

    setupTabNavigation();
    setupSearch();
    setupKeyboardShortcuts();
  }

  // Expose global controller
  window.CoursePlayer = {
    init,
    loadLesson,
    toggleLessonCompletion,
    toggleTheaterMode,
    goToNextLesson,
    goToPreviousLesson
  };

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
