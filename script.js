/* =========================================================
   ⚠️ GANTI TANGGAL DI BAWAH INI SESUAI TANGGAL JADIAN KALIAN
   Format: TAHUN, BULAN (0=Jan, 11=Des), TANGGAL, JAM, MENIT
   Contoh: 14 Februari 2023 jam 00:00 => new Date(2023, 1, 14, 0, 0, 0)
   ========================================================= */
const anniversaryDate = new Date(2023, 6, 25, 0, 0, 0);


/* ============ COUNTDOWN ============ */
function updateCountdown() {
  const now = new Date();
  let diff = now - anniversaryDate; // selisih dalam milidetik

  if (diff < 0) diff = 0; // jaga-jaga kalau tanggal di masa depan

  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;

  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor((diff % hour) / minute);
  const seconds = Math.floor((diff % minute) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* ============ MUSIC PLAYER ============ */
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');
const musicText = document.getElementById('musicText');
const bgMusic = document.getElementById('bgMusic');
const equalizer = document.getElementById('equalizer');

let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    bgMusic.play().catch(() => {
      console.log('Autoplay diblokir browser, klik lagi untuk memutar musik.');
    });
    musicIcon.textContent = '❚❚';
    musicText.textContent = 'Sedang Diputar...';
    equalizer.classList.add('playing');
    isPlaying = true;
  } else {
    bgMusic.pause();
    musicIcon.textContent = '▶';
    musicText.textContent = 'Putar Lagu Kita';
    equalizer.classList.remove('playing');
    isPlaying = false;
  }
});


/* ============ FLOATING HEARTS BACKGROUND ============ */
const heartsContainer = document.getElementById('floatingHearts');
const heartSymbols = ['❤', '💗', '💕', '💖'];

function createHeart() {
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  const size = Math.random() * 16 + 12; // 12px - 28px
  const startX = Math.random() * 100; // posisi horizontal dalam %
  const duration = Math.random() * 6 + 8; // 8s - 14s

  heart.style.left = startX + 'vw';
  heart.style.fontSize = size + 'px';
  heart.style.animationDuration = duration + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 800);

// Buat beberapa hati langsung saat halaman dibuka
for (let i = 0; i < 6; i++) {
  setTimeout(createHeart, i * 300);
}
