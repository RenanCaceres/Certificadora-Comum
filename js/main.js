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
      });

      // Close menu when clicking link
      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
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

  // Course Video Player Controller
  function setupCoursePlayer() {
    const video = document.getElementById('mainCourseVideo');
    const bigPlayBtn = document.getElementById('btnBigPlay');
    const playerFrame = document.getElementById('playerFrameBox');
    const liveDot = document.getElementById('playerLiveDot');
    const cardLesson1 = document.getElementById('cardLesson1');

    if (!video) return;

    function startPlayback() {
      const promise = video.play();
      if (promise !== undefined) {
        promise.then(() => {
          if (bigPlayBtn) bigPlayBtn.classList.add('playing');
          if (liveDot) liveDot.classList.add('is-live');
          if (cardLesson1) cardLesson1.classList.add('is-playing');
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
        // If clicking on native controls bar (bottom 45px), let native controls handle it
        const rect = playerFrame.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        if (clickY > rect.height - 48 && !video.paused) {
          return;
        }
        togglePlayback();
      });
    }

    // Video events
    video.addEventListener('play', () => {
      if (bigPlayBtn) bigPlayBtn.classList.add('playing');
      if (liveDot) liveDot.classList.add('is-live');
      if (cardLesson1) cardLesson1.classList.add('is-playing');
    });

    video.addEventListener('pause', () => {
      if (bigPlayBtn) bigPlayBtn.classList.remove('playing');
      if (liveDot) liveDot.classList.remove('is-live');
      if (cardLesson1) cardLesson1.classList.remove('is-playing');
    });

    video.addEventListener('ended', () => {
      if (bigPlayBtn) bigPlayBtn.classList.remove('playing');
      if (liveDot) liveDot.classList.remove('is-live');
      if (cardLesson1) cardLesson1.classList.remove('is-playing');
      window.showToast && window.showToast('Aula 1 concluída com sucesso!', 'success');
    });

    // Lesson 1 card click trigger
    if (cardLesson1) {
      cardLesson1.addEventListener('click', () => {
        if (playerFrame) {
          playerFrame.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        startPlayback();
      });

      cardLesson1.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (playerFrame) {
            playerFrame.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          startPlayback();
        }
      });
    }

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
