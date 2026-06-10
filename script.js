const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

// Auto-start after first user interaction
document.addEventListener('click', () => {
    if (!isPlaying) {
        bgMusic.play().catch(err => console.log("Audio play blocked:", err));
        isPlaying = true;
        musicBtn.textContent = "🔊 Music On";
    }
}, { once: true });

// Toggle music manually
musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = "🔊 Music On";
        isPlaying = true;
    } else {
        bgMusic.pause();
        musicBtn.textContent = "🔇 Music Off";
        isPlaying = false;
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.boxShadow = window.scrollY > 50 
        ? '0 2px 10px rgba(0,0,0,0.2)' 
        : 'none';
});
