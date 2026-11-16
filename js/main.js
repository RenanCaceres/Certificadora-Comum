/**
 * Try, Catch & Learn - Main Application Script
 * Smooth animations, scroll reveals, navbar effects, and interactive UI
 */

(function () {
  'use strict';

  // Toast Notification System
  window.showToast = function (message, type = 'info', duration = 3500) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      container.setAttribute('role', 'status');
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
    } else if (type === 'error') {
      iconSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      `;
    } else {
      iconSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      `;
    }

    toast.innerHTML = `
      <div class="toast-icon">${iconSvg}</div>
      <div class="toast-message">${message}</div>
      <button class="toast-close-btn" type="button" aria-label="Fechar">&times;</button>
    `;

    container.appendChild(toast);

    // Auto-remove after duration
    const timer = setTimeout(() => {
      removeToast(toast);
    }, duration);

    // Manual close
    toast.querySelector('.toast-close-btn').addEventListener('click', () => {
      clearTimeout(timer);
      removeToast(toast);
    });

    function removeToast(el) {
      el.classList.add('toast-fadeout');
      setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 300);
    }
  };

  // Setup Scroll Reveal with Safe Viewport Check
  function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    // Enable JS scroll reveal mode
    document.documentElement.classList.add('js-reveal-active');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.05,
      rootMargin: '120px 0px 60px 0px'
    });

    const windowH = window.innerHeight || 800;
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowH + 150) {
        // Elements in or near immediate viewport reveal without delay
        el.classList.add('revealed');
      } else {
        observer.observe(el);
      }
    });
  }

  // Setup Sticky Navbar Blur & Active Link Spy
  function setupNavbar() {
    const navWrap = document.getElementById('navbarWrap') || document.querySelector('.nav-wrap');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;

      if (navWrap) {
        if (scrollY > 30) {
          navWrap.classList.add('nav-scrolled');
        } else {
          navWrap.classList.remove('nav-scrolled');
        }
      }

      // Active link spy
      let currentSectionId = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 140;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });

    // Mobile Hamburger Menu
    const menuToggle = document.getElementById('menuToggleBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');

    if (menuToggle && mobileDrawer) {
      menuToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        mobileDrawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      });

      // Close menu when clicking link
      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          mobileDrawer.setAttribute('aria-hidden', 'true');
        });
      });

      // Close mobile menu on Escape key
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
          mobileDrawer.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          mobileDrawer.setAttribute('aria-hidden', 'true');
          menuToggle.focus();
        }
      });
    }
  }

  // Smooth Scrolling for In-Page Anchors
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const navHeight = 76;
          const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Course Video Player & Expandable Drawer Controller
  function setupCoursePlayer() {
    const video = document.getElementById('mainCourseVideo');
    const bigPlayBtn = document.getElementById('btnBigPlay');
    const playerFrame = document.getElementById('playerFrameBox');
    const recordingNotice = document.getElementById('playerRecordingNotice');
    const playerFooterBar = document.getElementById('playerFooterBar');
    const liveDot = document.getElementById('playerLiveDot');
    const drawerWrap = document.getElementById('playerDrawerWrap');
    const btnClosePlayer = document.getElementById('btnClosePlayer');

    const lessonTag = document.getElementById('playerLessonTag');
    const lessonTitle = document.getElementById('playerLessonTitle');
    const durationBadge = document.getElementById('playerDurationBadge');
    const theoryBarTitle = document.getElementById('theoryBarTitle');
    const btnTheoryLink = document.getElementById('btnTheoryLink');
    const btnExercisesLink = document.getElementById('btnExercisesLink');
    const directFileLink = document.getElementById('playerDirectFileLink');

    const recordingNoticeTitle = document.getElementById('recordingNoticeTitle');
    const recordingNoticeDesc = document.getElementById('recordingNoticeDesc');

    const lessonCards = document.querySelectorAll('.upcoming-card[data-lesson]');

    let currentLessonId = '1';
    let currentVideoSources = [];
    let currentSrcIndex = 0;
    const videoAvailabilityCache = {};

    const lessonsData = {
      '1': {
        tag: 'Aula 1 • Disponível',
        title: 'Fase 1: Primeiros Passos em C — Algoritmos, Memória e Variáveis',
        duration: '14:14 min',
        theoryTitle: 'Material Teórico Oficial — Fase 1 (Primeiros Passos em C)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Fase%201%20-%20Primeiros%20Passos%20em%20C.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase1-Primeiros-Passos'
      },
      '2': {
        tag: 'Aula 2 • Em Construção',
        title: 'Fase 2: O Programa Aprende a Decidir — if, else e switch-case',
        duration: 'Em Construção',
        theoryTitle: 'Material Teórico Oficial — Fase 2 (Tomada de Decisão)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Fase%202%20-%20O%20Programa%20Aprende%20a%20Decidir.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase2-Decisoes'
      },
      '3': {
        tag: 'Aula 3 • Em Construção',
        title: 'Fase 3: Repita Comigo — Laços de Repetição (for, while, do-while)',
        duration: 'Em Construção',
        theoryTitle: 'Material Teórico Oficial — Fase 3 (Laços de Repetição)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Fase%203%20-%20Repita%20Comigo%20La%C3%A7os%20de%20Repeti%C3%A7%C3%A3o.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase3-Lacos-de-Repeticao'
      },
      '4': {
        tag: 'Aula 4 • Em Construção',
        title: 'Fase 4: Dividir para Programar — Funções, Escopo e Modularização',
        duration: 'Em Construção',
        theoryTitle: 'Material Teórico Oficial — Fase 4 (Funções e Modularização)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Aula%20Fase%204%20-%20Dividir%20Para%20Programar.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase4-Modularizacao'
      },
      '5': {
        tag: 'Aula 5 • Em Construção',
        title: 'Fase 5: Muitos Dados, Uma Só Caixa — Vetores e Matrizes',
        duration: 'Em Construção',
        theoryTitle: 'Material Teórico Oficial — Fase 5 (Vetores e Matrizes)',
        theoryUrl: 'Slides/Fase%205%20-%20Muitos%20dados,%20uma%20s%C3%B3%20caixa%20vetores%20e%20matrizes.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase5-Vetores-e-Matrizes'
      },
      '6': {
        tag: 'Aula 6 • Em Construção',
        title: 'Fase 6: Tipos Compostos — Structs e Registros Heterogêneos',
        duration: 'Em Construção',
        theoryTitle: 'Material Teórico Oficial — Fase 6 (Structs e Registros)',
        theoryUrl: 'Slides/Fase%206%20-%20Struct%20.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase6-Struct'
      }
    };

    if (!video) return;

    // Retorna a lista de nomes de arquivos e caminhos suportados para cada aula
    function getLessonVideoSources(id) {
      return [
        `Conteúdo-Teórico/aulas/Aula${id}.mp4`,
        `Conte%C3%BAdo-Te%C3%B3rico/aulas/Aula${id}.mp4`,
        `aulas/Aula${id}.mp4`,
        `Conteúdo-Teórico/aulas/aula${id}.mp4`,
        `aulas/aula${id}.mp4`,
        `Conteúdo-Teórico/aulas/Aula_${id}.mp4`,
        `aulas/Aula_${id}.mp4`
      ];
    }

    // Testa se uma URL/caminho de vídeo existe (suporta http/https via fetch e file:// via elemento de vídeo)
    async function testVideoUrl(url) {
      if (window.location.protocol.startsWith('http')) {
        try {
          const res = await fetch(url, { method: 'HEAD' });
          if (res.ok || res.status === 200 || res.status === 206 || res.status === 304) {
            return true;
          }
        } catch (e) {
          try {
            const res2 = await fetch(url, { method: 'GET', headers: { Range: 'bytes=0-0' } });
            if (res2.ok || res2.status === 200 || res2.status === 206 || res2.status === 304) {
              return true;
            }
          } catch (e2) {}
        }
      }

      // Fallback em memória (para file:// ou servidores sem suporte a HEAD/Range)
      return new Promise((resolve) => {
        const probe = document.createElement('video');
        probe.preload = 'metadata';
        let done = false;
        const finish = (result) => {
          if (!done) {
            done = true;
            probe.src = '';
            resolve(result);
          }
        };
        probe.onloadedmetadata = () => finish(true);
        probe.oncanplay = () => finish(true);
        probe.onerror = () => finish(false);
        setTimeout(() => finish(false), 1200);
        probe.src = url;
      });
    }

    // Verifica se o arquivo de vídeo de uma aula existe no disco/servidor
    async function verifyLessonVideo(lessonId, forceFresh = false) {
      if (!forceFresh && videoAvailabilityCache[lessonId] && videoAvailabilityCache[lessonId].available) {
        return videoAvailabilityCache[lessonId];
      }
      const sources = getLessonVideoSources(lessonId);
      for (const src of sources) {
        const exists = await testVideoUrl(src);
        if (exists) {
          videoAvailabilityCache[lessonId] = { available: true, validSrc: src };
          return videoAvailabilityCache[lessonId];
        }
      }
      videoAvailabilityCache[lessonId] = { available: false, validSrc: null };
      return videoAvailabilityCache[lessonId];
    }

    // Atualiza visualmente o card da aula na grade
    function updateCardStatus(id, exists) {
      const card = document.querySelector(`.upcoming-card[data-lesson="${id}"]`);
      if (!card) return;
      const badge = card.querySelector('.badge-status');

      if (exists) {
        card.classList.add('active-playable');
        card.classList.remove('playable-theory');
        card.setAttribute('title', `Clique para abrir o player da Aula ${id}`);
        if (badge) {
          badge.className = 'badge-status ready';
          if (!card.classList.contains('is-playing')) {
            badge.textContent = '▶ Assistir Aula';
          }
        }
      } else {
        card.classList.remove('active-playable');
        card.classList.add('playable-theory');
        card.setAttribute('title', `Aula ${id} em construção — clique para ver o conteúdo teórico`);
        if (badge) {
          badge.className = 'badge-status recording';
          badge.textContent = 'Em Construção';
        }
      }
    }

    // Tratamento de falhas de carregamento com fallback automático
    video.addEventListener('error', () => {
      if (currentVideoSources && currentSrcIndex < currentVideoSources.length - 1) {
        currentSrcIndex++;
        console.warn('Falha ao carregar fonte do vídeo. Tentando fallback:', currentVideoSources[currentSrcIndex]);
        video.src = currentVideoSources[currentSrcIndex];
        video.load();
      }
    });

    // Detecta duração real da mídia quando disponível
    video.addEventListener('loadedmetadata', () => {
      if (video.duration && isFinite(video.duration) && video.duration > 0) {
        const mins = Math.floor(video.duration / 60);
        const secs = Math.floor(video.duration % 60).toString().padStart(2, '0');
        const formatted = `${mins}:${secs} min`;
        if (durationBadge && playerFrame.style.display !== 'none') {
          durationBadge.textContent = formatted;
        }
      }
    });

    function startPlayback() {
      const promise = video.play();
      if (promise !== undefined) {
        promise.then(() => {
          if (bigPlayBtn) bigPlayBtn.classList.add('playing');
          if (liveDot) liveDot.classList.add('is-live');
          const currentCard = document.querySelector(`.upcoming-card[data-lesson="${currentLessonId}"]`);
          if (currentCard) {
            currentCard.classList.add('is-playing');
            const badge = currentCard.querySelector('.badge-status');
            if (badge) badge.textContent = '▶ Reproduzindo';
          }
        }).catch(err => {
          console.warn('Playback error or blocked interaction:', err);
          if (bigPlayBtn) bigPlayBtn.classList.remove('playing');
          const currentCard = document.querySelector(`.upcoming-card[data-lesson="${currentLessonId}"]`);
          if (currentCard && drawerWrap && drawerWrap.classList.contains('is-open')) {
            const badge = currentCard.querySelector('.badge-status');
            if (badge) badge.textContent = '▶ Assistir Aula';
          }
          video.controls = true;
          window.showToast && window.showToast('Clique no botão de reproduzir para iniciar.', 'info');
        });
      }
    }

    function togglePlayback() {
      if (video.paused || video.ended) {
        startPlayback();
      } else {
        video.pause();
      }
    }

    // Abre a gaveta de aula: se encontrar o vídeo exibe o player, se não deixa "Em Construção"
    async function openLessonDrawer(lessonId, autoPlayVideo) {
      const data = lessonsData[lessonId];
      if (!data || !drawerWrap) return;
      currentLessonId = lessonId;

      // Destaca o card selecionado
      lessonCards.forEach(c => {
        const isCurrent = c.getAttribute('data-lesson') === lessonId;
        c.classList.toggle('is-selected', isCurrent);
        c.setAttribute('aria-expanded', isCurrent ? 'true' : 'false');
      });

      // Atualiza cabeçalho e links do material teórico
      if (lessonTitle) lessonTitle.textContent = data.title;
      if (theoryBarTitle) theoryBarTitle.textContent = data.theoryTitle;
      if (btnTheoryLink) btnTheoryLink.href = data.theoryUrl;
      if (btnExercisesLink) btnExercisesLink.href = data.exercisesUrl;

      // Abre a gaveta
      drawerWrap.classList.add('is-open');
      drawerWrap.setAttribute('aria-hidden', 'false');

      // Desfoca o card para a barra de espaço não recapturar o card
      if (document.activeElement && document.activeElement.classList && document.activeElement.classList.contains('upcoming-card')) {
        document.activeElement.blur();
      }

      // Checagem se o arquivo de vídeo da aula existe (re-verifica se ainda não tiver sido confirmado):
      const forceFresh = !videoAvailabilityCache[lessonId] || !videoAvailabilityCache[lessonId].available;
      const videoCheck = await verifyLessonVideo(lessonId, forceFresh);

      // IF: SE ENCONTRAR O ARQUIVO DA AULA, EXIBE O PLAYER
      if (videoCheck.available) {
        if (playerFrame) playerFrame.style.display = 'block';
        if (playerFooterBar) playerFooterBar.style.display = 'flex';
        if (recordingNotice) recordingNotice.style.display = 'none';

        // Configura fontes do vídeo para esta aula
        currentVideoSources = getLessonVideoSources(lessonId);
        currentSrcIndex = currentVideoSources.indexOf(videoCheck.validSrc);
        if (currentSrcIndex === -1) currentSrcIndex = 0;

        if (video.getAttribute('data-loaded-lesson') !== lessonId || !video.src) {
          video.src = videoCheck.validSrc;
          video.setAttribute('data-loaded-lesson', lessonId);
          video.load();
        }

        // Atualiza botão de play com o número da aula
        if (bigPlayBtn) {
          const label = bigPlayBtn.querySelector('.player-big-play-label');
          if (label) label.textContent = `Dar Play na Aula ${lessonId}`;
          bigPlayBtn.setAttribute('aria-label', `Iniciar reprodução da Aula ${lessonId}`);
          bigPlayBtn.classList.remove('playing');
        }

        // Atualiza link de download direto
        if (directFileLink) {
          directFileLink.href = videoCheck.validSrc;
          directFileLink.setAttribute('download', `Aula${lessonId}.mp4`);
        }

        if (lessonTag) lessonTag.textContent = `Aula ${lessonId} • Disponível`;
        if (durationBadge) durationBadge.textContent = data.duration && data.duration !== 'Em Construção' ? data.duration : 'Vídeo Disponível';

        updateCardStatus(lessonId, true);

        if (autoPlayVideo) {
          startPlayback();
        }
      } else {
        // ELSE: SE NÃO ENCONTRAR, DEIXA ESCRITO "EM CONSTRUÇÃO"
        video.pause();
        if (playerFrame) playerFrame.style.display = 'none';
        if (playerFooterBar) playerFooterBar.style.display = 'none';
        if (recordingNotice) recordingNotice.style.display = 'block';

        if (recordingNoticeTitle) {
          recordingNoticeTitle.textContent = `Aula ${lessonId}: Videoaula em Construção`;
        }
        if (recordingNoticeDesc) {
          recordingNoticeDesc.innerHTML = `O arquivo de vídeo desta aula (<strong>Aula${lessonId}.mp4</strong>) ainda não foi inserido na pasta <code>Conteúdo-Teórico/aulas/</code>. Enquanto a videoaula está em construção, o <strong>Conteúdo Teórico em PDF</strong> e os <strong>Exercícios Resolvidos em C</strong> já estão 100% disponíveis nos botões acima!`;
        }

        if (lessonTag) lessonTag.textContent = `Aula ${lessonId} • Em Construção`;
        if (durationBadge) durationBadge.textContent = 'Em Construção';

        updateCardStatus(lessonId, false);
      }

      setTimeout(() => {
        drawerWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 80);
    }

    function closeLessonDrawer() {
      if (!drawerWrap) return;
      video.pause();
      drawerWrap.classList.remove('is-open');
      drawerWrap.setAttribute('aria-hidden', 'true');
      lessonCards.forEach(c => {
        c.classList.remove('is-selected');
        c.setAttribute('aria-expanded', 'false');
        c.classList.remove('is-playing');
        const lessonId = c.getAttribute('data-lesson');
        const badge = c.querySelector('.badge-status');
        if (badge) {
          if (videoAvailabilityCache[lessonId] && videoAvailabilityCache[lessonId].available) {
            badge.className = 'badge-status ready';
            badge.textContent = '▶ Assistir Aula';
          } else {
            badge.className = 'badge-status recording';
            badge.textContent = 'Em Construção';
          }
        }
      });
    }

    if (btnClosePlayer) {
      btnClosePlayer.addEventListener('click', closeLessonDrawer);
    }

    // Associa eventos de clique e teclado a todos os 6 cards de aula
    lessonCards.forEach(card => {
      const lessonId = card.getAttribute('data-lesson');
      card.addEventListener('click', () => {
        openLessonDrawer(lessonId, true);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.key === ' ' && card.classList.contains('is-selected') && drawerWrap.classList.contains('is-open')) {
            e.preventDefault();
            togglePlayback();
            return;
          }
          e.preventDefault();
          openLessonDrawer(lessonId, true);
        }
      });
    });

    // Clique no botão central de play grande
    if (bigPlayBtn) {
      bigPlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startPlayback();
      });
    }

    // Clique na área do vídeo alterna play/pause (exceto na barra de controle nativa)
    if (playerFrame) {
      playerFrame.addEventListener('click', (e) => {
        if (e.target && (e.target.id === 'btnBigPlay' || e.target.closest('#btnBigPlay'))) {
          return;
        }
        const rect = playerFrame.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        if (clickY >= rect.height - 56) {
          return;
        }
        togglePlayback();
      });
    }

    // Eventos do vídeo para sincronizar indicadores visuais
    video.addEventListener('play', () => {
      if (bigPlayBtn) bigPlayBtn.classList.add('playing');
      if (liveDot) liveDot.classList.add('is-live');
      const currentCard = document.querySelector(`.upcoming-card[data-lesson="${currentLessonId}"]`);
      if (currentCard) {
        currentCard.classList.add('is-playing');
        const badge = currentCard.querySelector('.badge-status');
        if (badge) badge.textContent = '▶ Reproduzindo';
      }
    });

    video.addEventListener('pause', () => {
      if (video.currentTime === 0 || video.ended) {
        if (bigPlayBtn) bigPlayBtn.classList.remove('playing');
      }
      if (liveDot) liveDot.classList.remove('is-live');
      const currentCard = document.querySelector(`.upcoming-card[data-lesson="${currentLessonId}"]`);
      if (currentCard) {
        currentCard.classList.remove('is-playing');
        const badge = currentCard.querySelector('.badge-status');
        if (badge && drawerWrap && drawerWrap.classList.contains('is-open')) {
          badge.textContent = '⏸ Pausado';
        }
      }
    });

    video.addEventListener('ended', () => {
      if (bigPlayBtn) bigPlayBtn.classList.remove('playing');
      if (liveDot) liveDot.classList.remove('is-live');
      const currentCard = document.querySelector(`.upcoming-card[data-lesson="${currentLessonId}"]`);
      if (currentCard) {
        currentCard.classList.remove('is-playing');
        const badge = currentCard.querySelector('.badge-status');
        if (badge) badge.textContent = '✓ Aula Concluída';
      }
      window.showToast && window.showToast(`Aula ${currentLessonId} concluída! Acesse o conteúdo teórico acima.`, 'success');
    });

    // Atalho global da barra de espaço
    window.addEventListener('keydown', (e) => {
      if (e.code !== 'Space' && e.key !== ' ') return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) || document.activeElement.isContentEditable) {
        return;
      }
      if (drawerWrap && drawerWrap.classList.contains('is-open') && playerFrame && playerFrame.style.display !== 'none') {
        e.preventDefault();
        togglePlayback();
      }
    });

    // Sondagem inicial em segundo plano de todas as aulas na carga da página
    async function probeAllLessons() {
      for (const id of ['1', '2', '3', '4', '5', '6']) {
        const res = await verifyLessonVideo(id);
        updateCardStatus(id, res.available);
      }
    }
    probeAllLessons();
  }

  // Citation Copy Button
  function setupCitationCopy() {
    const copyBibBtn = document.getElementById('btnCopyCitation');
    if (copyBibBtn) {
      copyBibBtn.addEventListener('click', () => {
        const citation = `MARÇULO, L.; MARTINELLI, L. E. B.; REGINATO, M. V.; ANSELMO, R. C.; DOMINGUES, A. L. S. Try, Catch & Learn: Recurso Educacional Aberto para Fundamentos de Programação em C. Cornélio Procópio: UTFPR, 2026. Disponível em: https://github.com/RenanCaceres/Certificadora-Comum`;
        navigator.clipboard.writeText(citation).then(() => {
          window.showToast('Citação copiada em formato ABNT!', 'success');
        });
      });
    }
  }

  // Initialize
  function init() {
    setupScrollReveal();
    setupNavbar();
    setupSmoothScroll();
    setupCoursePlayer();
    setupCitationCopy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
