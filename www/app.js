'use strict';
/* Arduino AI Coder - Android (Capacitor). نفس منطق البرنامج المكتبي، بدون ترجمة ورفع للوحة. */

const MODEL = window.DEFAULT_MODEL || 'claude-sonnet-5-5';
const CFG_KEY = 'aac_cfg_v1';
const HIST_KEY = 'aac_hist_v1';
const $ = (id) => document.getElementById(id);

/* نصوص خاصة بالموبايل (تُدمج مع نصوص البرنامج المكتبي) */
const MOBILE = {
  en: {
    copy: 'Copy code', share: 'Share', close: 'Close',
    clear_history: 'Clear history', history_empty: 'No history yet.',
    no_key: 'Open Settings and paste your Claude API key.',
    upload_note: "Compile & upload isn't available on the phone. Copy or share the code to ArduinoDroid, or use the desktop app.",
    sim_copied: 'Code copied. In Wokwi tap sketch.ino, select all and paste. Add the parts listed in the Wiring tab.',
    copied: 'Copied', key_rejected: 'API key rejected (401). Check the key in Settings.',
    credit_low: 'Credit balance too low. Add credits in console.anthropic.com > Billing.',
    net_error: 'Network error. Check your internet connection.',
    no_code: 'Claude did not return code. Try rephrasing.',
    ota_hint: 'OTA code added. Upload it with the desktop app (USB the first time, then WiFi).',
    voice_missing: 'Voice input is unavailable. Allow the microphone and make sure Google speech services are installed.'
  },
  ar: {
    copy: 'نسخ الكود', share: 'مشاركة', close: 'إغلاق',
    clear_history: 'مسح السجل', history_empty: 'ما في سجل بعد.',
    no_key: 'افتح الإعدادات والصق مفتاح Claude API.',
    upload_note: 'الترجمة والرفع للوحة غير متوفرة بالموبايل. انسخ الكود أو شاركه مع تطبيق ArduinoDroid، أو استخدم برنامج الكمبيوتر.',
    sim_copied: 'تم نسخ الكود. بموقع Wokwi اضغط على sketch.ino، حدد الكل والصق. أضف القطع المذكورة بتاب التوصيل.',
    copied: 'تم النسخ', key_rejected: 'المفتاح مرفوض (401). تأكد منه بالإعدادات.',
    credit_low: 'الرصيد قليل. أضف رصيد من console.anthropic.com ثم Billing.',
    net_error: 'خطأ بالشبكة. تأكد من الإنترنت.',
    no_code: 'Claude ما رجّع كود. جرب تعيد صياغة الطلب.',
    ota_hint: 'تمت إضافة كود OTA. ارفعه ببرنامج الكمبيوتر (أول مرة بالـ USB وبعدها واي فاي).',
    voice_missing: 'الإدخال الصوتي غير متوفر. اسمح للميكروفون وتأكد من وجود خدمات Google للكلام.'
  },
  tr: {
    copy: 'Kodu kopyala', share: 'Paylaş', close: 'Kapat',
    clear_history: 'Geçmişi temizle', history_empty: 'Henüz geçmiş yok.',
    no_key: 'Ayarları aç ve Claude API anahtarını yapıştır.',
    upload_note: "Telefonda derleme ve yükleme yoktur. Kodu ArduinoDroid'e kopyala/paylaş veya bilgisayar programını kullan.",
    sim_copied: "Kod kopyalandı. Wokwi'de sketch.ino'ya dokun, tümünü seç ve yapıştır. Bağlantı sekmesindeki parçaları ekle.",
    copied: 'Kopyalandı', key_rejected: 'API anahtarı reddedildi (401). Ayarlardan kontrol et.',
    credit_low: "Bakiye yetersiz. console.anthropic.com > Billing'den bakiye ekle.",
    net_error: 'Ağ hatası. İnternet bağlantını kontrol et.',
    no_code: 'Claude kod döndürmedi. İsteği yeniden yaz.',
    ota_hint: 'OTA kodu eklendi. Bilgisayar programıyla yükle (ilk seferde USB, sonra WiFi).',
    voice_missing: 'Sesli giriş kullanılamıyor. Mikrofon iznini ver ve Google konuşma hizmetlerinin kurulu olduğundan emin ol.'
  }
};
for (const lang of Object.keys(window.I18N)) Object.assign(window.I18N[lang], MOBILE[lang] || {});

const S = {
  lang: 'ar', recording: false, busy: false, statusKey: 'ready',
  messages: [], lastReply: '', libraries: []
};

/* ---------------------------------------------------------------- تخزين */
function loadJSON(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
}
function saveJSON(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ } }
const cfg = loadJSON(CFG_KEY, {});
let history = loadJSON(HIST_KEY, []);

/* ---------------------------------------------------------------- ترجمة */
function t(key) {
  const L = window.I18N[S.lang] || {};
  return L[key] || window.I18N.en[key] || key;
}
function applyLang() {
  document.documentElement.lang = S.lang;
  document.documentElement.dir = S.lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i]').forEach((el) => { el.textContent = t(el.dataset.i); });
  fillTemplates();
  setStatus(S.statusKey);
  $('btnMic').textContent = t(S.recording ? 'mic_stop' : 'mic');
  $('langSel').value = S.lang;
  renderHistory();
  buildSettingsFields();
}
function setStatus(key) { S.statusKey = key; $('status').textContent = window.I18N.en[key] || MOBILE.en[key] ? t(key) : key; }
let toastTimer = null;
function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
}

/* ---------------------------------------------------------------- منطق Claude (نفس البرنامج المكتبي) */
function extractTag(tag, text) {
  const m = text.match(new RegExp('<' + tag + '>([\\s\\S]*?)</' + tag + '>'));
  if (!m) return '';
  let body = m[1].trim();
  body = body.replace(/^```[a-zA-Z+]*\n/, '').replace(/\n```$/, '');
  return body.trim();
}
function parseReply(text) {
  let libs = extractTag('libraries', text).split('\n').map((l) => l.trim())
    .filter((l) => l && !l.startsWith('-'));
  libs = libs.map((l) => l.replace(/^[-*\d.\s]+/, ''));
  let code = extractTag('code', text);
  if (!code) {
    const m = text.match(/```(?:cpp|c\+\+|arduino|ino)?\n([\s\S]*?)```/);
    code = m ? m[1].trim() : '';
  }
  return { code, libraries: libs, wiring: extractTag('wiring', text), explanation: extractTag('explanation', text) };
}
function applySecrets(code, c) {
  c = c || cfg;
  for (const [token, key] of Object.entries(window.SECRET_TOKENS)) {
    let value = c[key] || '';
    if (key === 'ota_host' && !value) value = 'arduino-ai';
    value = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    code = code.split(token).join(value);
  }
  return code;
}
function isEsp(fqbn) { return fqbn.startsWith('esp32:') || fqbn.startsWith('esp8266:'); }
function wokwiUrl(fqbn) {
  const base = fqbn.split(':').slice(0, 3).join(':');
  const slug = window.WOKWI_SLUGS[base];
  return slug ? 'https://wokwi.com/projects/new/' + slug : 'https://wokwi.com/';
}
function currentBoard() {
  const name = $('boardSel').value;
  return { name, fqbn: window.BOARDS[name] || '' };
}

async function callClaude(messages) {
  if (!cfg.api_key) throw new Error(t('no_key'));
  let resp;
  try {
    resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': cfg.api_key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({ model: MODEL, max_tokens: 4096, system: window.SYSTEM_PROMPT, messages })
    });
  } catch (e) {
    throw new Error(t('net_error'));
  }
  let data = null;
  try { data = await resp.json(); } catch (e) { data = null; }
  if (!resp.ok) {
    const detail = (data && data.error && data.error.message) || ('HTTP ' + resp.status);
    if (resp.status === 401) throw new Error(t('key_rejected'));
    if (resp.status === 400 && /credit/i.test(detail)) throw new Error(t('credit_low'));
    throw new Error('API error ' + resp.status + ': ' + detail);
  }
  return (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
}

async function requestCode(prompt, previousCode) {
  const { name, fqbn } = currentBoard();
  let content;
  if (previousCode && previousCode.trim()) {
    content = 'Board: ' + name + ' (fqbn: ' + fqbn + ')\n\nCurrent sketch:\n<code>\n' + previousCode +
      '\n</code>\n\nModify it as follows and return the FULL updated sketch:\n' + prompt;
  } else {
    content = 'Board: ' + name + ' (fqbn: ' + fqbn + ')\n\nRequest: ' + prompt;
  }
  const messages = [{ role: 'user', content }];
  const reply = await callClaude(messages);
  return { parsed: parseReply(reply), messages, reply };
}

/* ---------------------------------------------------------------- الواجهة */
function setBusy(b) {
  S.busy = b;
  ['btnGet', 'btnMod', 'btnOta'].forEach((id) => { $(id).disabled = b; });
}
function showResult(r) {
  if (r.code) $('codeBox').value = r.code;
  if (r.wiring !== undefined) $('wiringBox').textContent = r.wiring || '';
  if (r.explanation !== undefined) $('explBox').textContent = r.explanation || '';
}
function addHistory(entry) {
  entry.time = new Date().toISOString().slice(0, 16).replace('T', ' ');
  history.unshift(entry);
  history = history.slice(0, 100);
  saveJSON(HIST_KEY, history);
  renderHistory();
}
function renderHistory() {
  const box = $('histList');
  box.textContent = '';
  if (!history.length) { box.textContent = t('history_empty'); return; }
  history.forEach((h) => {
    const div = document.createElement('div');
    div.className = 'hist-item';
    const title = document.createElement('div');
    title.textContent = (h.prompt || '').slice(0, 90);
    const small = document.createElement('small');
    small.textContent = h.time + ' · ' + (h.board || '');
    div.append(title, small);
    div.addEventListener('click', () => {
      $('prompt').value = h.prompt || '';
      if (h.board && window.BOARDS[h.board]) $('boardSel').value = h.board;
      S.libraries = h.libraries || [];
      showResult({ code: h.code, wiring: h.wiring, explanation: h.explanation });
      switchTab('code');
    });
    box.appendChild(div);
  });
}
function switchTab(name) {
  document.querySelectorAll('.tabs button').forEach((b) => b.classList.toggle('active', b.dataset.tab === name));
  document.querySelectorAll('.panel').forEach((p) => p.classList.toggle('active', p.id === 'panel-' + name));
}
function fillTemplates() {
  const sel = $('tplSel');
  sel.textContent = '';
  const ph = document.createElement('option');
  ph.value = ''; ph.textContent = t('templates_ph');
  sel.appendChild(ph);
  window.TEMPLATES.forEach((tpl, i) => {
    const o = document.createElement('option');
    o.value = String(i);
    o.textContent = tpl.names[S.lang] || tpl.names.en;
    sel.appendChild(o);
  });
}
function fillBoards() {
  const sel = $('boardSel');
  sel.textContent = '';
  Object.keys(window.BOARDS).forEach((name) => {
    const o = document.createElement('option');
    o.value = name; o.textContent = name;
    sel.appendChild(o);
  });
}

async function doGetCode(modify, promptOverride, histLabel) {
  const prompt = (promptOverride || $('prompt').value).trim();
  if (!prompt) { toast(t('write_first')); return; }
  const { name, fqbn } = currentBoard();
  if (!fqbn) { toast(t('choose_board')); return; }
  setBusy(true);
  setStatus('asking');
  try {
    const prev = modify ? $('codeBox').value : '';
    const { parsed, messages, reply } = await requestCode(prompt, prev);
    if (!parsed.code) throw new Error(t('no_code'));
    S.messages = messages; S.lastReply = reply; S.libraries = parsed.libraries;
    showResult(parsed);
    addHistory({ prompt: histLabel || prompt, board: name, fqbn, code: parsed.code,
      wiring: parsed.wiring, explanation: parsed.explanation, libraries: parsed.libraries });
    switchTab('code');
    setStatus('code_ready');
  } catch (e) {
    setStatus('error');
    toast(e.message || String(e));
  } finally {
    setBusy(false);
  }
}

/* ---------------------------------------------------------------- مكونات الجهاز */
function plugin(name) { return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins[name]; }
async function copyText(text) {
  const cb = plugin('Clipboard');
  if (cb) { await cb.write({ string: text }); return; }
  await navigator.clipboard.writeText(text);
}
async function shareText(text) {
  const sh = plugin('Share');
  if (sh) { await sh.share({ title: 'sketch.ino', text, dialogTitle: t('share') }); return; }
  if (navigator.share) { await navigator.share({ title: 'sketch.ino', text }); return; }
  await copyText(text);
  toast(t('copied'));
}
async function openUrl(url) {
  const br = plugin('Browser');
  if (br) { await br.open({ url }); return; }
  window.open(url, '_blank');
}

async function toggleMic() {
  const SR = plugin('SpeechRecognition');
  if (!SR) { toast(t('voice_missing')); return; }
  if (S.recording) {
    try { await SR.stop(); } catch (e) { /* ignore */ }
    return;
  }
  try {
    const av = await SR.available();
    if (!av.available) { toast(t('voice_missing')); return; }
    const perm = await SR.requestPermissions();
    if (perm.speechRecognition !== 'granted') { toast(t('voice_missing')); return; }
  } catch (e) { toast(t('voice_missing')); return; }
  S.recording = true;
  $('btnMic').textContent = t('mic_stop');
  $('btnMic').classList.add('rec');
  setStatus('listening');
  try {
    const r = await SR.start({ language: window.VOICE_LANG[S.lang] || 'en-US', maxResults: 1,
      prompt: '', partialResults: false, popup: false });
    const text = r && r.matches && r.matches[0];
    if (text) {
      const cur = $('prompt').value.trim();
      $('prompt').value = (cur + ' ' + text).trim();
    } else {
      toast(t('voice_fail'));
    }
  } catch (e) {
    toast(t('voice_fail'));
  } finally {
    S.recording = false;
    $('btnMic').textContent = t('mic');
    $('btnMic').classList.remove('rec');
    setStatus('ready');
  }
}

/* ---------------------------------------------------------------- الإعدادات */
const FIELDS = [['api_key', true], ['wifi_ssid', false], ['wifi_pass', true], ['ota_pass', true], ['ota_host', false]];
function buildSettingsFields() {
  const box = $('settingsFields');
  box.textContent = '';
  FIELDS.forEach(([key, secret]) => {
    const label = document.createElement('label');
    label.textContent = t(key);
    label.setAttribute('for', 'f_' + key);
    const row = document.createElement('div');
    row.className = 'field-row';
    const input = document.createElement('input');
    input.id = 'f_' + key;
    input.type = secret && !$('showSecrets').checked ? 'password' : 'text';
    input.dataset.secret = secret ? '1' : '';
    input.value = cfg[key] || '';
    input.autocomplete = 'off'; input.autocapitalize = 'off'; input.spellcheck = false;
    const pasteBtn = document.createElement('button');
    pasteBtn.type = 'button';
    pasteBtn.textContent = t('paste');
    pasteBtn.addEventListener('click', async () => {
      try {
        const cb = plugin('Clipboard');
        const v = cb ? (await cb.read()).value : await navigator.clipboard.readText();
        if (v) input.value = v.trim(); else toast(t('clipboard_empty'));
      } catch (e) { toast(t('clipboard_empty')); }
    });
    row.append(input, pasteBtn);
    box.append(label, row);
  });
}
function saveSettings() {
  FIELDS.forEach(([key]) => { cfg[key] = $('f_' + key).value.trim(); });
  saveJSON(CFG_KEY, cfg);
  toast(t('key_saved'));
  $('dlg').close();
}

/* ---------------------------------------------------------------- ربط الأحداث */
function init() {
  if (window.__inited) return;
  window.__inited = true;
  S.lang = cfg.lang && window.I18N[cfg.lang] ? cfg.lang : 'ar';
  const langSel = $('langSel');
  ['ar', 'tr', 'en'].forEach((code) => {
    const o = document.createElement('option');
    o.value = code; o.textContent = window.LANG_NAMES[code];
    langSel.appendChild(o);
  });
  fillBoards();
  applyLang();

  langSel.addEventListener('change', () => {
    S.lang = langSel.value; cfg.lang = S.lang; saveJSON(CFG_KEY, cfg); applyLang();
  });
  $('tplSel').addEventListener('change', () => {
    const v = $('tplSel').value;
    if (v === '') return;
    const tpl = window.TEMPLATES[Number(v)];
    $('prompt').value = tpl.prompts[S.lang] || tpl.prompts.en;
    if (tpl.board && window.BOARDS[tpl.board]) $('boardSel').value = tpl.board;
  });
  document.querySelectorAll('.tabs button').forEach((b) => b.addEventListener('click', () => switchTab(b.dataset.tab)));
  $('btnGet').addEventListener('click', () => doGetCode(false));
  $('btnMod').addEventListener('click', () => doGetCode(true));
  $('btnOta').addEventListener('click', () => {
    const { fqbn } = currentBoard();
    if (!isEsp(fqbn)) { toast(t('need_esp')); return; }
    if (!$('codeBox').value.trim()) { toast(t('need_code')); return; }
    doGetCode(true, window.OTA_REQUEST, 'Add WiFi OTA').then(() => toast(t('ota_hint')));
  });
  $('btnMic').addEventListener('click', toggleMic);
  $('btnCopy').addEventListener('click', async () => {
    const code = $('codeBox').value;
    if (!code.trim()) { toast(t('need_code')); return; }
    try { await copyText(applySecrets(code)); toast(t('copied')); } catch (e) { toast(String(e)); }
  });
  $('btnShare').addEventListener('click', async () => {
    const code = $('codeBox').value;
    if (!code.trim()) { toast(t('need_code')); return; }
    try { await shareText(applySecrets(code)); } catch (e) { /* المستخدم أغلق نافذة المشاركة */ }
  });
  $('btnSim').addEventListener('click', async () => {
    const code = $('codeBox').value;
    if (!code.trim()) { toast(t('need_code')); return; }
    const sim = applySecrets(code, { wifi_ssid: 'Wokwi-GUEST', wifi_pass: '', ota_host: '', ota_pass: '' });
    try { await copyText(sim); } catch (e) { /* ignore */ }
    toast(t('sim_copied'));
    await openUrl(wokwiUrl(currentBoard().fqbn || 'arduino:avr:uno'));
  });
  $('btnClearHist').addEventListener('click', () => { history = []; saveJSON(HIST_KEY, history); renderHistory(); });
  $('btnSettings').addEventListener('click', () => { buildSettingsFields(); $('dlg').showModal(); });
  $('btnSave').addEventListener('click', saveSettings);
  $('btnCloseDlg').addEventListener('click', () => $('dlg').close());
  $('showSecrets').addEventListener('change', () => {
    document.querySelectorAll('#settingsFields input[data-secret="1"]').forEach((i) => {
      i.type = $('showSecrets').checked ? 'text' : 'password';
    });
  });
  if (!cfg.api_key) setTimeout(() => { buildSettingsFields(); $('dlg').showModal(); }, 400);
}

window.__app = { parseReply, applySecrets, wokwiUrl, isEsp, S, cfg, t, doGetCode, currentBoard, switchTab };
document.addEventListener('DOMContentLoaded', init);
