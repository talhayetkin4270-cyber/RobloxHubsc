// ============================================================
//  Humanoid Script Hub — app.js
//  v3: i18n + Profile Panel + Chat + Game Links
// ============================================================

// ============================================================
//  i18n TRANSLATIONS
// ============================================================
const TRANSLATIONS = {
  en: {
    nav_home: '🏠 Home', nav_scripts: '📜 Scripts',
    nav_popular: '🔥 Popular', nav_chat: '💬 Chat', nav_about: '⚙️ About',
    btn_login: 'Login', btn_register: 'Register', logout: 'Logout',
    search_placeholder: 'Search scripts or games...',
    chat_desc: 'Engage with the community, seek support, and collaborate.',
    chat_empty: 'No messages yet. Be the first to start the conversation!',
    chat_placeholder: 'Write your message...', chat_send: 'Send',
    chat_login_prompt: 'Please log in to participate in the chat.',
    pp_customize: 'Profile Color', pp_avatar_url: 'Avatar URL',
    about_contact: 'Contact Us', about_contact_desc: 'Reach out to our team via Discord.',
    view_btn: 'View Details →', copy_btn: '📋 Copy', copied_btn: '✅ Copied!',
    all_filter: 'All Categories',
    featured_title: '⭐ Editor\'s Choice', see_all: 'View All →', featured_empty: 'No featured scripts available.',
    recent_title: '🕓 Recently Published', recent_empty: 'No scripts have been published yet.',
    pop_title: 'TRENDING', pop_desc: 'Highly engaged scripts by our community', pop_empty: 'Insufficient data to display trending scripts.',
    about_title: 'ABOUT US', 
    about_q1: 'Our Mission', about_a1: 'Humanoid Script Hub delivers premium, high-quality, and reliable scripts for the Roblox ecosystem.',
    about_q2: 'Quality Assurance', about_a2: 'Every script undergoes rigorous testing to ensure optimal performance, stability, and reliability.',
    about_q3: 'Security Standards', about_a3: 'Each script is meticulously reviewed to guarantee a 100% secure experience with absolutely no malicious elements.',
    login_title: 'Sign In', login_user: 'Username', login_pass: 'Password',
    login_err: 'Invalid credentials provided!', btn_login_submit: 'Secure Login ⚡', no_account: "Don't have an account?",
    register_title: 'Create Account', reg_user: 'Username', reg_ok: '✅ Account created successfully! Authenticating...',
    btn_reg_submit: 'Register Account ✨', has_account: 'Already have an account?',
    loader_txt: 'Authenticating...', hero_btn_scripts: '📜 Browse Scripts', hero_btn_join: '⚡ Join the Community',
    stat_scripts: 'Scripts', stat_users: 'Active Users', stat_views: 'Total Views', stat_free: 'Free',
    search_empty: 'No matching records found.', admin_panel: '👑 MANAGEMENT CONSOLE', admin_manage: 'Oversee and manage your platform statistics.',
    admin_tab_scripts: '📜 Scripts', admin_tab_users: '👥 Users', admin_tab_ann: '📢 Announcements', 
    admin_tab_stats: '📊 Analytics', admin_tab_config: '⚙️ Configuration', admin_add_script: '➕ Publish Script',
    detail_desc: '📄 Documentation', detail_features: '⚡ Key Features', detail_info: 'ℹ️ Technical Details',
    info_game: '🎮 Target Game', info_cat: '📂 Category', info_views: '👁 Total Views', info_key: '🔑 Key System',
    info_status: '✅ Verification Status', info_added: '📅 Published Date', copy_code: '📋 COPY SOURCE', btn_edit: '✏️ Edit', btn_delete: '🗑️ Remove',
    chat_clear: '🧹 Purge Chat History',
    play_game: '🎮 Play Game', admin_tab_visitors: '👀 Visitors'
  },
  tr: {
    nav_home: '🏠 Ana Sayfa', nav_scripts: '📜 Scriptler',
    nav_popular: '🔥 Popüler', nav_chat: '💬 Sohbet', nav_about: '⚙️ Hakkında',
    btn_login: 'Giriş Yap', btn_register: 'Kayıt Ol', logout: 'Çıkış Yap',
    search_placeholder: 'Script veya oyun ara...',
    chat_desc: 'Toplulukla soru sor, fikir paylaş.',
    chat_empty: 'Henüz mesaj yok. İlk yazan sen ol!',
    chat_placeholder: 'Mesaj yaz...', chat_send: 'Gönder',
    chat_login_prompt: 'Mesaj göndermek için giriş yap.',
    pp_customize: 'Profil Rengi', pp_avatar_url: 'Avatar URL',
    about_contact: 'İletişim', about_contact_desc: 'Discord’dan bize ulaşabilirsiniz.',
    view_btn: 'Görüntüle →', copy_btn: '📋 Kopyala', copied_btn: '✅ Kopyalandı!',
    all_filter: 'Tümü',
    featured_title: '⭐ Öne Çıkan Scriptler', see_all: 'Tümünü Gör →', featured_empty: 'Henüz öne çıkan script yok.',
    recent_title: '🕓 Son Eklenen', recent_empty: 'Henüz script eklenmedi.',
    pop_title: 'POPÜLER', pop_desc: 'En çok görüntülenen scriptler', pop_empty: 'Henüz yeterli veri yok.',
    about_title: 'HAKKINDA',
    about_q1: 'Kim Bu?', about_a1: 'Humanoid Script Hub — Roblox topluluğu için premium, ücretsiz ve kaliteli scriptler.',
    about_q2: 'Scriptler', about_a2: 'Tüm scriptler bizzat test edilmiş ve optimize edilmiştir. Güvenli ve kullanımı kolaydır.',
    about_q3: 'Güvenlik', about_a3: 'Her script dikkatli incelenmiş ve zararlı unsur içermemektedir. %100 güvenli.',
    login_title: 'Giriş Yap', login_user: 'Kullanıcı Adı', login_pass: 'Şifre',
    login_err: 'Kullanıcı adı veya şifre hatalı!', btn_login_submit: 'Giriş Yap ⚡', no_account: 'Hesabın yok mu?',
    register_title: 'Kayıt Ol', reg_user: 'Kullanıcı Adı', reg_ok: '✅ Kayıt başarılı! Giriş yapılıyor...',
    btn_reg_submit: 'Kayıt Ol ✨', has_account: 'Hesabın var mı?',
    loader_txt: 'Yükleniyor...', hero_btn_scripts: '📜 Scriptlere Gözat', hero_btn_join: '⚡ Hemen Katıl',
    stat_scripts: 'Script', stat_users: 'Kullanıcı', stat_views: 'Görüntülenme', stat_free: 'Ücretsiz',
    search_empty: 'Arama sonucu bulunamadı.', admin_panel: '👑 YÖNETİM PANELİ', admin_manage: 'Sitenizi buradan yönetin.',
    admin_tab_scripts: '📜 Scriptler', admin_tab_users: '👥 Kullanıcılar', admin_tab_ann: '📢 Duyuru',
    admin_tab_stats: '📊 İstatistik', admin_tab_config: '⚙️ Site Ayarları', admin_add_script: '➕ Yeni Script Ekle',
    detail_desc: '📄 Açıklama', detail_features: '⚡ Özellikler', detail_info: 'ℹ️ Bilgiler',
    info_game: '🎮 Oyun', info_cat: '📂 Kategori', info_views: '👁 Görüntülenme', info_key: '🔑 Key Sistemi',
    info_status: '✅ Durum', info_added: '📅 Eklenme', copy_code: '📋 KODU KOPYALA', btn_edit: '✏️ Düzenle', btn_delete: '🗑️ Sil',
    chat_clear: '🧹 Sohbeti Temizle',
    play_game: '🎮 Oyuna Git', admin_tab_visitors: '👀 Ziyaretçiler'
  }
};
let currentLang = localStorage.getItem('hmd_lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('hmd_lang', lang);
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-tr').classList.toggle('active', lang === 'tr');
  applyTranslations();
}

function applyTranslations() {
  const T = TRANSLATIONS[currentLang];
  // data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key]) el.textContent = T[key];
  });
  // data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (T[key]) el.placeholder = T[key];
  });
  // Auth buttons
  const bl = document.getElementById('btn-login');
  const br = document.getElementById('btn-register');
  if (bl) bl.textContent = T.btn_login;
  if (br) br.textContent = T.btn_register;

  // Dynamically update siteConfig texts if they match the defaults
  const cfg = siteConfig || DEFAULT_CONFIG;
  const heroSub = document.getElementById('hero-subtitle');
  if (heroSub) {
      if (cfg.herosubtitle === DEFAULT_CONFIG.herosubtitle) {
          heroSub.textContent = currentLang === 'en' ? 'Premium, tested and secure Roblox scripts. Completely free.' : DEFAULT_CONFIG.herosubtitle;
      } else {
          heroSub.textContent = cfg.herosubtitle;
      }
  }
  const aboutText = document.getElementById('about-text-1');
  if (aboutText) {
      if (cfg.about1 === DEFAULT_CONFIG.about1) {
          aboutText.textContent = currentLang === 'en' ? 'Humanoid Script Hub — Premium, free, and high-quality scripts for the Roblox community.' : DEFAULT_CONFIG.about1;
      } else {
          aboutText.textContent = cfg.about1;
      }
  }
  const tdesc = document.getElementById('scripts-page-desc');
  if (tdesc) {
      if (cfg.scriptsdesc === DEFAULT_CONFIG.scriptsdesc) {
          tdesc.textContent = currentLang === 'en' ? 'The entire premium Roblox script collection.' : DEFAULT_CONFIG.scriptsdesc;
      } else {
          tdesc.textContent = cfg.scriptsdesc;
      }
  }
}

const ADMIN_USER = 'erenzxo';
const ADMIN_PASS = 'Nere1234';

const DEFAULT_CONFIG = {
  sitename:     'HUMANOID',
  icon:         '⚡',
  navsub:       'SCRIPT HUB',
  tabtitle:     'Humanoid — Roblox Script Hub',
  herotitle:    'HUMANOID',
  herobadge:    '🔥 #1 Roblox Script Hub',
  herosubtitle: 'Premium, test edilmiş ve güvenli Roblox scriptleri. Tamamen ücretsiz.',
  about1:       'Humanoid Script Hub — Roblox topluluğu için premium, ücretsiz ve kaliteli scriptler.',
  discord:      '@erenzxo',
  scriptsdesc:  'Tüm premium Roblox script koleksiyonu.',
  colors: {
    purple: '#7c3aed',
    red:    '#ef4444',
    bg:     '#050508',
    gold:   '#f59e0b',
  }
};

let currentUser  = null;
let scripts      = [];
let users        = [];
let ann          = { text: '', active: false };
let siteConfig   = { ...DEFAULT_CONFIG, colors: { ...DEFAULT_CONFIG.colors } };
let activeTag    = 'all';
let currentPage  = 'home';

// ============================================================
//  SUPABASE CONFIG
// ============================================================
const SUPABASE_URL = 'https://fshltxngawdezdhhkmco.supabase.co';
const SUPABASE_KEY = 'sb_publishable_HkH5Hc9tt1cf2EQQ_gsBng_K9eRAjTl'; // Güvenli Publishable Key (Anon)
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================================
//  BOOT
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  applySiteConfig(false);
  initParticles();
  initScrollEffect();
  restoreSession();
  setLang(currentLang);
  updateDiscordLink();
  trackVisitor();

  // Chat auth state
  const loggedIn = !!currentUser;
  const ciEl = document.getElementById('chat-logged-in');
  const coEl = document.getElementById('chat-logged-out');
  if (ciEl) ciEl.classList.toggle('hidden', !loggedIn);
  if (coEl) coEl.classList.toggle('hidden', loggedIn);

  setTimeout(() => document.getElementById('loading-screen').classList.add('hidden'), 1900);

  renderAll();
  applyAnnouncement();
  loadChatMessages();

  // Close profile panel on outside click
  document.addEventListener('click', e => {
    const panel = document.getElementById('profile-panel');
    const trigger = document.querySelector('.profile-trigger');
    if (panel && !panel.contains(e.target) && trigger && !trigger.contains(e.target)) {
      panel.classList.remove('open');
    }
  });
});


// ============================================================
//  STORAGE
// ============================================================
async function loadData() {
  try {
    // 1. Fetch Scripts
    const { data: sData, error: sErr } = await _supabase.from('scripts').select('*').order('created_at', { ascending: false });
    if (!sErr) scripts = sData || [];

    // 2. Fetch Users
    const { data: uData, error: uErr } = await _supabase.from('users').select('*');
    if (!uErr) users = uData || [];

    // 3. Fetch Site Config
    const { data: cData, error: cErr } = await _supabase.from('site_config').select('*').eq('id', 1).single();
    if (!cErr && cData) {
      const parsed = cData.config || {};
      siteConfig = { ...DEFAULT_CONFIG, ...parsed, colors: { ...DEFAULT_CONFIG.colors, ...(parsed.colors || {}) } };
      ann = cData.announcement || { text: '', active: false };
    }

    const ta = document.getElementById('ann-textarea');
    const cb = document.getElementById('ann-active');
    if (ta) ta.value   = ann.text;
    if (cb) cb.checked = ann.active;
  } catch (e) {
    console.error('Supabase load error:', e);
  }
}

async function saveData() {
  // Now handled per-action for efficiency
  // But we can keep a sync-back to site_config if needed
  await _supabase.from('site_config').upsert({ id: 1, config: siteConfig, announcement: ann });
}

function restoreSession() {
  const s = localStorage.getItem('hmd_session');
  if (s) { currentUser = JSON.parse(s); applyUserUI(); }
}

// ============================================================
//  VISITOR TRACKING (Stateless via localStorage & siteConfig)
// ============================================================
function trackVisitor() {
  let vId = localStorage.getItem('hmd_visitor_id');
  if (!vId) {
    vId = 'Guest-' + Math.random().toString(36).substring(2,6).toUpperCase();
    localStorage.setItem('hmd_visitor_id', vId);
  }
  
  if (!siteConfig.visitors) siteConfig.visitors = [];
  
  // Throttle updates to max once every 30 mins to save DB
  const lastVisit = localStorage.getItem('hmd_last_visit');
  const now = Date.now();
  if (lastVisit && (now - parseInt(lastVisit)) < 30 * 60 * 1000) return;
  localStorage.setItem('hmd_last_visit', now.toString());

  const vData = { id: vId, time: new Date().toLocaleString() };
  siteConfig.visitors.unshift(vData);
  if (siteConfig.visitors.length > 50) siteConfig.visitors.pop();
  
  // Fire and forget save
  _supabase.from('site_config').upsert({ id: 1, config: siteConfig }).then(() => {});
}

window.renderAdminVisitors = function() {
  const tbody = document.getElementById('visitors-tbody');
  const empty = document.getElementById('visitors-empty');
  if (!tbody) return;
  tbody.innerHTML = '';
  const vis = siteConfig.visitors || [];
  if (vis.length === 0) { empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  
  vis.forEach(v => {
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    tr.innerHTML = `<td style="padding:.75rem 0;color:var(--accent-purple-b);font-weight:600;">${esc(v.id)}</td><td style="padding:.75rem 0;color:var(--text-secondary);font-size:.9rem">${esc(v.time)}</td>`;
    tbody.appendChild(tr);
  });
}

// ============================================================
//  RENDER ALL
// ============================================================
function renderAll() {
  renderFeatured();
  renderRecent();
  renderScriptsGrid();
  renderPopularGrid();
  renderAdminScripts();
  renderAdminUsers();
  updateStats();
  if (typeof renderAdminVisitors === 'function') renderAdminVisitors();
}

// ============================================================
//  NAVIGATE
// ============================================================
function navigate(page, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  if (el) el.classList.add('active');
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('nav-links').classList.remove('mobile-open');
  if (page === 'admin') { renderAdminScripts(); renderAdminUsers(); if (typeof renderAdminVisitors === 'function') renderAdminVisitors(); }
}

function toggleMobileMenu() {
  document.getElementById('nav-links').classList.toggle('mobile-open');
}

function initScrollEffect() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ============================================================
//  AUTH
// ============================================================
async function doLogin() {
  const u = document.getElementById('l-user').value.trim();
  const p = document.getElementById('l-pass').value;
  const err = document.getElementById('l-err');
  err.classList.add('hidden');

  if (u.includes('@') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u)) {
    err.textContent = 'Geçerli bir e-posta formatı giriniz!';
    err.classList.remove('hidden');
    return;
  }

  // Admin Check
  if (u === ADMIN_USER && p === ADMIN_PASS) {
    currentUser = { username: ADMIN_USER, isAdmin: true, email: 'admin@humanoid.gg', joinedAt: 'Kurucu' };
    localStorage.setItem('hmd_session', JSON.stringify(currentUser));
    applyUserUI(); closeModal('login-modal');
    showToast('👑 Hoş geldin, erenzxo!');
    return;
  }

  // Supabase User Check
  const { data, error } = await _supabase.from('users').select('*').or(`username.eq."${u}",email.eq."${u}"`).eq('password', p).single();
  
  if (data) {
    currentUser = { 
      id: data.id,
      username: data.username, 
      isAdmin: data.role === 'admin', 
      isHelper: data.role === 'helper',
      email: data.email || '—', 
      joinedAt: data.joined_at,
      avatarUrl: data.avatar_url,
      profileColor: data.profile_color,
      bio: data.bio
    };
    localStorage.setItem('hmd_session', JSON.stringify(currentUser));
    applyUserUI(); closeModal('login-modal');
    showToast('✅ Hoş geldin, ' + data.username + '!');
    return;
  }
  
  err.textContent = 'Hatalı kullanıcı adı veya şifre!';
  err.classList.remove('hidden');
}

async function doRegister() {
  const u   = document.getElementById('r-user').value.trim();
  const e   = document.getElementById('r-email').value.trim();
  const p   = document.getElementById('r-pass').value;
  const err = document.getElementById('r-err');
  const ok  = document.getElementById('r-ok');
  err.classList.add('hidden'); ok.classList.add('hidden');

  if (!u || !p || !e) { err.textContent = 'Kullanıcı adı, şifre ve e-posta zorunludur!'; err.classList.remove('hidden'); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) { 
    err.textContent = 'Lütfen geçerli bir e-posta adresi giriniz!'; 
    err.classList.remove('hidden'); 
    return; 
  }
  if (u.length < 3) { err.textContent = 'Kullanıcı adı en az 3 karakter olmalı!'; err.classList.remove('hidden'); return; }
  if (p.length < 6) { err.textContent = 'Şifre en az 6 karakter olmalı!'; err.classList.remove('hidden'); return; }
  
  const { data: existing } = await _supabase.from('users').select('username').eq('username', u).single();
  if (existing) { err.textContent = 'Bu kullanıcı adı zaten alınmış!'; err.classList.remove('hidden'); return; }

  const { error } = await _supabase.from('users').insert([{ username: u, email: e, password: p }]);
  if (error) { err.textContent = 'Kayıt sırasında bir hata oluştu!'; err.classList.remove('hidden'); return; }

  ok.classList.remove('hidden');
  setTimeout(() => {
    currentUser = { username: u, isAdmin: false, email: e, joinedAt: 'Yeni' };
    localStorage.setItem('hmd_session', JSON.stringify(currentUser));
    applyUserUI(); closeModal('register-modal');
    showToast('✨ Kayıt başarılı! Hoş geldin, ' + u + '!');
    loadData(); // refresh lists
  }, 1200);
}

function logout() {
  currentUser = null;
  localStorage.removeItem('hmd_session');
  applyUserUI();
  if (currentPage === 'admin') navigate('home', document.querySelector('[data-page=home]'));
  showToast('👋 Çıkış yapıldı.');
}

function applyUserUI() {
  const loggedIn = !!currentUser;
  const isAdmin  = loggedIn && currentUser.isAdmin;
  const isHelper = loggedIn && currentUser.isHelper;

  document.getElementById('nav-auth').classList.toggle('hidden', loggedIn);
  document.getElementById('nav-user').classList.toggle('hidden', !loggedIn);
  document.getElementById('admin-nav-item').classList.toggle('hidden', !(isAdmin || isHelper));

  // Chat input state & clear chat button
  const ciEl = document.getElementById('chat-logged-in');
  const coEl = document.getElementById('chat-logged-out');
  const ccBtn = document.getElementById('chat-clear-btn');
  if (ciEl) ciEl.classList.toggle('hidden', !loggedIn);
  if (coEl) coEl.classList.toggle('hidden', loggedIn);
  if (ccBtn) ccBtn.classList.toggle('hidden', !isAdmin);

  if (loggedIn) {
    document.getElementById('nav-username').textContent = currentUser.username;
    // Profile panel
    const color = currentUser.profileColor || 'var(--accent-purple)';
    const avatarSrc = currentUser.avatarUrl || '';
    const initials = currentUser.username[0].toUpperCase();
    const navAv = document.getElementById('nav-avatar');
    const ppAv  = document.getElementById('pp-avatar-display');
    const ppName = document.getElementById('pp-display-name');
    const ppEmail = document.getElementById('pp-email');
    if (navAv) {
      if (avatarSrc) navAv.innerHTML = `<img src="${esc(avatarSrc)}" onerror="this.outerHTML='${initials}'">`;
      else { navAv.textContent = initials; navAv.style.background = color; }
    }
    if (ppAv) {
      if (avatarSrc) ppAv.innerHTML = `<img src="${esc(avatarSrc)}" onerror="this.outerHTML='${initials}'">`;
      else { ppAv.textContent = initials; ppAv.style.background = color; }
    }
    if (ppName)  ppName.textContent  = currentUser.username;
    if (ppEmail) ppEmail.textContent = currentUser.email || '';
    if (document.getElementById('pp-avatar-url')) {
      document.getElementById('pp-avatar-url').value = avatarSrc;
    }
  }
}

// ============================================================
//  PROFILE PANEL
// ============================================================
function toggleProfilePanel() {
  document.getElementById('profile-panel').classList.toggle('open');
}

function setProfileColor(color) {
  if (!currentUser) return;
  currentUser.profileColor = color;
  localStorage.setItem('hmd_session', JSON.stringify(currentUser));
  applyUserUI();
  showToast('🎨 Profil rengi güncellendi!');
}

async function handleAvatarUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) { showToast('⚠️ Sadece görsel dosyaları desteklenir!'); return; }
  if (file.size > 2 * 1024 * 1024) { showToast('⚠️ Dosya 2MB\'dan küçük olmalı!'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    currentUser.avatarUrl = e.target.result;
    localStorage.setItem('hmd_session', JSON.stringify(currentUser));
    applyUserUI();
    showToast('✅ Avatar güncellendi!');
  };
  reader.readAsDataURL(file);
}

function applyAvatarUrl() {
  const url = document.getElementById('pp-avatar-url')?.value.trim();
  if (!url || !currentUser) return;
  currentUser.avatarUrl = url;
  localStorage.setItem('hmd_session', JSON.stringify(currentUser));
  applyUserUI();
  showToast('✅ Avatar URL uygulandı!');
}

// ============================================================
//  HOME RENDERS
// ============================================================
function renderFeatured() {
  const grid  = document.getElementById('featured-grid');
  const empty = document.getElementById('featured-empty');
  grid.innerHTML = '';
  const ft = scripts.filter(s => s.featured).slice(0, 4);
  if (ft.length === 0) { empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  ft.forEach(s => grid.appendChild(buildCard(s)));
}

function renderRecent() {
  const grid  = document.getElementById('recent-grid');
  const empty = document.getElementById('recent-empty');
  grid.innerHTML = '';
  const recent = scripts.slice(0, 8);
  if (recent.length === 0) { empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  recent.forEach(s => grid.appendChild(buildCard(s)));
}

// ============================================================
//  SCRIPTS PAGE
// ============================================================
function renderScriptsGrid() {
  const grid  = document.getElementById('scripts-grid');
  const empty = document.getElementById('scripts-empty');
  if (!grid) return;
  grid.innerHTML = '';

  const q = (document.getElementById('search-input')?.value || '').toLowerCase();
  let filtered = scripts.filter(s => {
    const matchTag = activeTag === 'all' || s.category === activeTag;
    const matchQ   = !q || s.name.toLowerCase().includes(q) || (s.game || '').toLowerCase().includes(q) || (s.desc || '').toLowerCase().includes(q);
    return matchTag && matchQ;
  });

  if (filtered.length === 0) { empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  filtered.forEach(s => grid.appendChild(buildCard(s)));
}

function filterScripts() { renderScriptsGrid(); }

function setTag(tag, el) {
  activeTag = tag;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderScriptsGrid();
}

// ============================================================
//  POPULAR PAGE
// ============================================================
function renderPopularGrid() {
  const grid  = document.getElementById('popular-grid');
  const empty = document.getElementById('popular-empty');
  if (!grid) return;
  grid.innerHTML = '';
  const sorted = [...scripts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 12);
  if (sorted.length === 0) { empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  sorted.forEach(s => grid.appendChild(buildCard(s)));
}

// ============================================================
//  GAME DATA HELPER
// ============================================================
function extractGameLink(featuresText) {
  if (!featuresText) return '';
  const match = featuresText.match(/\[GAMELINK=(.*?)\]/);
  return match ? match[1] : '';
}
function cleanFeatures(featuresText) {
  if (!featuresText) return '';
  return featuresText.replace(/\n?\[GAMELINK=.*?\]/g, '');
}

// ============================================================
//  BUILD CARD
// ============================================================
function buildCard(script) {
  const card = document.createElement('div');
  card.className = 'script-card';
  card.onclick = () => openDetailPage(script.id);

  const codePreview = `local Players = game.Players\nlocal lp = Players.LocalPlayer\n\n-- Humanoid Hub\nloadstring(game:HttpGet(\n  "humanoid"\n))()`;

  const imgHtml = script.image
    ? `<img class="sc-img" src="${esc(script.image)}" alt="" onerror="this.outerHTML=\`<div class='sc-img-ph'><div class='sc-img-ph-code'>${esc(codePreview)}</div></div>\`">`
    : `<div class="sc-img-ph"><div class="sc-img-ph-code">${esc(codePreview)}</div></div>`;

  const T = TRANSLATIONS[currentLang];

  card.innerHTML = `
    ${script.featured ? '<div class="sc-featured-pin">⭐ Featured</div>' : ''}
    ${imgHtml}
    <div class="sc-body">
      <div class="sc-top">
        <span class="sc-cat cat-${script.category}">${script.category.toUpperCase()}</span>
        ${script.keyless  ? '<span class="sc-badge-keyless">🔓 Keyless</span>'  : ''}
        ${script.verified ? '<span class="sc-badge-verified">✅ Verified</span>' : ''}
      </div>
      <div class="sc-name">${esc(script.name)}</div>
      ${script.game ? `<div class="sc-game">🎮 ${esc(script.game)}</div>` : ''}
      <div class="sc-desc">${esc(script.desc || script.description || '')}</div>
      <div class="sc-footer">
        <span class="sc-views">👁 <span>${script.views || 0}</span></span>
        <span class="sc-arrow">${T.view_btn || 'View →'}</span>
      </div>
    </div>
  `;
  return card;
}

// ============================================================
//  DETAIL PAGE (full page)
// ============================================================
async function openDetailPage(id) {
  const s = scripts.find(x => x.id === id);
  if (!s) return;

  // Increment view in Supabase
  s.views = (s.views || 0) + 1;
  await _supabase.from('scripts').update({ views: s.views }).eq('id', id);

  const container = document.getElementById('detail-content');
  const rawFeatures = s.features || '';
  const linkToGame = extractGameLink(rawFeatures);
  const cleanFtrs = cleanFeatures(rawFeatures);
  const featuresList = cleanFtrs.split('\n').filter(f => f.trim());

  const codePreview = (s.code || '').slice(0, 600);

  const bannerHtml = s.image
    ? `<img class="detail-banner" src="${esc(s.image)}" onerror="this.outerHTML=defaultBanner()">`
    : `<div class="detail-banner-ph"><div class="detail-banner-ph-code">${esc(codePreview)}</div></div>`;

  const featureRows = featuresList.length
    ? featuresList.map(f => `<div class="feature-item">${esc(f.trim())}</div>`).join('')
    : '<div style="color:var(--text-muted);font-size:.85rem">Özellik listesi eklenmemiş.</div>';

  const adminBtns = (currentUser && currentUser.isAdmin)
    ? `<div style="display:flex;gap:.6rem;margin-top:1rem;border-top:1px solid var(--border);padding-top:1rem">
         <button class="btn btn-ghost btn-sm" onclick="editScript('${id}')">✏️ Düzenle</button>
         <button class="btn btn-danger btn-sm" onclick="deleteScript('${id}')">🗑️ Sil</button>
       </div>` : '';

  const backPage = currentPage === 'popular' ? 'popular' : 'scripts';
  const backEl   = currentPage === 'popular'
    ? "document.querySelector('[data-page=popular]')"
    : "document.querySelector('[data-page=scripts]')";

  container.innerHTML = `
    <button class="back-btn" onclick="navigate('${backPage}', ${backEl})">← Back</button>

    <div class="detail-hero">
      ${bannerHtml}
      <div class="detail-banner-overlay"></div>
      <div class="detail-banner-text">
        <div class="detail-title">${esc(s.name)}</div>
        <div class="detail-badges">
          <span class="sc-cat cat-${s.category}">${s.category.toUpperCase()}</span>
          ${s.keyless  ? '<span class="sc-badge-keyless">🔓 Keyless</span>'  : ''}
          ${s.verified ? '<span class="sc-badge-verified">✅ Verified</span>' : ''}
          ${s.featured ? '<span class="sc-featured-pin" style="position:static">⭐ Featured</span>' : ''}
        </div>
      </div>
    </div>

    <div class="detail-grid">

      <div class="detail-main">

        ${(s.desc || s.longdesc) ? `
        <div class="detail-panel">
          <div class="dp-head" data-i18n="detail_desc">📄 Açıklama</div>
          <div class="detail-desc">${esc(s.longdesc || s.desc)}</div>
        </div>` : ''}

        <div class="detail-panel">
          <div class="dp-head" data-i18n="detail_features">⚡ Özellikler</div>
          <div class="features-list">${featureRows}</div>
        </div>

        <div class="code-panel">
          <div class="code-panel-top">
            <span class="cp-title">📋 script.lua</span>
            <button class="copy-code-btn" id="ccb-${id}" onclick="copyCode('${id}')" data-i18n="copy_btn">📋 Kopyala</button>
          </div>
          <pre class="code-block"><code class="language-lua" id="code-el-${id}">${esc(s.code || '')}</code></pre>
        </div>

        ${adminBtns}
      </div>

      <div class="detail-sidebar">
        <button class="execute-btn" onclick="copyCode('${id}')" data-i18n="copy_code">
          📋 KODU KOPYALA
        </button>
        ${linkToGame ? `
        <a class="btn btn-primary btn-full" style="margin-top: 10px; text-decoration: none; display: block; text-align: center; padding: 12px; font-weight: bold; background: var(--accent-purple); color: white; border-radius: 8px;" href="${esc(linkToGame)}" target="_blank" rel="noopener" data-i18n="play_game">
          🎮 Oyuna Git
        </a>
        ` : ''}

        <div class="detail-panel">
          <div class="dp-head" data-i18n="detail_info">ℹ️ Bilgiler</div>
          ${s.game ? `<div class="detail-info-row"><div class="dir-label" data-i18n="info_game">🎮 Oyun</div><div class="dir-value">${esc(s.game)}</div></div>` : ''}
          <div class="detail-info-row"><div class="dir-label" data-i18n="info_cat">📂 Kategori</div><div class="dir-value">${s.category}</div></div>
          <div class="detail-info-row"><div class="dir-label" data-i18n="info_views">👁 Görüntülenme</div><div class="dir-value">${s.views}</div></div>
          <div class="detail-info-row"><div class="dir-label" data-i18n="info_key">🔑 Key Sistemi</div><div class="dir-value">${s.keyless ? '🔓 Yok' : '🔑 Var'}</div></div>
          <div class="detail-info-row"><div class="dir-label" data-i18n="info_status">✅ Durum</div><div class="dir-value">${s.verified ? '✅ Test Edildi' : '⚠️ Test Bekleniyor'}</div></div>
          ${s.createdAt ? `<div class="detail-info-row"><div class="dir-label" data-i18n="info_added">📅 Eklenme</div><div class="dir-value">${s.createdAt}</div></div>` : ''}
        </div>
      </div>
    </div>
  `;

  navigate('detail', null);
  applyTranslations();

  // Syntax highlight
  const codeEl = document.getElementById('code-el-' + id);
  if (codeEl && window.hljs) hljs.highlightElement(codeEl);

  // Update views in grids
  renderAll();
}

function defaultBanner() {
  return `<div class="detail-banner-ph"><div class="detail-banner-ph-code">-- Humanoid Hub\nlocal Players = game.Players</div></div>`;
}

function copyCode(id) {
  const s = scripts.find(x => x.id === id);
  if (!s) return;
  navigator.clipboard.writeText(s.code || '').then(() => {
    const btn = document.getElementById('ccb-' + id);
    if (btn) { btn.textContent = '✅ Kopyalandı!'; btn.classList.add('ok'); }
    showToast('✅ Script panoya kopyalandı!');
    setTimeout(() => { if (btn) { btn.textContent = '📋 Kopyala'; btn.classList.remove('ok'); } }, 2500);
  }).catch(() => showToast('⚠️ Kopyalama başarısız.'));
}

// ============================================================
//  ADMIN — SCRIPT FORM
// ============================================================
// Stores the selected image as Base64 or URL string for saving
let _pendingImage = '';

function openAddScript() {
  document.getElementById('sm-title').textContent = 'Yeni Script Ekle';
  ['sm-id','sm-name','sm-game','sm-gamelink','sm-desc','sm-longdesc','sm-features','sm-code'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('sm-img').value    = '';
  document.getElementById('sm-cat').value    = 'utility';
  document.getElementById('sm-featured').checked = false;
  document.getElementById('sm-keyless').checked  = false;
  document.getElementById('sm-verified').checked = true;
  _pendingImage = '';
  _resetImagePreview();
  openModal('script-modal');
}

async function editScript(id) {
  const s = scripts.find(x => x.id === id);
  if (!s) return;
  if (currentPage === 'detail') navigate('admin', document.querySelector('[data-page=admin]'));
  document.getElementById('sm-title').textContent    = 'Script Düzenle';
  document.getElementById('sm-id').value        = id;
  document.getElementById('sm-name').value      = s.name     || '';
  document.getElementById('sm-game').value      = s.game     || '';
  document.getElementById('sm-cat').value       = s.category || 'utility';
  document.getElementById('sm-desc').value      = s.description || s.desc || '';
  document.getElementById('sm-longdesc').value  = s.long_description || s.longdesc || '';
  document.getElementById('sm-features').value  = cleanFeatures(s.features) || '';
  document.getElementById('sm-code').value      = s.code     || '';
  document.getElementById('sm-featured').checked = !!s.featured;
  document.getElementById('sm-keyless').checked  = !!s.keyless;
  document.getElementById('sm-verified').checked = !!s.verified;
  if (document.getElementById('sm-gamelink')) {
    document.getElementById('sm-gamelink').value = extractGameLink(s.features);
  }
  // Restore image
  _pendingImage = s.image || '';
  if (_pendingImage) {
    document.getElementById('sm-img').value = _pendingImage.startsWith('data:') ? '' : _pendingImage;
    _showImagePreview(_pendingImage);
  } else {
    document.getElementById('sm-img').value = '';
    _resetImagePreview();
  }
  openModal('script-modal');
}

async function saveScript() {
  const id       = document.getElementById('sm-id').value;
  const name     = document.getElementById('sm-name').value.trim();
  const game     = document.getElementById('sm-game').value.trim();
  const category = document.getElementById('sm-cat').value;
  const urlInput = document.getElementById('sm-img').value.trim();
  const image    = _pendingImage || urlInput;
  const desc     = document.getElementById('sm-desc').value.trim();
  const longdesc = document.getElementById('sm-longdesc').value.trim();
  const features = document.getElementById('sm-features').value.trim();
  const code     = document.getElementById('sm-code').value.trim();
  const featured = document.getElementById('sm-featured').checked;
  const keyless  = document.getElementById('sm-keyless').checked;
  const verified = document.getElementById('sm-verified').checked;

  if (!name || !desc || !code) { showToast('⚠️ Ad, açıklama ve kod zorunludur!'); return; }

  const rawLink = document.getElementById('sm-gamelink')?.value.trim() || '';
  
  let combinedFeatures = features;
  if (rawLink) {
    if (combinedFeatures) combinedFeatures += "\n";
    combinedFeatures += "[GAMELINK=" + rawLink + "]";
  }

  const scriptObj = { 
    name, game, category, image,
    description: desc, long_description: longdesc, features: combinedFeatures, code, 
    featured, keyless, verified 
  };

  if (id) {
    const { error } = await _supabase.from('scripts').update(scriptObj).eq('id', id);
    if (!error) showToast('✅ Script güncellendi!');
    else showToast('Hata (Update): ' + error.message);
  } else {
    scriptObj.id = 'sc_' + Date.now();
    const { error } = await _supabase.from('scripts').insert([scriptObj]);
    if (!error) showToast('✅ Script eklendi!');
    else showToast('Hata (Insert): ' + error.message);
  }

  await loadData(); renderAll(); closeModal('script-modal');
}

// ============================================================
//  IMAGE UPLOAD HELPERS
// ============================================================
function handleImageFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) { showToast('⚠️ Sadece görsel dosyaları desteklenir!'); return; }
  if (file.size > 5 * 1024 * 1024) { showToast('⚠️ Görsel boyutu 5MB\'dan küçük olmalı!'); return; }

  const reader = new FileReader();
  reader.onload = e => {
    _pendingImage = e.target.result;  // base64 data URL
    document.getElementById('sm-img').value = '';
    _showImagePreview(_pendingImage);
    showToast('✅ Görsel yüklendi!');
  };
  reader.readAsDataURL(file);
}

function handleImageUrl(url) {
  if (!url) { _pendingImage = ''; _resetImagePreview(); return; }
  _pendingImage = url.trim();
  _showImagePreview(_pendingImage);
}

function clearImage() {
  _pendingImage = '';
  document.getElementById('sm-img').value = '';
  const fileInput = document.getElementById('sm-img-file');
  if (fileInput) fileInput.value = '';
  _resetImagePreview();
  showToast('🗑️ Görsel temizlendi.');
}

function _showImagePreview(src) {
  const box      = document.getElementById('img-upload-box');
  const ph       = document.getElementById('img-placeholder');
  const preview  = document.getElementById('img-preview');
  if (!box || !ph || !preview) return;
  preview.src = src;
  preview.classList.remove('hidden');
  ph.classList.add('hidden');
  box.classList.add('has-image');
  preview.onerror = () => { _resetImagePreview(); showToast('⚠️ Görsel yüklenemedi, URL\'yi kontrol et.'); };
}

function _resetImagePreview() {
  const box     = document.getElementById('img-upload-box');
  const ph      = document.getElementById('img-placeholder');
  const preview = document.getElementById('img-preview');
  if (!box || !ph || !preview) return;
  preview.src = '';
  preview.classList.add('hidden');
  ph.classList.remove('hidden');
  box.classList.remove('has-image');
}

async function deleteScript(id) {
  if (!confirm('Bu scripti silmek istediğinize emin misiniz?')) return;
  const { error } = await _supabase.from('scripts').delete().eq('id', id);
  if (!error) {
    await loadData(); renderAll();
    if (currentPage === 'detail') navigate('scripts', document.querySelector('[data-page=scripts]'));
    showToast('🗑️ Script silindi.');
  }
}

// ============================================================
//  ADMIN — SCRIPT LIST
// ============================================================
function renderAdminScripts() {
  const list = document.getElementById('admin-scripts-list');
  if (!list) return;
  list.innerHTML = '';

  if (scripts.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">📜</div><p>Henüz script yok. "Yeni Script Ekle" butonuna tıklayın.</p></div>';
    return;
  }
  scripts.forEach(s => {
    const item = document.createElement('div');
    item.className = 'admin-script-item';
    const thumb = s.image
      ? `<img class="asi-thumb" src="${esc(s.image)}" onerror="this.outerHTML='<div class=asi-thumb-ph>📜</div>'">`
      : `<div class="asi-thumb-ph">📜</div>`;
    item.innerHTML = `
      ${thumb}
      <div class="asi-body">
        <div class="asi-name">${esc(s.name)}</div>
        <div class="asi-meta">${s.game ? `🎮 ${esc(s.game)} · ` : ''}${s.category} · 👁 ${s.views || 0}${s.featured ? ' · ⭐' : ''}${s.verified ? ' · ✅' : ''}</div>
      </div>
      <div class="asi-actions">
        <button class="btn btn-ghost btn-sm" onclick="editScript('${s.id}')">✏️</button>
        <button class="btn btn-danger btn-sm" onclick="deleteScript('${s.id}')">🗑️</button>
      </div>
    `;
    list.appendChild(item);
  });
}

// ============================================================
//  ADMIN — USERS
// ============================================================
function renderAdminUsers() {
  const list = document.getElementById('admin-users-list');
  if (!list) return;
  list.innerHTML = '';

  // Admin (always first)
  const adminItem = document.createElement('div');
  adminItem.className = 'admin-user-item';
  adminItem.innerHTML = `
    <div class="aui-name"><div class="aui-avatar" style="background:linear-gradient(135deg,var(--accent-gold),var(--accent-red))">E</div>${ADMIN_USER} 👑</div>
    <div class="aui-email">admin@humanoid.gg</div>
    <div class="aui-date">Kurucu</div>
    <div>—</div>
  `;
  list.appendChild(adminItem);

  if (users.length === 0) {
    const p = document.createElement('p');
    p.style = 'color:var(--text-muted);font-size:.85rem;padding:1.5rem 0';
    p.textContent = 'Henüz kayıtlı kullanıcı yok.';
    list.appendChild(p);
    return;
  }

  users.forEach(u => {
    const item = document.createElement('div');
    item.className = 'admin-user-item';
    
    const isHelper = u.role === 'helper';
    const roleBadge = isHelper ? '<span class="aui-badge-helper" style="margin-left:.5rem">YARDIMCI</span>' : '';
    
    // Role action button (Admin only)
    let roleAction = '';
    if (currentUser && currentUser.isAdmin) {
       if (isHelper) {
          roleAction = `<button class="btn btn-ghost btn-sm" onclick="setUserRole('${esc(u.username)}', 'user')">Yetkiyi Al</button>`;
       } else {
          roleAction = `<button class="btn btn-primary btn-sm" style="background:var(--accent-green)" onclick="setUserRole('${esc(u.username)}', 'helper')">Yardımcı Yap</button>`;
       }
    }

    item.innerHTML = `
      <div class="aui-name">
        <div class="aui-avatar" style="background:${u.profile_color || 'var(--accent-purple)'}">${u.username[0].toUpperCase()}</div>
        ${esc(u.username)} ${roleBadge}
      </div>
      <div class="aui-email">${esc(u.email || '—')}</div>
      <div class="aui-date">${u.joinedAt || '—'}</div>
      <div class="asi-actions" style="display:flex;gap:.5rem">
        ${roleAction}
        ${(currentUser && currentUser.isAdmin) ? `<button class="btn btn-danger btn-sm" onclick="deleteUser('${esc(u.username)}')">Sil</button>` : ''}
      </div>
    `;
    list.appendChild(item);
  });
}

async function setUserRole(username, newRole) {
  if (!currentUser || !currentUser.isAdmin) return;
  const targetUser = users.find(u => u.username === username);
  if (!targetUser) return;

  const { error } = await _supabase.from('users').update({ role: newRole }).eq('username', username);
  if (!error) {
     showToast(`✅ ${username} artık ${newRole === 'helper' ? 'Yardımcı' : 'Kullanıcı'}!`);
     await loadData();
     renderAdminUsers();
  } else {
     showToast('⚠️ Yetki değiştirilemedi: ' + error.message);
  }
}

function deleteUser(username) {
  if (!confirm(`"${username}" kullanıcısını silmek istiyor musunuz?`)) return;
  users = users.filter(u => u.username !== username);
  saveData(); renderAdminUsers(); updateStats();
  showToast('🗑️ Kullanıcı silindi.');
}

// ============================================================
//  ADMIN — TABS & ANNOUNCEMENT
// ============================================================
function switchAdminTab(tab, el) {
  // If helper, only allow users tab
  if (currentUser && currentUser.isHelper && tab !== 'users') {
     showToast('⚠️ Sadece Kullanıcılar listesine erişim yetkiniz var.');
     return;
  }

  document.querySelectorAll('.admin-tab').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.admin-panel-section').forEach(s => s.classList.add('hidden'));
  document.getElementById('at-' + tab).classList.remove('hidden');
  if (tab === 'stats')      updateAdminStats();
  if (tab === 'siteconfig') populateConfigForm();
}

async function saveAnnouncement() {
  ann.text   = document.getElementById('ann-textarea').value.trim();
  ann.active = document.getElementById('ann-active').checked;
  await saveData(); applyAnnouncement();
  showToast('✅ Duyuru kaydedildi!');
}

function applyAnnouncement() {
  const bar  = document.getElementById('ann-bar');
  const txt  = document.getElementById('ann-bar-text');
  if (ann.active && ann.text) {
    txt.textContent = ann.text;
    bar.classList.remove('hidden');
    document.body.classList.add('has-ann');
  } else {
    bar.classList.add('hidden');
    document.body.classList.remove('has-ann');
  }
  // update editor
  const ta = document.getElementById('ann-textarea');
  const cb = document.getElementById('ann-active');
  if (ta) ta.value   = ann.text;
  if (cb) cb.checked = ann.active;
}

// ============================================================
//  STATS
// ============================================================
function updateStats() {
  const totalViews = scripts.reduce((a, s) => a + (s.views || 0), 0);
  animNum('stat-scripts', scripts.length);
  animNum('stat-users',   users.length);
  animNum('stat-views',   totalViews);
}

function updateAdminStats() {
  const totalViews = scripts.reduce((a, s) => a + (s.views || 0), 0);
  set('sc-scripts', scripts.length);
  set('sc-views',   totalViews);
  set('sc-users',   users.length);
  set('sc-featured', scripts.filter(s => s.featured).length);
}

function set(id, v) { const el = document.getElementById(id); if (el) el.textContent = v; }

function animNum(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let cur = 0;
  const step = Math.max(1, Math.ceil(target / 35));
  const t = setInterval(() => { cur = Math.min(cur + step, target); el.textContent = cur; if (cur >= target) clearInterval(t); }, 25);
}

// ============================================================
//  MODAL HELPERS
// ============================================================
function openModal(id) { document.getElementById(id).classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('open'); document.body.style.overflow = ''; }
function overlayClose(e, id) { if (e.target.id === id) closeModal(id); }
function switchModal(from, to) { closeModal(from); setTimeout(() => openModal(to), 160); }
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    document.body.style.overflow = '';
  }
});

// ============================================================
//  TOAST
// ============================================================
let _tt;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(_tt);
  _tt = setTimeout(() => t.classList.remove('show'), 3000);
}

// ============================================================
//  ESCAPE
// ============================================================
function esc(str) {
  return String(str || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ============================================================
//  PARTICLE SYSTEM
// ============================================================
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx    = canvas.getContext('2d');
  let W = canvas.width  = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  const COLORS = ['rgba(124,58,237,','rgba(168,85,247,','rgba(239,68,68,','rgba(6,182,212,','rgba(59,130,246,'];
  const N = Math.min(70, Math.floor(W * H / 22000));
  const pts = Array.from({ length: N }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
    r:  Math.random() * 1.6 + .5,
    c:  COLORS[Math.floor(Math.random() * COLORS.length)],
    a:  Math.random() * .55 + .1,
  }));

  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 125) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(124,58,237,${.07 * (1 - d / 125)})`;
          ctx.lineWidth = .5;
          ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }
    pts.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c + p.a + ')'; ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    });
    requestAnimationFrame(tick);
  }
  tick();
}

// ============================================================
//  SITE CONFIG
// ============================================================

/** Fill the admin form fields with current siteConfig values */
function populateConfigForm() {
  const g = id => document.getElementById(id);
  if (!g('cfg-sitename')) return;
  g('cfg-sitename').value     = siteConfig.sitename     || '';
  g('cfg-icon').value         = siteConfig.icon         || '';
  g('cfg-navsub').value       = siteConfig.navsub       || '';
  g('cfg-tabtitle').value     = siteConfig.tabtitle     || '';
  g('cfg-herotitle').value    = siteConfig.herotitle    || '';
  g('cfg-herobadge').value    = siteConfig.herobadge    || '';
  g('cfg-herosubtitle').value = siteConfig.herosubtitle || '';
  g('cfg-about1').value       = siteConfig.about1       || '';
  g('cfg-discord').value      = siteConfig.discord      || '';

  // Colors
  const c = siteConfig.colors;
  g('cfg-color-purple').value     = c.purple;
  g('cfg-color-purple-hex').value = c.purple;
  g('cfg-color-red').value        = c.red;
  g('cfg-color-red-hex').value    = c.red;
  g('cfg-color-bg').value         = c.bg;
  g('cfg-color-bg-hex').value     = c.bg;
  g('cfg-color-gold').value       = c.gold;
  g('cfg-color-gold-hex').value   = c.gold;

  // Sync color picker <-> hex text on change
  ['purple','red','bg','gold'].forEach(key => {
    const picker = g('cfg-color-' + key);
    const hex    = g('cfg-color-' + key + '-hex');
    if (picker) picker.addEventListener('input', () => { hex.value = picker.value; });
  });
}

/** Read admin form fields into siteConfig and apply to DOM */
async function saveSiteConfig() {
  const g = id => document.getElementById(id);
  siteConfig.sitename     = g('cfg-sitename').value.trim()     || DEFAULT_CONFIG.sitename;
  siteConfig.icon         = g('cfg-icon').value.trim()         || DEFAULT_CONFIG.icon;
  siteConfig.navsub       = g('cfg-navsub').value.trim()       || DEFAULT_CONFIG.navsub;
  siteConfig.tabtitle     = g('cfg-tabtitle').value.trim()     || DEFAULT_CONFIG.tabtitle;
  siteConfig.herotitle    = g('cfg-herotitle').value.trim()    || DEFAULT_CONFIG.herotitle;
  siteConfig.herobadge    = g('cfg-herobadge').value.trim()    || DEFAULT_CONFIG.herobadge;
  siteConfig.herosubtitle = g('cfg-herosubtitle').value.trim() || DEFAULT_CONFIG.herosubtitle;
  siteConfig.about1       = g('cfg-about1').value.trim()       || DEFAULT_CONFIG.about1;
  siteConfig.discord      = g('cfg-discord').value.trim()      || DEFAULT_CONFIG.discord;
  siteConfig.colors.purple = g('cfg-color-purple').value;
  siteConfig.colors.red    = g('cfg-color-red').value;
  siteConfig.colors.bg     = g('cfg-color-bg').value;
  siteConfig.colors.gold   = g('cfg-color-gold').value;

  await saveData();
  applySiteConfig(true);
  showToast('✅ Site ayarları kaydedildi ve uygulandı!');
}

/** Preview without saving */
function previewSiteConfig() {
  const g = id => document.getElementById(id);
  const preview = {
    sitename:     g('cfg-sitename').value     || siteConfig.sitename,
    icon:         g('cfg-icon').value         || siteConfig.icon,
    navsub:       g('cfg-navsub').value       || siteConfig.navsub,
    tabtitle:     g('cfg-tabtitle').value     || siteConfig.tabtitle,
    herotitle:    g('cfg-herotitle').value    || siteConfig.herotitle,
    herobadge:    g('cfg-herobadge').value    || siteConfig.herobadge,
    herosubtitle: g('cfg-herosubtitle').value || siteConfig.herosubtitle,
    about1:       g('cfg-about1').value       || siteConfig.about1,
    discord:      g('cfg-discord').value      || siteConfig.discord,
    colors: {
      purple: g('cfg-color-purple').value || siteConfig.colors.purple,
      red:    g('cfg-color-red').value    || siteConfig.colors.red,
      bg:     g('cfg-color-bg').value     || siteConfig.colors.bg,
      gold:   g('cfg-color-gold').value   || siteConfig.colors.gold,
    }
  };
  const oldConfig = siteConfig;
  siteConfig = preview;
  applySiteConfig(true);
  siteConfig = oldConfig;
  showToast('👁️ Önizleme uygulandı. Kaydetmek için "Kaydet & Uygula"ya bas.');
}

/** Reset to defaults */
function resetSiteConfig() {
  if (!confirm('Tüm site ayarlarını sıfırlamak istediğinize emin misiniz?')) return;
  siteConfig = { ...DEFAULT_CONFIG, colors: { ...DEFAULT_CONFIG.colors } };
  saveData();
  applySiteConfig(true);
  populateConfigForm();
  showToast('↩ Ayarlar varsayılana sıfırlandı!');
}

function resetColors() {
  const g = id => document.getElementById(id);
  const dc = DEFAULT_CONFIG.colors;
  g('cfg-color-purple').value     = dc.purple; g('cfg-color-purple-hex').value = dc.purple;
  g('cfg-color-red').value        = dc.red;    g('cfg-color-red-hex').value    = dc.red;
  g('cfg-color-bg').value         = dc.bg;     g('cfg-color-bg-hex').value     = dc.bg;
  g('cfg-color-gold').value       = dc.gold;   g('cfg-color-gold-hex').value   = dc.gold;
  showToast('↩ Renkler varsayılana döndürüldü. Kaydetmek için "Kaydet & Uygula"ya bas.');
}

function syncColorFromHex(key) {
  const hex    = document.getElementById('cfg-color-' + key + '-hex');
  const picker = document.getElementById('cfg-color-' + key);
  if (hex && picker && /^#[0-9a-fA-F]{6}$/.test(hex.value)) {
    picker.value = hex.value;
  }
}

/** Apply siteConfig to live DOM (and CSS vars if animate=true) */
function applySiteConfig(animate) {
  const c = siteConfig;

  // CSS variables
  const r = document.documentElement.style;
  r.setProperty('--accent-purple',   c.colors.purple);
  r.setProperty('--accent-purple-b', adjustBrightness(c.colors.purple, 30));
  r.setProperty('--accent-red',      c.colors.red);
  r.setProperty('--accent-red-b',    adjustBrightness(c.colors.red, 30));
  r.setProperty('--bg-primary',      c.colors.bg);
  r.setProperty('--bg-secondary',    adjustBrightness(c.colors.bg, 6));
  r.setProperty('--accent-gold',     c.colors.gold);

  // Page title
  document.title = c.tabtitle;

  // Navbar
  const brandIcon = document.getElementById('brand-icon');
  const brandText = document.getElementById('brand-text');
  const brandSub  = document.getElementById('brand-sub');
  if (brandIcon) brandIcon.textContent   = c.icon;
  if (brandText) { brandText.textContent = c.sitename; brandText.setAttribute('data-text', c.sitename); }
  if (brandSub)  brandSub.textContent    = c.navsub;

  // Loading screen
  const loaderTitle = document.getElementById('loader-title');
  if (loaderTitle) { loaderTitle.textContent = c.sitename; loaderTitle.setAttribute('data-text', c.sitename); }

  // Hero
  const heroBadge    = document.getElementById('hero-badge');
  const heroTitle    = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroBadge)    heroBadge.textContent    = c.herobadge;
  if (heroTitle)    { heroTitle.textContent   = c.herotitle; heroTitle.setAttribute('data-text', c.herotitle); }
  if (heroSubtitle) heroSubtitle.textContent  = c.herosubtitle;

  // About page
  const about1   = document.getElementById('about-text-1');
  const discord  = document.getElementById('about-discord');
  if (about1)  about1.textContent   = c.about1;
  if (discord) discord.textContent  = c.discord;

  // Scripts page desc
  const sdesc = document.getElementById('scripts-page-desc');
  if (sdesc && c.scriptsdesc) sdesc.textContent = c.scriptsdesc;
}

/** Slightly brighten a hex color */
function adjustBrightness(hex, amount) {
  try {
    const num = parseInt(hex.replace('#',''), 16);
    const r = Math.min(255, (num >> 16) + amount);
    const g = Math.min(255, ((num >> 8) & 0xff) + amount);
    const b = Math.min(255, (num & 0xff) + amount);
    return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
  } catch { return hex; }
}

// ============================================================
//  CHAT
// ============================================================
let chatSubscription = null;
let lastMsgTime = null;

async function loadChatMessages() {
  const container = document.getElementById('chat-messages');
  const empty = document.getElementById('chat-empty');
  if (!container) return;

  const { data, error } = await _supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) return;
  if (data) data.reverse();
  
  if (!data || data.length === 0) {
      if (empty) {
          empty.style.display = 'block';
      }
      return;
  }
  
  if (empty) {
      empty.style.display = 'none';
  }
  container.innerHTML = '';
  data.forEach(m => {
      if (m.id && document.getElementById('msg-' + m.id)) return;
      container.appendChild(buildChatMsg(m));
  });
  container.scrollTop = container.scrollHeight;
  if(data.length > 0) lastMsgTime = data[data.length - 1].created_at;

  if (chatSubscription) chatSubscription.unsubscribe();
  chatSubscription = _supabase
    .channel('messages-realtime')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
      if (payload.new.id && document.getElementById('msg-' + payload.new.id)) return;
      const empty2 = document.getElementById('chat-empty');
      if (empty2) empty2.style.display = 'none';
      container.appendChild(buildChatMsg(payload.new));
      container.scrollTop = container.scrollHeight;
      lastMsgTime = payload.new.created_at;
    })
    .subscribe();
}

async function fetchNewMessages() {
  if (!document.getElementById('page-chat').classList.contains('active')) return; 
  let query = _supabase.from('messages').select('*').order('created_at', { ascending: false }).limit(100);
  const { data, error } = await query;
  if (error) return;
  if (data) data.reverse();

  const container = document.getElementById('chat-messages');
  const empty = document.getElementById('chat-empty');

  let dataToRender = data || [];
  const markerIdx = dataToRender.findLastIndex(m => m.content === '__CLEAR_CHAT_MARKER__' && m.is_admin);
  if (markerIdx !== -1) {
      dataToRender = dataToRender.slice(markerIdx + 1);
  }

  if (dataToRender.length === 0) {
      if (empty) empty.style.display = 'block';
      container.querySelectorAll('.chat-msg').forEach(el => el.remove());
      return;
  }
  
  if (empty) empty.style.display = 'none';

  const currentDOMIds = new Set([...container.querySelectorAll('.chat-msg')].map(el => el.id.replace('msg-', '')));
  const newDataIds = new Set(dataToRender.map(m => String(m.id)));

  // Remove deleted ones
  currentDOMIds.forEach(id => {
      if (!newDataIds.has(id)) {
          const el = document.getElementById('msg-' + id);
          if (el) el.remove();
      }
  });

  // Append new ones
  let newAppended = false;
  dataToRender.forEach(m => {
     if (m.id && document.getElementById('msg-' + m.id)) return;
     container.appendChild(buildChatMsg(m));
     newAppended = true;
  });
  if (newAppended) container.scrollTop = container.scrollHeight;
}
setInterval(fetchNewMessages, 3000);

function buildChatMsg(m) {
  if (m.content === '__CLEAR_CHAT_MARKER__') {
     const dd = document.createElement('div');
     dd.id = 'msg-' + m.id;
     dd.style.display = 'none';
     return dd;
  }

  const div = document.createElement('div');
  if (m.id) div.id = 'msg-' + m.id;
  const isOwn = currentUser && m.username === currentUser.username;
  div.className = 'chat-msg' + (isOwn ? ' own' : '');
  const time = new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Get Avatar from cached users array or local currentUser
  let uObj = users.find(u => u.username === m.username);
  let avatarSrc = (uObj && uObj.avatar_url) ? uObj.avatar_url : '';
  if (!avatarSrc && isOwn && currentUser.avatarUrl) avatarSrc = currentUser.avatarUrl;
  
  const avatarHtml = avatarSrc ? `<img src="${esc(avatarSrc)}"/>` : `👤`;

  const adminDropdown = (currentUser && currentUser.isAdmin && !isOwn) ? 
     `<button style="background:none; border:none; cursor:pointer; color:var(--text-muted); font-size:1rem; margin-left:auto;" onclick="deleteIndividualMessage('${m.id}')" title="Bu mesajı sil">🗑️</button>` : '';

  // Role details
  let roleBadge = '';
  let nameColor = 'var(--accent-purple-b)';
  
  if (m.is_admin) {
    roleBadge = '<span class="chat-msg-admin-badge">👑 Admin</span>';
    nameColor = 'var(--accent-gold)';
  } else {
    // Check if user is helper
    const userObj = users.find(u => u.username === m.username);
    if (userObj && userObj.role === 'helper') {
      roleBadge = '<span class="chat-msg-helper-badge">🛡️ Yardımcı</span>';
      nameColor = 'var(--accent-green-b)';
    }
  }

  div.innerHTML = `
    <div class="chat-msg-avatar" style="cursor:pointer;" onclick="openProfileViewer('${esc(m.username)}')">${avatarHtml}</div>
    <div style="display:flex; flex-direction:column; gap:0.2rem; align-items:${isOwn ? 'flex-end' : 'flex-start'}; max-width:85%;">
      <div style="display:flex; flex-direction:${isOwn ? 'row-reverse' : 'row'}; align-items:center; gap:0.4rem; font-size:0.75rem; color:var(--text-muted);">
        <span style="cursor:pointer; font-weight:bold; font-family:'Orbitron', sans-serif; color:${nameColor};" onclick="openProfileViewer('${esc(m.username)}')">${esc(m.username)}</span>
        ${roleBadge}
        <span style="opacity:0.5; font-size:0.65rem;">${time}</span>
        ${adminDropdown}
      </div>
      <div class="chat-msg-text" style="${isOwn ? 'background:linear-gradient(135deg, rgba(124,58,237,.25), rgba(99,102,241,.18)); border-radius:12px 12px 0 12px;' : 'background:rgba(124,58,237,.08); border-radius:0 12px 12px 12px;'} padding:0.65rem 0.95rem; border:1px solid var(--border); box-shadow:0 3px 10px rgba(0,0,0,0.15); font-size:0.9rem; word-break:break-word; text-align:left;">${esc(m.content)}</div>
    </div>
  `;
  return div;
}

async function clearChat() {
  if (!currentUser || !currentUser.isAdmin) return;
  if (!confirm("Tüm mesajlar kalıcı olarak silinecek! Onaylıyor musunuz?")) return;
  
  // 1: DB Hard Delete (Will bypass RLS failures gracefully since next step syncs DOM safely)
  const { data } = await _supabase.from('messages').select('id');
  if (data && data.length > 0) {
     const ids = data.map(m => m.id);
     await _supabase.from('messages').delete().in('id', ids);
  }

  // 2: Soft Delete Marker (To forcefully wipe all clients instantly)
  await _supabase.from('messages').insert([{
    username: currentUser.username,
    content: '__CLEAR_CHAT_MARKER__',
    is_admin: true
  }]);
  
  showToast("✅ Sohbet temizlendi!");
  fetchNewMessages();
}

// ============== PROFILE VIEW & SETTINGS ==============

function openProfileSettings() {
  if (!currentUser) return;
  closeModal('profile-panel');
  document.getElementById('profile-panel').classList.remove('open');
  
  document.getElementById('ps-username').value = currentUser.username || '';
  document.getElementById('ps-email').value = currentUser.email || '';
  document.getElementById('ps-bio').value = currentUser.bio || '';
  document.getElementById('ps-avatar-url').value = currentUser.avatarUrl || '';
  document.getElementById('ps-password').value = '';
  openModal('profile-settings-modal');
}

function applyAvatarUrlFromModal() {
  let url = document.getElementById('ps-avatar-url').value.trim();
  if (url) {
    showToast('Görsel alındı. Değişiklikleri Kaydet butonuna basarak işlemi tamamlayın.');
  }
}

async function updateSelfProfile() {
  if (!currentUser) return;
  const newU = document.getElementById('ps-username').value.trim();
  const newE = document.getElementById('ps-email').value.trim();
  const newB = document.getElementById('ps-bio').value.trim();
  const newA = document.getElementById('ps-avatar-url').value.trim();
  const newP = document.getElementById('ps-password').value.trim();
  
  if (!newU) return showToast('⚠️ Kullanıcı adı boş olamaz!');
  
  const updates = { username: newU, email: newE, bio: newB, avatar_url: newA };
  if (newP) updates.password = newP;
  
  const { error } = await _supabase.from('users').update(updates).eq('id', currentUser.id);
  if (error) {
    showToast('⚠️ Hata: ' + error.message);
  } else {
    showToast('✅ Profil başarıyla güncellendi!');
    // Update local currentUser
    currentUser.username = newU;
    currentUser.email = newE;
    currentUser.bio = newB;
    currentUser.avatarUrl = newA;
    if (newP) currentUser.password = newP;
    localStorage.setItem('humanoid_user', JSON.stringify(currentUser));
    updateNavUser();
    closeModal('profile-settings-modal');
    loadData(); // reload users array globally
  }
}

let activeViewerUsername = null;
function openProfileViewer(username) {
  if (currentUser && username === currentUser.username) {
      openProfileSettings();
      return;
  }

  let u = users.find(x => x.username === username);
  if (!u) {
      u = { username: username, created_at: new Date().toISOString(), bio: '', avatar_url: '' };
  }
  
  activeViewerUsername = u.username;
  document.getElementById('uv-username').innerText = u.username;
  const d = new Date(u.created_at);
  document.getElementById('uv-date').innerText = 'Katılım: ' + d.toLocaleDateString();
  document.getElementById('uv-bio').innerText = u.bio ? u.bio : 'Kullanıcı bilgileri veya bio bulunamadı.';
  document.getElementById('uv-avatar').innerHTML = u.avatar_url ? `<img src="${esc(u.avatar_url)}" style="width:100%;height:100%;object-fit:cover;"/>` : '👤';
  
  const adminActions = document.getElementById('uv-admin-actions');
  const isPrivileged = currentUser && (currentUser.isAdmin || currentUser.isHelper);
  
  if (isPrivileged && u.username !== currentUser.username) {
      adminActions.classList.remove('hidden');
      const isMuted = siteConfig.muted_users && siteConfig.muted_users.includes(u.username);
      const btnMute = document.getElementById('uv-btn-mute');
      const btnDeleteAll = document.getElementById('uv-btn-deleteAll');

      if (isMuted) {
          btnMute.innerText = 'Susturmayı Kaldır (Unmute)';
          btnMute.onclick = () => uvActionMute(u.username, false);
      } else {
          btnMute.innerText = 'Sustur / Mute';
          btnMute.onclick = () => uvActionMute(u.username, true);
      }
      
      // Helpers cannot delete all messages
      if (currentUser.isHelper) {
          btnDeleteAll.classList.add('hidden');
      } else {
          btnDeleteAll.classList.remove('hidden');
          btnDeleteAll.onclick = () => uvActionDeleteAll(u.username);
      }
  } else {
      adminActions.classList.add('hidden');
  }
  openModal('user-viewer-modal');
}

async function uvActionMute(username, doMute) {
  if (!currentUser || (!currentUser.isAdmin && !currentUser.isHelper)) return;
  const mUsers = siteConfig.muted_users || [];
  if (doMute) {
      siteConfig.muted_users = [...mUsers, username];
  } else {
      siteConfig.muted_users = mUsers.filter(x => x !== username);
  }
  showToast('🔄 Bekleyin...');
  const { error } = await _supabase.from('site_config').upsert({ id: 1, config: siteConfig, announcement: siteConfig.announcement || '' });
  if (!error) {
      showToast('✅ İşlem başarılı!');
      openProfileViewer(username); // refresh modal state
  } else {
      showToast('⚠️ Hata: ' + error.message);
  }
}

async function uvActionDeleteAll(username) {
  if (!currentUser || !currentUser.isAdmin) return;
  if (!confirm(username + ' kullanıcısının tümmm mesajları silinecek! Devam mı?')) return;
  const { error } = await _supabase.from('messages').delete().eq('username', username);
  if (!error) {
      showToast('✅ Tamamlandı!');
      fetchNewMessages();
      closeModal('user-viewer-modal');
  } else {
      showToast('Hata: ' + error.message);
  }
}

async function sendMessage() {
  if (!currentUser) { showToast('\u26a0\ufe0f Mesaj göndermek için giriş yap!'); return; }
  
  // Realtime mute check
  const { data: muteData } = await _supabase.from('site_config').select('config').eq('id', 1).single();
  if (muteData && muteData.config && muteData.config.muted_users && muteData.config.muted_users.includes(currentUser.username)) {
      showToast('⚠️ Yönetici tarafından sohbetten susturuldunuz!');
      return;
  }

  const input = document.getElementById('chat-input');
  const content = input.value.trim();
  if (!content) return;
  if (content.length > 500) { showToast('\u26a0\ufe0f Mesaj 500 karakterden uzun olamaz!'); return; }

  const { error } = await _supabase.from('messages').insert([{
    username: currentUser.username,
    content: content,
    is_admin: !!currentUser.isAdmin
  }]);

  if (!error) {
    input.value = '';
    fetchNewMessages();
  } else {
    showToast("⚠️ Mesaj gönderilemedi. Supabase'de messages tablosunu oluşturmanız gerekiyor!");
  }
}

// ============================================================
//  DISCORD LINK UPDATER
// ============================================================
function updateDiscordLink() {
  const el = document.getElementById('about-discord');
  if (!el) return;
  const raw = siteConfig.discord || '@erenzxo';
  let href = '#';
  if (raw.startsWith('http')) {
    href = raw;
  } else if (raw.startsWith('discord.gg/')) {
    href = 'https://' + raw;
  } else {
    href = 'https://discord.gg/' + raw.replace('@', '');
  }
  el.href = href;
  el.textContent = raw;
}
