/**
 * Try, Catch & Learn — Core Engine de Certificação, Progresso e Validação Criptográfica
 * Funciona 100% client-side (sem backend), compatível com GitHub Pages (HTTPS) e acesso local (file://).
 */
(function (global) {
  'use strict';

  const STORAGE_KEY = 'tcl_course_progress_v1';
  const SECRET_SALT = 'TCL-REA-C-FUNDAMENTOS-2026#9F4A7C2E';
  const DEFAULT_REQUIRED_LESSONS = ['1', '2', '3', '4', '5', '7'];

  // =========================================================================
  // 1. SHA-256 PURO EM JAVASCRIPT (FIPS 180-4) — Funciona em HTTPS e file://
  // =========================================================================
  function sha256(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }

    const mathPow = Math.pow;
    const maxWord = mathPow(2, 32);
    let result = '';

    const words = [];
    const utf8 = unescape(encodeURIComponent(ascii));
    const asciiBitLength = utf8.length * 8;

    const hash = [];
    const k = [];
    let primeCounter = 0;

    const isComposite = {};
    for (let candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (let i = 0; i < 313; i += candidate) {
          isComposite[i] = candidate;
        }
        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      }
    }

    const padded = utf8 + '\x80';
    let paddedStr = padded;
    while ((paddedStr.length % 64) - 56) paddedStr += '\x00';

    for (let i = 0; i < paddedStr.length; i++) {
      const j = paddedStr.charCodeAt(i);
      if (j >> 8) return '';
      words[i >> 2] |= j << (((3 - i) % 4) * 8);
    }
    words[words.length] = (asciiBitLength / maxWord) | 0;
    words[words.length] = asciiBitLength;

    for (let j = 0; j < words.length;) {
      const w = words.slice(j, (j += 16));
      const oldHash = hash.slice(0);

      for (let i = 0; i < 64; i++) {
        const w15 = w[i - 15];
        const w2 = w[i - 2];

        const a = hash[0];
        const e = hash[4];
        const temp1 =
          hash[7] +
          (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
          ((e & hash[5]) ^ (~e & hash[6])) +
          k[i] +
          (w[i] =
            i < 16
              ? w[i]
              : (w[i - 16] +
                  (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
                  w[i - 7] +
                  (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) |
                0);
        const temp2 =
          (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
          ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));

        hash.unshift((temp1 + temp2) | 0);
        hash[4] = (hash[4] + temp1) | 0;
        hash.pop();
      }

      for (let i = 0; i < 8; i++) {
        hash[i] = (hash[i] + oldHash[i]) | 0;
      }
    }

    for (let i = 0; i < 8; i++) {
      for (let j = 3; j + 1; j--) {
        const b = (hash[i] >> (j * 8)) & 255;
        result += (b < 16 ? '0' : '') + b.toString(16);
      }
    }
    return result;
  }

  // =========================================================================
  // 2. UTILITÁRIOS DE NOME, CPF E DATA
  // =========================================================================
  function normalizeName(name) {
    return (name || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toUpperCase();
  }

  function cleanCPF(cpf) {
    return String(cpf || '').replace(/\D/g, '').slice(0, 11);
  }

  function formatCPF(cpf) {
    const digits = cleanCPF(cpf);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return digits.replace(/(\d{3})(\d+)/, '$1.$2');
    if (digits.length <= 9) return digits.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  }

  function maskCPFPrivacy(cpf) {
    const formatted = formatCPF(cpf);
    if (formatted.length === 14) {
      return formatted.replace(/^\d{3}\.(\d{3}\.\d{3})-\d{2}$/, '***.$1-**');
    }
    return '***.***.***-**';
  }

  function isValidCPF(cpf) {
    const digits = cleanCPF(cpf);
    if (digits.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(digits)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(digits.charAt(i), 10) * (10 - i);
    }
    let rev = 11 - (sum % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(digits.charAt(9), 10)) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(digits.charAt(i), 10) * (11 - i);
    }
    rev = 11 - (sum % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(digits.charAt(10), 10)) return false;

    return true;
  }

  function isValidFullName(name) {
    const cleaned = String(name || '').trim().replace(/\s+/g, ' ');
    const parts = cleaned.split(' ').filter(p => p.length >= 2);
    return cleaned.length >= 5 && parts.length >= 2;
  }

  function getLocalISODate(dateObj) {
    const d = dateObj instanceof Date ? dateObj : new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  function formatDatePTBR(isoDate) {
    if (!isoDate || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) {
      isoDate = getLocalISODate();
    }
    const [year, month, day] = isoDate.split('-').map(Number);
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return `${day} de ${meses[month - 1]} de ${year}`;
  }

  function formatDateShort(isoDate) {
    if (!isoDate || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return '';
    const [year, month, day] = isoDate.split('-');
    return `${day}/${month}/${year}`;
  }

  // =========================================================================
  // 3. GERAÇÃO E VALIDAÇÃO DO HASH CRIPTOGRÁFICO
  // =========================================================================
  function generateHash(name, cpf, isoDate) {
    const normName = normalizeName(name);
    const cpfDigits = cleanCPF(cpf);
    const datePart = /^\d{4}-\d{2}-\d{2}$/.test(isoDate || '') ? isoDate : getLocalISODate();
    const year = datePart.slice(0, 4);

    const payload = `TCL|v1|${normName}|${cpfDigits}|${datePart}|10H|${SECRET_SALT}`;
    const digest = sha256(payload).toUpperCase();
    const part1 = digest.slice(0, 4);
    const part2 = digest.slice(4, 8);
    const part3 = digest.slice(8, 12);

    return `TCL-${year}-${part1}-${part2}${part3.slice(0, 2)}`;
  }

  function normalizeHashInput(hash) {
    return String(hash || '').trim().toUpperCase().replace(/\s+/g, '');
  }

  function verifyCertificate(name, cpf, isoDate, providedHash) {
    if (!isValidFullName(name)) {
      return { valid: false, reason: 'Informe o nome completo do estudante.' };
    }
    if (!isValidCPF(cpf)) {
      return { valid: false, reason: 'O CPF informado não é matematicamente válido.' };
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate || '')) {
      return { valid: false, reason: 'Informe uma data de conclusão válida.' };
    }

    const cleanProvided = normalizeHashInput(providedHash);
    if (!cleanProvided) {
      return { valid: false, reason: 'Informe o código de registro (hash) impresso no certificado.' };
    }

    const expected = generateHash(name, cpf, isoDate);
    const valid = cleanProvided === expected;

    return {
      valid,
      expectedHash: expected,
      providedHash: cleanProvided,
      normalizedName: String(name).trim().replace(/\s+/g, ' '),
      maskedCpf: maskCPFPrivacy(cpf),
      isoDate,
      formattedDate: formatDatePTBR(isoDate),
      reason: valid
        ? 'Assinatura criptográfica confirmada com 100% de integridade.'
        : 'O código de registro não corresponde à combinação de Nome, CPF e Data informados.'
    };
  }

  // =========================================================================
  // 4. TOKEN COMPACTO BASE64URL PARA QR CODE E LINK DE VALIDAÇÃO
  // =========================================================================
  function encodeBase64Url(str) {
    const bytes = new TextEncoder().encode(str);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function decodeBase64Url(b64url) {
    try {
      let b64 = String(b64url || '').replace(/-/g, '+').replace(/_/g, '/');
      while (b64.length % 4) b64 += '=';
      const binary = atob(b64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      return new TextDecoder().decode(bytes);
    } catch (e) {
      return null;
    }
  }

  function buildValidationUrl(name, cpf, isoDate, hash) {
    const payload = JSON.stringify({
      n: String(name || '').trim().replace(/\s+/g, ' '),
      c: cleanCPF(cpf),
      d: isoDate,
      h: normalizeHashInput(hash)
    });
    const token = encodeBase64Url(payload);

    let baseUrl = '';
    if (global.location && global.location.protocol && global.location.protocol.startsWith('http')) {
      const origin = global.location.origin;
      const pathDir = global.location.pathname.replace(/[^/]*$/, '');
      baseUrl = `${origin}${pathDir}validar.html`;
    } else {
      baseUrl = 'https://renancaceres.github.io/Certificadora-Comum/validar.html';
    }
    return `${baseUrl}?t=${encodeURIComponent(token)}`;
  }

  function parseValidationToken(token) {
    const decoded = decodeBase64Url(token);
    if (!decoded) return null;
    try {
      const obj = JSON.parse(decoded);
      if (obj && obj.n && obj.c && obj.d && obj.h) {
        return {
          name: String(obj.n),
          cpf: formatCPF(obj.c),
          isoDate: String(obj.d),
          hash: String(obj.h)
        };
      }
    } catch (e) {}
    return null;
  }

  // =========================================================================
  // 5. GERENCIAMENTO DE PROGRESSO DAS VIDEOAULAS (LOCALSTORAGE)
  // =========================================================================
  function getDefaultState() {
    return {
      lessons: {},
      requiredLessons: DEFAULT_REQUIRED_LESSONS.slice(),
      courseCompletedAt: null,
      student: {
        name: '',
        cpf: ''
      }
    };
  }

  function getProgress() {
    try {
      const raw = global.localStorage.getItem(STORAGE_KEY);
      if (!raw) return getDefaultState();
      const parsed = JSON.parse(raw);
      return {
        lessons: parsed.lessons && typeof parsed.lessons === 'object' ? parsed.lessons : {},
        requiredLessons:
          Array.isArray(parsed.requiredLessons) && parsed.requiredLessons.length > 0
            ? parsed.requiredLessons.map(String)
            : DEFAULT_REQUIRED_LESSONS.slice(),
        courseCompletedAt: parsed.courseCompletedAt || null,
        student: {
          name: (parsed.student && parsed.student.name) || '',
          cpf: (parsed.student && parsed.student.cpf) || ''
        }
      };
    } catch (e) {
      return getDefaultState();
    }
  }

  function saveProgress(state) {
    try {
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Não foi possível salvar progresso no localStorage:', e);
    }
  }

  function setRequiredLessons(lessonIds) {
    if (!Array.isArray(lessonIds) || lessonIds.length === 0) return;
    const state = getProgress();
    const normalized = Array.from(new Set(lessonIds.map(String))).sort((a, b) => Number(a) - Number(b));
    state.requiredLessons = normalized;

    // Verifica se todas as aulas agora requeridas já estão concluídas
    const allDone = normalized.every(id => state.lessons[id] && state.lessons[id].completed === true);
    if (allDone && !state.courseCompletedAt) {
      state.courseCompletedAt = getLocalISODate();
    }
    saveProgress(state);
    return state;
  }

  function getRequiredLessons() {
    return getProgress().requiredLessons;
  }

  function getLessonProgress(lessonId) {
    const id = String(lessonId);
    const state = getProgress();
    return (
      state.lessons[id] || {
        maxTime: 0,
        duration: 0,
        completed: false,
        completedAt: null
      }
    );
  }

  function updateLessonWatchTime(lessonId, maxTime, duration) {
    const id = String(lessonId);
    const state = getProgress();
    const prev = state.lessons[id] || { maxTime: 0, duration: 0, completed: false, completedAt: null };
    state.lessons[id] = {
      maxTime: Math.max(prev.maxTime || 0, Number(maxTime) || 0),
      duration: Number(duration) > 0 ? Number(duration) : (prev.duration || 0),
      completed: Boolean(prev.completed),
      completedAt: prev.completedAt || null
    };
    saveProgress(state);
    return state.lessons[id];
  }

  function markLessonCompleted(lessonId, duration) {
    const id = String(lessonId);
    const state = getProgress();
    const prev = state.lessons[id] || { maxTime: 0, duration: 0, completed: false, completedAt: null };
    const finalDur = Number(duration) > 0 ? Number(duration) : (prev.duration || prev.maxTime || 0);

    state.lessons[id] = {
      maxTime: Math.max(prev.maxTime || 0, finalDur),
      duration: finalDur,
      completed: true,
      completedAt: prev.completedAt || getLocalISODate()
    };

    const wasCourseCompleted = Boolean(state.courseCompletedAt);
    const allDone = state.requiredLessons.every(reqId => state.lessons[reqId] && state.lessons[reqId].completed === true);

    if (allDone && !state.courseCompletedAt) {
      // Congela permanentemente a data no instante em que o aluno termina a última aula pendente
      state.courseCompletedAt = getLocalISODate();
    }

    saveProgress(state);
    return {
      state,
      justCompletedCourse: allDone && !wasCourseCompleted,
      allCompleted: allDone
    };
  }

  function isLessonCompleted(lessonId) {
    const p = getLessonProgress(lessonId);
    return Boolean(p.completed);
  }

  function getCompletionSummary() {
    const state = getProgress();
    const required = state.requiredLessons;
    const completedIds = required.filter(id => state.lessons[id] && state.lessons[id].completed === true);
    const pendingIds = required.filter(id => !(state.lessons[id] && state.lessons[id].completed === true));
    const percent = required.length > 0 ? Math.round((completedIds.length / required.length) * 100) : 0;
    const isCompleted = required.length > 0 && pendingIds.length === 0;

    // Garante data congelada se todas estiverem concluídas
    if (isCompleted && !state.courseCompletedAt) {
      state.courseCompletedAt = getLocalISODate();
      saveProgress(state);
    }

    return {
      requiredIds: required,
      completedIds,
      pendingIds,
      completedCount: completedIds.length,
      totalCount: required.length,
      percent,
      isCompleted,
      courseCompletedAt: state.courseCompletedAt
    };
  }

  function isCourseCompleted() {
    return getCompletionSummary().isCompleted;
  }

  function saveStudentInfo(name, cpf) {
    const state = getProgress();
    state.student = {
      name: String(name || '').trim().replace(/\s+/g, ' '),
      cpf: formatCPF(cpf)
    };
    saveProgress(state);
    return state.student;
  }

  function getStudentInfo() {
    return getProgress().student;
  }

  // Exporta API pública
  global.TCLCert = {
    sha256,
    normalizeName,
    cleanCPF,
    formatCPF,
    maskCPFPrivacy,
    isValidCPF,
    isValidFullName,
    getLocalISODate,
    formatDatePTBR,
    formatDateShort,
    generateHash,
    normalizeHashInput,
    verifyCertificate,
    buildValidationUrl,
    parseValidationToken,
    getProgress,
    setRequiredLessons,
    getRequiredLessons,
    getLessonProgress,
    updateLessonWatchTime,
    markLessonCompleted,
    isLessonCompleted,
    getCompletionSummary,
    isCourseCompleted,
    saveStudentInfo,
    getStudentInfo
  };
})(window);
