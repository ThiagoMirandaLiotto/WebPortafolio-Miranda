/* ═══════════════════════════════════════
   HLS VIDEO SETUP
   Carga el stream HLS en los elementos <video>
═══════════════════════════════════════ */
const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

function setupHLS(videoEl) {
  if (!videoEl) return;

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(HLS_SRC);
    hls.attachMedia(videoEl);
  } else if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {

    videoEl.src = HLS_SRC;
  }
}

setupHLS(document.getElementById('hero-video'));
setupHLS(document.getElementById('footer-video'));


/* ═══════════════════════════════════════
   ROLE CYCLING — Ciclo de roles en el hero
═══════════════════════════════════════ */
const ROLES = ['Estudiante', 'Desarrollador', 'Diseñador'];
let roleIndex = 0;
const roleEl = document.getElementById('role-text');

setInterval(() => {
  roleIndex = (roleIndex + 1) % ROLES.length;
  roleEl.textContent = ROLES[roleIndex];

  // Redisparar animacion CSS quitando y volviendo a agregar la clase
  roleEl.classList.remove('role-animate');
  void roleEl.offsetWidth; 
  roleEl.classList.add('role-animate');
}, 2000);

/* ═══════════════════════════════════════
   NAVIGATION LINKS — Activar enlace en nav
═══════════════════════════════════════ */
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('nav-link--active'));
    link.classList.add('nav-link--active');
  });
});

/* ═══════════════════════════════════════
   MOBILE MENU — Hamburger toggle
═══════════════════════════════════════ */
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.getElementById('nav-mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});
