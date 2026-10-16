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
    const cardLesson1 = document.getElementById('cardLesson1');
    const badgeLesson1 = document.getElementById('badgeLesson1');
    const drawerWrap = document.getElementById('playerDrawerWrap');
    const btnClosePlayer = document.getElementById('btnClosePlayer');

    const lessonTag = document.getElementById('playerLessonTag');
    const lessonTitle = document.getElementById('playerLessonTitle');
    const durationBadge = document.getElementById('playerDurationBadge');
    const theoryBarTitle = document.getElementById('theoryBarTitle');
    const btnTheoryLink = document.getElementById('btnTheoryLink');
    const btnExercisesLink = document.getElementById('btnExercisesLink');

    const lessonCards = document.querySelectorAll('.upcoming-card[data-lesson]');

    const lessonsData = {
      '1': {
        tag: 'Aula 1 • Disponível',
        title: 'Fase 1: Primeiros Passos em C — Algoritmos, Memória e Variáveis',
        duration: '14:14 min',
        theoryTitle: 'Material Teórico Oficial — Fase 1 (Primeiros Passos em C)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Fase%201%20-%20Primeiros%20Passos%20em%20C.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase1-Primeiros-Passos',
        hasVideo: true
      },
      '2': {
        tag: 'Aula 2 • Conteúdo Teórico Disponível',
        title: 'Fase 2: O Programa Aprende a Decidir — if, else e switch-case',
        duration: 'Em Gravação',
        theoryTitle: 'Material Teórico Oficial — Fase 2 (Tomada de Decisão)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Fase%202%20-%20O%20Programa%20Aprende%20a%20Decidir.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase2-Decisoes',
        hasVideo: false
      },
      '3': {
        tag: 'Aula 3 • Conteúdo Teórico Disponível',
        title: 'Fase 3: Repita Comigo — Laços de Repetição (for, while, do-while)',
        duration: 'Em Gravação',
        theoryTitle: 'Material Teórico Oficial — Fase 3 (Laços de Repetição)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Fase%203%20-%20Repita%20Comigo%20La%C3%A7os%20de%20Repeti%C3%A7%C3%A3o.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase3-Lacos-de-Repeticao',
        hasVideo: false
      },
      '4': {
        tag: 'Aula 4 • Conteúdo Teórico Disponível',
        title: 'Fase 4: Dividir para Programar — Funções, Escopo e Modularização',
        duration: 'Em Gravação',
        theoryTitle: 'Material Teórico Oficial — Fase 4 (Funções e Modularização)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Aula%20Fase%204%20-%20Dividir%20Para%20Programar.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase4-Modularizacao',
        hasVideo: false
      },
      '5': {
        tag: 'Aula 5 • Conteúdo Teórico Disponível',
        title: 'Fase 5: Muitos Dados, Uma Só Caixa — Vetores e Matrizes',
        duration: 'Em Gravação',
        theoryTitle: 'Material Teórico Oficial — Fase 5 (Vetores e Matrizes)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Fase%205%20-%20Muitos%20dados,%20uma%20s%C3%B3%20caixa%20vetores%20e%20matrizes.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase5-Vetores-e-Matrizes',
        hasVideo: false
      },
      '6': {
        tag: 'Aula 6 • Conteúdo Teórico Disponível',
        title: 'Fase 6: Tipos Compostos — Structs e Registros Heterogêneos',
        duration: 'Em Gravação',
        theoryTitle: 'Material Teórico Oficial — Fase 6 (Structs e Registros)',
        theoryUrl: 'Conte%C3%BAdo-Te%C3%B3rico/Fase%206%20-%20Struct%20.pdf',
        exercisesUrl: 'https://github.com/RenanCaceres/Certificadora-Comum/tree/main/Gabarito-Exerc%C3%ADcios/Fase6-Struct',
        hasVideo: false
      }
    };

    if (!video) return;

    function startPlayback() {
      const promise = video.play();
      if (promise !== undefined) {
        promise.then(() => {
          if (bigPlayBtn) bigPlayBtn.classList.add('playing');
          if (liveDot) liveDot.classList.add('is-live');
          if (cardLesson1) cardLesson1.classList.add('is-playing');
          if (badgeLesson1) badgeLesson1.textContent = '▶ Reproduzindo';
        }).catch(err => {
          console.warn('Playback error or blocked interaction:', err);
          video.controls = true;
          window.showToast && window.showToast('Clique no botão de reproduzir na barra do vídeo.', 'info');
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

    function openLessonDrawer(lessonId, autoPlayVideo) {
      const data = lessonsData[lessonId];
      if (!data || !drawerWrap) return;

      // Highlight selected card
      lessonCards.forEach(c => {
        const isCurrent = c.getAttribute('data-lesson') === lessonId;
        c.classList.toggle('is-selected', isCurrent);
        c.setAttribute('aria-expanded', isCurrent ? 'true' : 'false');
      });

      // Update header & theory bar links
      if (lessonTag) lessonTag.textContent = data.tag;
      if (lessonTitle) lessonTitle.textContent = data.title;
      if (durationBadge) durationBadge.textContent = data.duration;
      if (theoryBarTitle) theoryBarTitle.textContent = data.theoryTitle;
      if (btnTheoryLink) btnTheoryLink.href = data.theoryUrl;
      if (btnExercisesLink) btnExercisesLink.href = data.exercisesUrl;

      if (data.hasVideo) {
        if (playerFrame) playerFrame.style.display = 'block';
        if (playerFooterBar) playerFooterBar.style.display = 'flex';
        if (recordingNotice) recordingNotice.style.display = 'none';
      } else {
        video.pause();
        if (playerFrame) playerFrame.style.display = 'none';
        if (playerFooterBar) playerFooterBar.style.display = 'none';
        if (recordingNotice) recordingNotice.style.display = 'block';
      }

      // Open the drawer underneath the cards
      drawerWrap.classList.add('is-open');
      drawerWrap.setAttribute('aria-hidden', 'false');

      setTimeout(() => {
        drawerWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 80);

      if (data.hasVideo && autoPlayVideo) {
        startPlayback();
      }
    }

    function closeLessonDrawer() {
      if (!drawerWrap) return;
      video.pause();
      drawerWrap.classList.remove('is-open');
      drawerWrap.setAttribute('aria-hidden', 'true');
      lessonCards.forEach(c => {
        c.classList.remove('is-selected');
        c.setAttribute('aria-expanded', 'false');
      });
      if (badgeLesson1) badgeLesson1.textContent = '▶ Assistir Aula';
    }

    if (btnClosePlayer) {
      btnClosePlayer.addEventListener('click', closeLessonDrawer);
    }

    // Bind click and keyboard events to all 6 lesson cards
    lessonCards.forEach(card => {
      const lessonId = card.getAttribute('data-lesson');
      card.addEventListener('click', () => {
        openLessonDrawer(lessonId, lessonId === '1');
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLessonDrawer(lessonId, lessonId === '1');
        }
      });
    });

    // Big play button overlay click
    if (bigPlayBtn) {
      bigPlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startPlayback();
      });
    }

    // Frame click toggles play/pause
    if (playerFrame) {
      playerFrame.addEventListener('click', (e) => {
        const rect = playerFrame.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        if (clickY > rect.height - 48 && !video.paused) {
          return;
        }
        togglePlayback();
      });
    }

    // Video events: keep bigPlayBtn hidden while paused mid-video so slides remain completely visible
    video.addEventListener('play', () => {
      if (bigPlayBtn) bigPlayBtn.classList.add('playing');
      if (liveDot) liveDot.classList.add('is-live');
      if (cardLesson1) cardLesson1.classList.add('is-playing');
      if (badgeLesson1) badgeLesson1.textContent = '▶ Reproduzindo';
    });

    video.addEventListener('pause', () => {
      if (video.currentTime === 0 || video.ended) {
        if (bigPlayBtn) bigPlayBtn.classList.remove('playing');
      }
      if (liveDot) liveDot.classList.remove('is-live');
      if (cardLesson1) cardLesson1.classList.remove('is-playing');
      if (badgeLesson1 && drawerWrap && drawerWrap.classList.contains('is-open')) {
        badgeLesson1.textContent = '⏸ Pausado';
      }
    });

    video.addEventListener('ended', () => {
      if (bigPlayBtn) bigPlayBtn.classList.remove('playing');
      if (liveDot) liveDot.classList.remove('is-live');
      if (cardLesson1) cardLesson1.classList.remove('is-playing');
      if (badgeLesson1) badgeLesson1.textContent = '✓ Aula Concluída';
      window.showToast && window.showToast('Aula 1 concluída! Acesse o conteúdo teórico acima.', 'success');
    });

    // Spacebar keyboard shortcut
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
      if (e.code === 'Space' && (document.activeElement === video || (playerFrame && playerFrame.contains(document.activeElement)))) {
        e.preventDefault();
        togglePlayback();
      }
    });
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
