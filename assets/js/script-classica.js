// === Overlay de bienvenida (si está presente) ===
const enterBtn = document.getElementById('enter-button');
const overlay = document.getElementById('welcome');

if (enterBtn && overlay) {
  enterBtn.addEventListener('click', () => {
    overlay.classList.add('fade-out');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 800);
  });
}

// === Modal: Ver más (regalos) ===
const btnGift = document.getElementById('btnGift');
const modal = document.getElementById('modalRegalo');

if (btnGift && modal) {
  const close = modal.querySelector('.modal__close');

  btnGift.onclick = () => modal.style.display = 'flex';
  close.onclick = () => modal.style.display = 'none';
  window.onclick = e => {
    if (e.target === modal) modal.style.display = 'none';
  };
}

// === Scroll reveal (animaciones suaves al hacer scroll) ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-zoom, .fade-down').forEach(el => {
  observer.observe(el);
});
