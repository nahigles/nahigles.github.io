/* =========================================================
   Interacciones generales del portfolio
   ========================================================= */

/* RUTA DE TU CV EN PDF
   Cambia solo esta línea si tu archivo se llama distinto o está en otra carpeta.
   Debe coincidir EXACTAMENTE (mayúsculas, tildes y extensión .pdf), sobre todo en GitHub Pages. */
const CV_FILE = 'cv/Nahia_Iglesias_CV.pdf';
const CV_DOWNLOAD_NAME = 'Nahia_Iglesias_Calvo_CV.pdf';

document.addEventListener('DOMContentLoaded', () => {

  /* --- Enlaces al CV --- */
  document.querySelectorAll('[data-cv]').forEach(a => {
    a.href = CV_FILE;
    a.setAttribute('download', CV_DOWNLOAD_NAME);
  });

  /* --- Menú móvil --- */
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* --- Aparición suave al hacer scroll --- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  /* --- Vídeo de YouTube del proyecto destacado (se carga al pulsar) --- */
  document.querySelectorAll('[data-youtube]').forEach(btn => {
    btn.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.youtube}?autoplay=1&rel=0`;
      iframe.title = 'Misión Colombia';
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      const media = btn.parentElement;
      media.classList.remove('is-empty');
      media.querySelectorAll('img').forEach(img => img.remove());
      btn.replaceWith(iframe);
    });
  });

  /* --- Copiar correo --- */
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const label = btn.querySelector('span') || btn;
      const original = label.innerHTML;
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        label.textContent = typeof t === 'function' ? t('js.copied') : '¡Copiado!';
        setTimeout(() => { label.innerHTML = original; }, 1600);
      } catch (e) {
        window.location.href = 'mailto:' + btn.dataset.copy;
      }
    });
  });

  /* --- Formulario de contacto (abre el correo con el mensaje listo) --- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form);
      const tr = typeof t === 'function' ? t : k => k;
      const subject = `${tr('js.subject')} · ${d.get('name')}`;
      const body =
        `${d.get('message')}\n\n—\n` +
        `${tr('js.from')}: ${d.get('name')} <${d.get('email')}>\n` +
        (d.get('company') ? `${tr('js.company')}: ${d.get('company')}\n` : '');
      window.location.href =
        `mailto:${form.dataset.mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  /* --- Año del footer --- */
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
});
