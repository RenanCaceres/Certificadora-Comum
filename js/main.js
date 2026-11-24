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
    const watchBadge = document.getElementById('playerWatchBadge');
    const theoryBarTitle = document.getElementById('theoryBarTitle');
    const btnTheoryLink = document.getElementById('btnTheoryLink');
    const btnExercisesLink = document.getElementById('btnExercisesLink');
    const directFileLink = document.getElementById('playerDirectFileLink');

    const recordingNoticeTitle = document.getElementById('recordingNoticeTitle');
    const recordingNoticeDesc = document.getElementById('recordingNoticeDesc');

    const lessonCards = document.querySelectorAll('.upcoming-card[data-lesson]');
    const T = window.TCLCert || null;

    let currentLessonId = '1';
    let currentVideoSources = [];
    let currentSrcIndex = 0;
    const videoAvailabilityCache = {};

    // Controle rigoroso de tempo assistido (anti-skip para certificação)
    let maxWatchedTime = 0;
    let lastValidTime = 0;
    let lastWallMs = performance.now();
    let lastSavedMs = 0;
    let lastSkipToastMs = 0;
    let isRevertingSeek = false;
    let pendingResumeLessonId = null;

    function isLessonDone(lessonId) {
      return Boolean(T && T.isLessonCompleted(lessonId));
    }

    function updateWatchBadgeUI(lessonId, curMaxTime, duration) {
      if (!watchBadge) return;
      if (isLessonDone(lessonId)) {
        watchBadge.textContent = '✓ Aula Concluída (100%)';
        watchBadge.classList.add('is-done');
        return;
      }
      watchBadge.classList.remove('is-done');
      if (duration && isFinite(duration) && duration > 0) {
        const pct = Math.min(99, Math.floor((Math.max(0, curMaxTime) / duration) * 100));
        watchBadge.textContent = `🔒 ${pct}% assistido`;
      } else {
        watchBadge.textContent = '🔒 Modo Certificação';
      }
    }

    function showSkipBlockedToast() {
      const now = performance.now();
      if (now - lastSkipToastMs > 3000) {
        lastSkipToastMs = now;
        window.showToast &&
          window.showToast(
            'Não é permitido pular partes ainda não assistidas. Assista até o final para liberar o certificado.',
            'error',
            3600
          );
      }
    }

    function persistCurrentWatchProgress() {
      if (!T || !currentLessonId) return;
      if (video.getAttribute('data-loaded-lesson') !== currentLessonId) return;
      if (!isLessonDone(currentLessonId) && maxWatchedTime > 0) {
        T.updateLessonWatchTime(currentLessonId, maxWatchedTime, video.duration || 0);
      }
    }

    function completeCurrentLesson() {
      if (!T || !currentLessonId) return;
      if (isLessonDone(currentLessonId)) return;

      const result = T.markLessonCompleted(currentLessonId, video.duration || maxWatchedTime);
      updateWatchBadgeUI(currentLessonId, video.duration || maxWatchedTime, video.duration || maxWatchedTime);
      updateCardStatus(currentLessonId, true);

      if (window.refreshCertificateHubUI) {
        window.refreshCertificateHubUI();
      }

      if (result && result.justCompletedCourse) {
        window.showToast &&
          window.showToast(
            '🎉 Parabéns! Você concluiu todas as aulas! Seu certificado de 10 horas foi liberado logo abaixo!',
            'success',
            6000
          );
        const certSec = document.getElementById('certificado');
        if (certSec) {
          setTimeout(() => {
            certSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 900);
        }
      } else {
        const label = currentLessonId === '7' ? 'Projeto Integrado concluído!' : `Aula ${currentLessonId} concluída!`;
        const summary = T.getCompletionSummary();
        window.showToast &&
          window.showToast(
            `${label} Progresso para certificado: ${summary.completedCount}/${summary.totalCount} aulas.`,
            'success',
            4200
          );
      }
    }

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
        tag: 'Aula 2 • Disponível',
        title: 'Fase 2: O Programa Aprende a Decidir — if, else e switch-case',
        duration: '07:48 min',
        theoryTitle: 'Material Teórico Oficial — Fase 2 (Tomada de Decisão)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Fase%202%20-%20O%20Programa%20Aprende%20a%20Decidir.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase2-Decisoes'
      },
      '3': {
        tag: 'Aula 3 • Disponível',
        title: 'Fase 3: Repita Comigo — Laços de Repetição (for, while, do-while)',
        duration: '12:26 min',
        theoryTitle: 'Material Teórico Oficial — Fase 3 (Laços de Repetição)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Fase%203%20-%20Repita%20Comigo%20La%C3%A7os%20de%20Repeti%C3%A7%C3%A3o.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase3-Lacos-de-Repeticao'
      },
      '4': {
        tag: 'Aula 4 • Disponível',
        title: 'Fase 4: Dividir para Programar — Funções, Escopo e Modularização',
        duration: '07:58 min',
        theoryTitle: 'Material Teórico Oficial — Fase 4 (Funções e Modularização)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Aula%20Fase%204%20-%20Dividir%20Para%20Programar.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase4-Modularizacao'
      },
      '5': {
        tag: 'Aula 5 • Disponível',
        title: 'Fase 5: Muitos Dados, Uma Só Caixa — Vetores e Matrizes',
        duration: '12:19 min',
        theoryTitle: 'Material Teórico Oficial — Fase 5 (Vetores e Matrizes)',
        theoryUrl: 'Slides/Fase%205%20-%20Muitos%20dados,%20uma%20s%C3%B3%20caixa%20vetores%20e%20matrizes.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase5-Vetores-e-Matrizes'
      },
      '6': {
        tag: 'Aula 6 • Em Construção',
        title: 'Fase 6: Tipos Compostos — Structs e Registros Heterogêneos',
        duration: 'Em Construção',
        theoryTitle: 'Material Teórico Oficial — Fase 6 (Structs e Registros)',
        theoryUrl: 'Slides/Fase%206%20-%20Struct.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase6-Struct'
      },
      '7': {
        tag: 'Projeto Integrado • Disponível',
        title: 'Projeto Integrado: Construindo um Sistema Real de Cadastro em C',
        duration: '07:40 min',
        theoryTitle: 'Projeto Integrado Oficial — Código em C e Documentação',
        theoryUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Projeto-Integrado',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/blob/main/Projeto-Integrado/main.c'
      }
    };

    if (!video) return;

    // Retorna a lista de nomes de arquivos e caminhos suportados para cada aula
    function getLessonVideoSources(id) {
      const list = [
        `Conteúdo-Teórico/aulas/Aula${id}.mp4`,
        `Conte%C3%BAdo-Te%C3%B3rico/aulas/Aula${id}.mp4`,
        `aulas/Aula${id}.mp4`,
        `Conteúdo-Teórico/aulas/aula${id}.mp4`,
        `aulas/aula${id}.mp4`,
        `Conteúdo-Teórico/aulas/Aula_${id}.mp4`,
        `aulas/Aula_${id}.mp4`
      ];
      if (id === '7') {
        list.push(
          'Conteúdo-Teórico/aulas/Projeto_Integrado.mp4',
          'Conte%C3%BAdo-Te%C3%B3rico/aulas/Projeto_Integrado.mp4',
          'aulas/Projeto_Integrado.mp4',
          'Conteúdo-Teórico/aulas/Aula_Projeto_Integrado.mp4',
          'aulas/Aula_Projeto_Integrado.mp4'
        );
      }
      return list;
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

    // Atualiza visualmente o card da aula na grade (incluindo status de conclusão)
    function updateCardStatus(id, exists) {
      const card = document.querySelector(`.upcoming-card[data-lesson="${id}"]`);
      if (!card) return;
      const badge = card.querySelector('.badge-status');
      const done = isLessonDone(id);

      card.classList.toggle('is-completed', Boolean(exists && done));

      if (exists) {
        card.classList.add('active-playable');
        card.classList.remove('playable-theory');
        const titleStr = id === '7' ? 'Clique para abrir o player do Projeto Integrado' : `Clique para abrir o player da Aula ${id}`;
        card.setAttribute('title', titleStr);
        if (badge) {
          if (card.classList.contains('is-playing')) {
            badge.className = 'badge-status ready';
            badge.textContent = '▶ Reproduzindo';
          } else if (done) {
            badge.className = 'badge-status completed';
            badge.textContent = '✓ Concluída';
          } else {
            badge.className = 'badge-status ready';
            badge.textContent = '▶ Assistir Aula';
          }
        }
      } else {
        card.classList.remove('active-playable');
        card.classList.add('playable-theory');
        const titleStr = id === '7' ? 'Projeto Integrado em construção — clique para ver o código em C' : `Aula ${id} em construção — clique para ver o conteúdo teórico`;
        card.setAttribute('title', titleStr);
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

    // Detecta duração real da mídia e retoma de onde o aluno parou (se aplicável)
    video.addEventListener('loadedmetadata', () => {
      if (video.duration && isFinite(video.duration) && video.duration > 0) {
        const mins = Math.floor(video.duration / 60);
        const secs = Math.floor(video.duration % 60).toString().padStart(2, '0');
        const formatted = `${mins}:${secs} min`;
        if (durationBadge && playerFrame.style.display !== 'none') {
          durationBadge.textContent = formatted;
        }

        if (pendingResumeLessonId === currentLessonId && !isLessonDone(currentLessonId)) {
          pendingResumeLessonId = null;
          if (maxWatchedTime > 3 && maxWatchedTime < video.duration - 4) {
            isRevertingSeek = true;
            video.currentTime = maxWatchedTime;
            lastValidTime = maxWatchedTime;
            lastWallMs = performance.now();
            setTimeout(() => { isRevertingSeek = false; }, 150);
          }
        }

        updateWatchBadgeUI(currentLessonId, maxWatchedTime, video.duration);
      }
    });

    // Bloqueia velocidade abusiva (>2x) enquanto aula não estiver concluída
    video.addEventListener('ratechange', () => {
      if (!isLessonDone(currentLessonId) && video.playbackRate > 2) {
        video.playbackRate = 2;
        window.showToast && window.showToast('Velocidade máxima permitida para certificação: 2x.', 'info', 2600);
      }
    });

    // Bloqueia avanço manual (seek para frente) em trechos ainda não assistidos
    function enforceNoSkipForward() {
      if (isRevertingSeek || isLessonDone(currentLessonId)) return;
      if (video.currentTime > maxWatchedTime + 1.0) {
        isRevertingSeek = true;
        video.currentTime = maxWatchedTime;
        lastValidTime = maxWatchedTime;
        lastWallMs = performance.now();
        setTimeout(() => { isRevertingSeek = false; }, 120);
        showSkipBlockedToast();
      }
    }

    video.addEventListener('seeking', enforceNoSkipForward);
    video.addEventListener('seeked', enforceNoSkipForward);

    // Acompanha avanço legítimo em tempo real (protegido contra saltos via console/timeline)
    video.addEventListener('timeupdate', () => {
      if (isRevertingSeek || !video.duration || !isFinite(video.duration) || video.duration <= 0) return;

      if (isLessonDone(currentLessonId)) {
        updateWatchBadgeUI(currentLessonId, video.duration, video.duration);
        return;
      }

      const nowMs = performance.now();
      const deltaWallSec = Math.max(0, (nowMs - lastWallMs) / 1000);
      const effectiveRate = Math.min(video.playbackRate || 1, 2);
      const maxAllowedJump = Math.max(2.5, deltaWallSec * effectiveRate + 1.5);

      if (video.currentTime > maxWatchedTime + maxAllowedJump) {
        isRevertingSeek = true;
        video.currentTime = maxWatchedTime;
        lastValidTime = maxWatchedTime;
        lastWallMs = nowMs;
        setTimeout(() => { isRevertingSeek = false; }, 120);
        showSkipBlockedToast();
        return;
      }

      if (!video.paused && !video.seeking) {
        if (video.currentTime > maxWatchedTime) {
          maxWatchedTime = video.currentTime;
        }
        lastValidTime = video.currentTime;
        lastWallMs = nowMs;
        updateWatchBadgeUI(currentLessonId, maxWatchedTime, video.duration);

        if (nowMs - lastSavedMs >= 3000) {
          lastSavedMs = nowMs;
          persistCurrentWatchProgress();
        }

        // Conclui quando chega legitimamente ao final do vídeo
        if (video.duration > 5 && maxWatchedTime >= video.duration - 1.5) {
          completeCurrentLesson();
        }
      }
    });

    function startPlayback() {
      lastWallMs = performance.now();
      const promise = video.play();
      if (promise !== undefined) {
        promise.then(() => {
          if (bigPlayBtn) bigPlayBtn.classList.add('playing');
          if (liveDot) liveDot.classList.add('is-live');
          const currentCard = document.querySelector(`.upcoming-card[data-lesson="${currentLessonId}"]`);
          if (currentCard) {
            currentCard.classList.add('is-playing');
            const badge = currentCard.querySelector('.badge-status');
            if (badge) {
              badge.className = 'badge-status ready';
              badge.textContent = '▶ Reproduzindo';
            }
          }
        }).catch(err => {
          console.warn('Playback error or blocked interaction:', err);
          if (bigPlayBtn) bigPlayBtn.classList.remove('playing');
          updateCardStatus(currentLessonId, true);
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

      // Salva progresso da aula anterior antes de trocar
      persistCurrentWatchProgress();

      const prevCard = document.querySelector(`.upcoming-card[data-lesson="${currentLessonId}"]`);
      if (prevCard && currentLessonId !== lessonId) {
        prevCard.classList.remove('is-playing');
        const prevAvail = Boolean(videoAvailabilityCache[currentLessonId] && videoAvailabilityCache[currentLessonId].available);
        updateCardStatus(currentLessonId, prevAvail);
      }

      currentLessonId = lessonId;

      // Carrega marca d'água salva para esta aula
      const savedProg = T ? T.getLessonProgress(lessonId) : { maxTime: 0, duration: 0, completed: false };
      maxWatchedTime = savedProg.maxTime || 0;
      lastValidTime = maxWatchedTime;
      lastWallMs = performance.now();
      lastSavedMs = 0;

      // Destaca o card selecionado
      lessonCards.forEach(c => {
        const isCurrent = c.getAttribute('data-lesson') === lessonId;
        c.classList.toggle('is-selected', isCurrent);
        c.setAttribute('aria-expanded', isCurrent ? 'true' : 'false');
      });

      // Atualiza cabeçalho e links do material teórico
      if (lessonTitle) lessonTitle.textContent = data.title;
      if (theoryBarTitle) theoryBarTitle.textContent = data.theoryTitle;
      if (btnTheoryLink) {
        btnTheoryLink.href = data.theoryUrl;
        const textSpan = btnTheoryLink.querySelector('span');
        if (textSpan) {
          textSpan.textContent = lessonId === '7' ? 'Acessar Documentação do Projeto' : 'Clique aqui e acesse o conteúdo teórico';
        }
      }
      if (btnExercisesLink) {
        btnExercisesLink.href = data.exercisesUrl;
        const textSpan = btnExercisesLink.querySelector('span');
        if (textSpan) {
          textSpan.textContent = lessonId === '7' ? 'Ver Código do Projeto em C' : 'Ver Exercícios em C';
        }
      }

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
        if (watchBadge) watchBadge.style.display = 'inline-flex';

        // Configura fontes do vídeo para esta aula
        currentVideoSources = getLessonVideoSources(lessonId);
        currentSrcIndex = currentVideoSources.indexOf(videoCheck.validSrc);
        if (currentSrcIndex === -1) currentSrcIndex = 0;

        if (video.getAttribute('data-loaded-lesson') !== lessonId || !video.src) {
          pendingResumeLessonId = lessonId;
          video.src = videoCheck.validSrc;
          video.setAttribute('data-loaded-lesson', lessonId);
          video.load();
        }

        updateWatchBadgeUI(lessonId, maxWatchedTime, savedProg.duration || video.duration || 0);

        // Atualiza botão de play com o número da aula
        if (bigPlayBtn) {
          const label = bigPlayBtn.querySelector('.player-big-play-label');
          if (label) {
            label.textContent = lessonId === '7' ? 'Dar Play no Projeto Integrado' : `Dar Play na Aula ${lessonId}`;
          }
          bigPlayBtn.setAttribute('aria-label', lessonId === '7' ? 'Iniciar reprodução do Projeto Integrado' : `Iniciar reprodução da Aula ${lessonId}`);
          bigPlayBtn.classList.remove('playing');
        }

        // Atualiza link de download direto
        if (directFileLink) {
          directFileLink.href = videoCheck.validSrc;
          directFileLink.setAttribute('download', `Aula${lessonId}.mp4`);
        }

        if (lessonTag) {
          lessonTag.textContent = lessonId === '7' ? 'Projeto Integrado • Disponível' : `Aula ${lessonId} • Disponível`;
        }
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
        if (watchBadge) watchBadge.style.display = 'none';

        if (recordingNoticeTitle) {
          recordingNoticeTitle.textContent = lessonId === '7' ? 'Projeto Integrado: Videoaula em Construção' : `Aula ${lessonId}: Videoaula em Construção`;
        }
        if (recordingNoticeDesc) {
          recordingNoticeDesc.innerHTML = `O arquivo de vídeo desta aula (<strong>Aula${lessonId}.mp4</strong>) ainda não foi inserido na pasta <code>Conteúdo-Teórico/aulas/</code>. Enquanto a videoaula está em construção, o <strong>Conteúdo Teórico em PDF</strong> e os <strong>Exercícios Resolvidos em C</strong> já estão 100% disponíveis nos botões acima!`;
        }

        if (lessonTag) {
          lessonTag.textContent = lessonId === '7' ? 'Projeto Integrado • Em Construção' : `Aula ${lessonId} • Em Construção`;
        }
        if (durationBadge) durationBadge.textContent = 'Em Construção';

        updateCardStatus(lessonId, false);
      }

      setTimeout(() => {
        drawerWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 80);
    }

    // Expõe abertura de aula para o Hub de Certificação
    window.openCourseLesson = function (lessonId) {
      openLessonDrawer(String(lessonId), true);
    };

    function closeLessonDrawer() {
      if (!drawerWrap) return;
      persistCurrentWatchProgress();
      video.pause();
      drawerWrap.classList.remove('is-open');
      drawerWrap.setAttribute('aria-hidden', 'true');
      lessonCards.forEach(c => {
        c.classList.remove('is-selected');
        c.setAttribute('aria-expanded', 'false');
        c.classList.remove('is-playing');
        const lessonId = c.getAttribute('data-lesson');
        const exists = Boolean(videoAvailabilityCache[lessonId] && videoAvailabilityCache[lessonId].available);
        updateCardStatus(lessonId, exists);
      });
    }

    if (btnClosePlayer) {
      btnClosePlayer.addEventListener('click', closeLessonDrawer);
    }

    // Associa eventos de clique e teclado a todos os cards de aula
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
      lastWallMs = performance.now();
      if (!isLessonDone(currentLessonId) && video.currentTime > maxWatchedTime + 1.0) {
        enforceNoSkipForward();
      }
      if (bigPlayBtn) bigPlayBtn.classList.add('playing');
      if (liveDot) liveDot.classList.add('is-live');
      const currentCard = document.querySelector(`.upcoming-card[data-lesson="${currentLessonId}"]`);
      if (currentCard) {
        currentCard.classList.add('is-playing');
        const badge = currentCard.querySelector('.badge-status');
        if (badge) {
          badge.className = 'badge-status ready';
          badge.textContent = '▶ Reproduzindo';
        }
      }
    });

    video.addEventListener('pause', () => {
      persistCurrentWatchProgress();
      if (video.currentTime === 0 || video.ended) {
        if (bigPlayBtn) bigPlayBtn.classList.remove('playing');
      }
      if (liveDot) liveDot.classList.remove('is-live');
      const currentCard = document.querySelector(`.upcoming-card[data-lesson="${currentLessonId}"]`);
      if (currentCard) {
        currentCard.classList.remove('is-playing');
        const badge = currentCard.querySelector('.badge-status');
        if (badge && drawerWrap && drawerWrap.classList.contains('is-open')) {
          if (isLessonDone(currentLessonId)) {
            badge.className = 'badge-status completed';
            badge.textContent = '✓ Concluída';
          } else {
            badge.textContent = '⏸ Pausado';
          }
        }
      }
    });

    video.addEventListener('ended', () => {
      if (bigPlayBtn) bigPlayBtn.classList.remove('playing');
      if (liveDot) liveDot.classList.remove('is-live');

      // Valida se o aluno realmente assistiu até o final (não pulou via script)
      if (!isLessonDone(currentLessonId)) {
        if (video.duration && isFinite(video.duration) && video.duration > 5 && maxWatchedTime >= video.duration - 3.5) {
          completeCurrentLesson();
        } else {
          isRevertingSeek = true;
          video.currentTime = maxWatchedTime;
          setTimeout(() => { isRevertingSeek = false; }, 120);
          showSkipBlockedToast();
          return;
        }
      } else {
        const currentCard = document.querySelector(`.upcoming-card[data-lesson="${currentLessonId}"]`);
        if (currentCard) {
          currentCard.classList.remove('is-playing');
          updateCardStatus(currentLessonId, true);
        }
      }
    });

    // Salva progresso ao sair/fechar a aba
    window.addEventListener('beforeunload', persistCurrentWatchProgress);

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
      const availableIds = [];
      for (const id of ['1', '2', '3', '4', '5', '6', '7']) {
        const res = await verifyLessonVideo(id);
        if (res.available) {
          availableIds.push(id);
        }
        updateCardStatus(id, res.available);
      }
      if (T && availableIds.length > 0) {
        T.setRequiredLessons(availableIds);
      }
      if (window.refreshCertificateHubUI) {
        window.refreshCertificateHubUI();
      }
    }
    probeAllLessons();
  }

  // Hub de Progresso e Emissão do Certificado (10 Horas)
  function setupCertificateHub() {
    const T = window.TCLCert;
    if (!T) return;

    const progressPercentEl = document.getElementById('certProgressPercent');
    const progressCountEl = document.getElementById('certProgressCount');
    const progressFillEl = document.getElementById('certProgressFill');
    const progressTrackEl = document.getElementById('certProgressTrack');
    const checklistEl = document.getElementById('certLessonChecklist');
    const lockedPanel = document.getElementById('certLockedPanel');
    const unlockedPanel = document.getElementById('certUnlockedPanel');
    const frozenDateEl = document.getElementById('homeCertFrozenDate');
    const btnResumeNext = document.getElementById('btnResumeNextLesson');

    const homeForm = document.getElementById('homeCertForm');
    const inputName = document.getElementById('homeCertName');
    const inputCpf = document.getElementById('homeCertCpf');
    const nameStatus = document.getElementById('homeNameStatus');
    const cpfStatus = document.getElementById('homeCpfStatus');

    const shortLabels = {
      '1': 'Aula 1',
      '2': 'Aula 2',
      '3': 'Aula 3',
      '4': 'Aula 4',
      '5': 'Aula 5',
      '6': 'Aula 6',
      '7': 'Projeto Integrado'
    };

    function refreshUI() {
      const summary = T.getCompletionSummary();

      if (progressPercentEl) progressPercentEl.textContent = `${summary.percent}%`;
      if (progressCountEl) progressCountEl.textContent = `${summary.completedCount} de ${summary.totalCount} aulas`;
      if (progressFillEl) progressFillEl.style.width = `${summary.percent}%`;
      if (progressTrackEl) progressTrackEl.setAttribute('aria-valuenow', String(summary.percent));

      if (checklistEl) {
        checklistEl.innerHTML = summary.requiredIds
          .map(id => {
            const done = summary.completedIds.includes(id);
            const label = shortLabels[id] || `Aula ${id}`;
            return `<button type="button" class="cert-lesson-chip ${done ? 'done' : ''}" data-jump-lesson="${id}" title="${done ? 'Aula concluída! Clique para rever' : 'Clique para assistir esta aula'}">${done ? '✓' : '○'} ${label}</button>`;
          })
          .join('');

        checklistEl.querySelectorAll('[data-jump-lesson]').forEach(btn => {
          btn.addEventListener('click', () => {
            const lid = btn.getAttribute('data-jump-lesson');
            const sec = document.getElementById('videoaulas');
            if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (window.openCourseLesson) {
              setTimeout(() => window.openCourseLesson(lid), 200);
            }
          });
        });
      }

      if (summary.isCompleted) {
        if (lockedPanel) lockedPanel.style.display = 'none';
        if (unlockedPanel) unlockedPanel.style.display = 'block';
        if (frozenDateEl) {
          frozenDateEl.textContent = `Conclusão registrada em: ${T.formatDateShort(summary.courseCompletedAt)}`;
        }
        const savedStudent = T.getStudentInfo();
        if (inputName && !inputName.value && savedStudent.name) {
          inputName.value = savedStudent.name;
        }
        if (inputCpf && !inputCpf.value && savedStudent.cpf) {
          inputCpf.value = savedStudent.cpf;
        }
      } else {
        if (lockedPanel) lockedPanel.style.display = 'flex';
        if (unlockedPanel) unlockedPanel.style.display = 'none';
      }
    }

    window.refreshCertificateHubUI = refreshUI;

    if (btnResumeNext) {
      btnResumeNext.addEventListener('click', (e) => {
        const summary = T.getCompletionSummary();
        if (summary.pendingIds.length > 0 && window.openCourseLesson) {
          e.preventDefault();
          const nextId = summary.pendingIds[0];
          const sec = document.getElementById('videoaulas');
          if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => window.openCourseLesson(nextId), 200);
        }
      });
    }

    if (inputName) {
      inputName.addEventListener('input', () => {
        if (!inputName.value.trim()) {
          nameStatus.textContent = '';
          return;
        }
        if (T.isValidFullName(inputName.value)) {
          nameStatus.textContent = '✓ Válido';
          nameStatus.className = 'cert-field-status ok';
        } else {
          nameStatus.textContent = 'Nome e sobrenome';
          nameStatus.className = 'cert-field-status err';
        }
      });
    }

    if (inputCpf) {
      inputCpf.addEventListener('input', () => {
        inputCpf.value = T.formatCPF(inputCpf.value);
        const digits = T.cleanCPF(inputCpf.value);
        if (digits.length === 0) {
          cpfStatus.textContent = '';
          return;
        }
        if (digits.length < 11) {
          cpfStatus.textContent = `${digits.length}/11`;
          cpfStatus.className = 'cert-field-status';
          return;
        }
        if (T.isValidCPF(inputCpf.value)) {
          cpfStatus.textContent = '✓ CPF Válido';
          cpfStatus.className = 'cert-field-status ok';
        } else {
          cpfStatus.textContent = '✕ CPF Inválido';
          cpfStatus.className = 'cert-field-status err';
        }
      });
    }

    if (homeForm) {
      homeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!T.isCourseCompleted()) {
          window.showToast && window.showToast('Assista a todas as aulas até o final para emitir o certificado.', 'error');
          refreshUI();
          return;
        }
        if (!T.isValidFullName(inputName.value)) {
          window.showToast && window.showToast('Informe seu nome e sobrenome completos.', 'error');
          inputName.focus();
          return;
        }
        if (!T.isValidCPF(inputCpf.value)) {
          window.showToast && window.showToast('Informe um CPF válido (verifique os dígitos).', 'error');
          inputCpf.focus();
          return;
        }
        T.saveStudentInfo(inputName.value, inputCpf.value);
        window.location.href = 'certificado.html';
      });
    }

    refreshUI();
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
    setupCertificateHub();
    setupCitationCopy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
