// Animasi mengetik di judul hero.
// Ubah teks di bawah ini untuk mengganti nama dan kata yang berputar.
(function () {
  const NAME = 'Amisah';
  const ROLES = ['fast, responsive', 'clean, modern', 'user-friendly', 'mobile-friendly'];
  const TYPE_SPEED = 90;    // ms per huruf saat mengetik
  const DELETE_SPEED = 45;  // ms per huruf saat menghapus
  const HOLD = 1600;        // jeda setelah kata selesai diketik

  const nameEl = document.getElementById('typed-name');
  const roleEl = document.getElementById('typed-role');
  if (!nameEl || !roleEl) return;
  // Hormati pengguna yang mematikan animasi: teks tetap tampil statis.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function type(el, text) {
    el.classList.add('is-typing');
    for (let i = 1; i <= text.length; i++) {
      el.textContent = text.slice(0, i);
      await sleep(TYPE_SPEED);
    }
  }
  async function erase(el) {
    for (let i = el.textContent.length - 1; i >= 0; i--) {
      el.textContent = el.textContent.slice(0, i);
      await sleep(DELETE_SPEED);
    }
  }

  async function run() {
    nameEl.textContent = '';
    roleEl.textContent = '';
    await type(nameEl, NAME);
    nameEl.classList.remove('is-typing');
    await sleep(300);
    let i = 0;
    while (true) {
      await type(roleEl, ROLES[i % ROLES.length]);
      await sleep(HOLD);
      await erase(roleEl);
      await sleep(250);
      i++;
    }
  }
  run();
})();
