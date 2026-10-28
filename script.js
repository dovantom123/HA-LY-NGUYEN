(function () {
  'use strict';

  /* ---------- i18n: VI is read from the HTML, EN/ZH from here ---------- */
  var T = {
    nav_about: ['About', '关于我'], nav_exp: ['Experience', '经历'], nav_services: ['Services', '服务'],
    nav_events: ['Events', '活动'], nav_gallery: ['Gallery', '图集'], nav_contact: ['Contact', '联系'],
    present: ['▶ Present', '▶ 演示模式'],
    hero_langs: ['Vietnamese – Chinese – English', '越南语 – 中文 – 英语'],
    cta_book: ['Book now', '预约合作'], cta_events: ['View events', '查看活动'],
    about_t: ['About me', '关于我'],
    l_vi: ['Vietnamese', '越南语'], l_zh: ['Chinese', '中文'], l_en: ['English', '英语'],
    about_p1: ['A trilingual event and wedding MC (Vietnamese – Chinese – English), based in Quang Ninh, Vietnam.',
      '越南语 – 中文 – 英语三语活动与婚礼主持人，常驻越南广宁。'],
    about_p2: ['Hosting and accompanying corporate programmes, conferences, seminars, gala dinners, signing ceremonies, international cultural and sports exchange openings, as well as weddings and luxury private events.',
      '主持并陪伴各类企业活动、会议、研讨会、晚宴、签约仪式、国际文化体育交流开幕式，以及婚礼和高端私人活动。'],
    about_p3: ['Fluent switching between three languages keeps international programmes smooth, polished and warm for Vietnamese, Chinese and international guests alike.',
      '三种语言之间灵活切换，让涉外活动流畅、得体，并让越南、中国及国际嘉宾都倍感亲切。'],
    draft: ['Draft – please review', '草稿 – 请审阅'],
    exp_t: ['Featured experience', '代表经历'],
    exp_lead: ['Hosting and supporting many corporate programmes and international events:', '主持并参与众多企业活动与国际活动：'],
    exp1: ['Signing ceremonies of sales contracts between Vietnamese enterprises and international partners', '越南企业与国际合作伙伴的购销合同签约仪式'],
    exp2: ['Opening ceremony of the Vietnam – China international football cultural exchange', '越中国际足球文化交流开幕式'],
    exp3: ['Factory inaugurations and project groundbreaking ceremonies', '工厂落成与项目奠基仪式'],
    exp4: ['Conferences, seminars, gala dinners and corporate events', '会议、研讨会、晚宴及企业活动'],
    svc_t: ['Services', '服务项目'],
    svc1_t: ['Signing & partnership ceremonies', '签约与合作仪式'],
    svc1_p: ['Signing ceremony of the natural gas sales and purchase agreement between Etrillion and PV GAS D.', '溢兆利与 PV GAS D 天然气购销合同签约仪式。'],
    svc2_t: ['Conferences & gala dinners', '会议与晚宴'],
    svc2_p: ['Conferences, seminars, gala dinners and corporate events.', '企业会议、研讨会及高端晚宴活动。'],
    svc3_t: ['Wedding & private events', '婚礼与私人活动'],
    svc3_p: ['Wedding MC and host for luxury private events.', '婚礼及高端私人活动主持。'],
    ev_t: ['Featured events', '代表活动'],
    fabia_t: ['FABIA Season 9 – Asia Beauty & Wellness Summit', '第九届亚洲美容与健康产业高峰论坛 – FABIA'],
    fabia_m: ['FABIA Season 9 – Asia Beauty & Wellness Summit 2026 · 16 – 17.04.2026 · Muong Thanh Luxury Bai Chay, Ha Long',
      'FABIA 第九季 · 2026 · 2026年4月16–17日 · 下龙湾白寨芒清豪华酒店'],
    ev1_t: ['Opening of the Vietnam – China International Friendly Football Match', '越中国际足球友谊赛开幕式'],
    ev1_p: ['International Friendly Football Match (Vietnam – China)', '国际足球友谊赛（越南—中国）'],
    ev2_p: ['Abbott · 19.04.2026 · Ballroom 1, 6th floor', '雅培 · 2026年4月19日 · 6楼1号宴会厅'],
    ev3_t: ['Etrillion – PV GAS D signing ceremony', '溢兆利与 PV GAS D 签约仪式'],
    ev3_p: ['Natural gas sales and purchase agreement', '天然气购销合同'],
    ev4_t: ['Quang Ninh (Vietnam) – Guangxi (China) business connection conference', '中国广西—越南广宁企业对接会'],
    ev4_p: ['07.07.2026 · Guangxi, China', '2026年7月7日 · 中国广西'],
    ev5_t: ['“Thanh Âm Gốm” art performance – Thang Long – Ha Noi Festival II', '“陶之声”艺术演出 – 第二届升龙—河内文化节'],
    ev5_p: ['14.10.2026 · “Heritage Flow” · Bat Trang, Ha Noi · Organised by the Hanoi Department of Culture, Sports and Tourism', '2026年10月14日 · “遗产之流” · 河内钵场 · 河内市文化体育旅游厅主办'],
    need_photo: ['photo needed', '需补充照片'],
    stats_t: ['Highlights in numbers', '数字亮点'],
    st1: ['Events hosted (large & small)', '大小活动主持场次'], st2: ['Years of experience', '从业年限'],
    st3: ['Hosting languages', '主持语言'], st4: ['Clients', '客户'],
    part_t: ['Partners we worked with', '合作伙伴'], need_partner: ['[Add partner]', '[添加合作伙伴]'],
    why_t: ['Why choose MC Hạ Ly Nguyễn', '为什么选择主持人 Hạ Ly Nguyễn'],
    why1_t: ['Trilingual: Vietnamese – Chinese – English', '越南语 – 中文 – 英语三语主持'],
    why1_p: ['Live hosting in three languages, ideal for events with Vietnamese, Chinese and international guests.', '三语现场主持，适合有越南、中国及国际嘉宾的活动。'],
    why2_t: ['A wide range of event types', '活动类型多样'],
    why2_p: ['From signing ceremonies, conferences and gala dinners to weddings and luxury private events.', '从签约仪式、会议、晚宴到婚礼及高端私人活动。'],
    why3_t: ['Hands-on experience', '丰富的实战经验'],
    why3_p: ['200+ events of all sizes and 200+ clients accompanied.', '主持大小活动200多场，服务客户200多位。'],
    gal_t: ['Gallery', '图集'],
    ct_t: ['Contact for booking', '预约联系'], ct_loc: ['Location', '地点'],
    cta_mail: ['Send a booking email', '发送预约邮件']
  };
  var els = document.querySelectorAll('[data-i]');
  els.forEach(function (el) { el.dataset.vi = el.innerHTML; });

  function setLang(l) {
    var idx = l === 'en' ? 0 : 1;
    els.forEach(function (el) {
      var k = el.dataset.i;
      if (l === 'vi' || !T[k]) { el.innerHTML = el.dataset.vi; return; }
      el.innerHTML = T[k][idx];
    });
    document.documentElement.lang = l === 'zh' ? 'zh' : l;
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === l));
    });
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });
  var saved = 'vi';
  try { saved = localStorage.getItem('lang') || 'vi'; } catch (e) {}
  if (saved !== 'vi') setLang(saved);

  /* ---------- reveal on scroll + counters ---------- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      var c = e.target.querySelector('[data-count]');
      if (c && c.dataset.count) count(c, +c.dataset.count);
      io.unobserve(e.target);
    });
  }, { threshold: .12 }) : null;
  document.querySelectorAll('.reveal').forEach(function (el) {
    if (io) io.observe(el); else el.classList.add('in');
  });
  function count(el, to) {
    var suf = /\+$/.test(el.textContent) ? '+' : '', n = 0, step = Math.max(1, Math.round(to / 30));
    var t = setInterval(function () {
      n = Math.min(to, n + step); el.textContent = n + suf;
      if (n >= to) clearInterval(t);
    }, 40);
  }

  /* ---------- gallery + lightbox ---------- */
  var photos = [
    ['red-ballroom', 'Váy đỏ tại sảnh tiệc'], ['white-1', 'Váy trắng'], ['fabia-red-2', 'FABIA S9 áo dài đỏ'],
    ['gold-2', 'Váy vàng'], ['fabia-stage', 'Sân khấu FABIA S9'], ['abbott', 'Women\'s Health Summit 2026'],
    ['fabia-trophy-1', 'FABIA S9'], ['pvgas-signing', 'Lễ ký kết Etrillion – PV GAS D'], ['white-3', 'Váy trắng'],
    ['football', 'Giao hữu bóng đá Việt – Trung'], ['fabia-hall', 'Toàn cảnh FABIA S9'], ['gold-1', 'Váy vàng'],
    ['fabia-runway', 'FABIA S9 sân khấu'], ['fabia-red-1', 'FABIA S9 áo dài đỏ'],
    ['thanh-am-gom-1', 'Sự kiện Thanh Âm Gốm'], ['roses', 'MC bên hoa hồng đỏ'], ['thanh-am-gom-2', 'Sân khấu Thanh Âm Gốm'],
    ['tag-stage-1', 'Thanh Âm Gốm – MC trên sân khấu'], ['tag-stage-2', 'Thanh Âm Gốm – sân khấu'], ['tag-stage-3', 'Thanh Âm Gốm – dẫn chương trình'],
    ['tag-stage-4', 'Thanh Âm Gốm – MC Hạ Ly Nguyễn'], ['tag-finale', 'Thanh Âm Gốm – toàn đoàn kết thúc chương trình'],
    ['pulp-paper-1', 'Hội thảo công nghệ bột giấy và giấy'], ['pulp-paper-2', 'Hội thảo công nghệ bột giấy và giấy']
  ];
  var grid = document.getElementById('masonry');
  photos.forEach(function (p, i) {
    var b = document.createElement('button');
    b.setAttribute('aria-label', p[1]);
    b.innerHTML = '<img loading="lazy" src="img/' + p[0] + '.jpg" alt="' + p[1] + '">';
    b.addEventListener('click', function () { openLb(i); });
    grid.appendChild(b);
  });
  var lb = document.getElementById('lb'), lbimg = document.getElementById('lbimg'), cur = 0;
  function openLb(i) {
    cur = (i + photos.length) % photos.length;
    lbimg.src = 'img/' + photos[cur][0] + '.jpg'; lbimg.alt = photos[cur][1];
    lb.classList.add('open');
  }
  function closeLb() { lb.classList.remove('open'); }
  document.getElementById('lbx').onclick = closeLb;
  document.getElementById('lbp').onclick = function () { openLb(cur - 1); };
  document.getElementById('lbn').onclick = function () { openLb(cur + 1); };
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });

  /* ---------- presentation mode ---------- */
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var idx = 0, counter = document.getElementById('counter');
  function show(i) {
    idx = Math.max(0, Math.min(slides.length - 1, i));
    slides.forEach(function (s, k) { s.classList.toggle('active', k === idx); });
    slides[idx].scrollTop = 0;
    slides[idx].querySelectorAll('.reveal').forEach(function (r) { r.classList.add('in'); });
    counter.textContent = (idx + 1) + ' / ' + slides.length;
  }
  function enter() {
    document.body.classList.add('present');
    var cur = 0, best = 1e9;
    slides.forEach(function (s, k) {
      var d = Math.abs(s.getBoundingClientRect().top - 64);
      if (d < best) { best = d; cur = k; }
    });
    show(cur);
    if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(function () {});
  }
  function leave() {
    document.body.classList.remove('present');
    slides.forEach(function (s) { s.classList.remove('active'); });
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    slides[idx].scrollIntoView();
  }
  var P = function () { return document.body.classList.contains('present'); };
  document.getElementById('presentBtn').onclick = enter;
  document.getElementById('exit').onclick = leave;
  document.getElementById('prev').onclick = function () { show(idx - 1); };
  document.getElementById('next').onclick = function () { show(idx + 1); };
  document.addEventListener('keydown', function (e) {
    if (lb.classList.contains('open')) {
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') openLb(cur - 1);
      if (e.key === 'ArrowRight') openLb(cur + 1);
      return;
    }
    if (!P()) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); show(idx + 1); }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); show(idx - 1); }
    if (e.key === 'Escape') leave();
    if (e.key === 'f' || e.key === 'F') {
      if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(function () {});
    }
  });
  var x0 = null;
  document.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (!P() || x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 60) show(idx + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive: true });
})();
