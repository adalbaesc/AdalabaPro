// --- SCRIPT PARA ANIMAÇÃO DE PARTÍCULAS --- //
// Certifique-se de que o elemento com ID 'particles-js' existe no seu HTML.
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 50, "density": { "enable": true, "value_area": 800 }},
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.2, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false }},
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#4A5568", "opacity": 0.2, "width": 1},
            "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out"}
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "repulse": { "distance": 100, "duration": 0.4 },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });
}


// --- SCRIPT PARA ANIMAÇÃO DE SCROLL (REVEAL) --- //
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { 
    threshold: 0.1 // A animação começa quando 10% do elemento está visível
});

// Aplica o observador a todos os elementos com a classe .reveal
document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});


// --- SCRIPT PARA ANIMAÇÃO DO FAQ (SE EXISTIR NA PÁGINA) --- //
document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('toggle', (event) => {
        const summary = detail.querySelector('summary span');
        // Verifica se o span existe antes de tentar modificar
        if (summary) {
            if (detail.open) {
                summary.style.transform = 'rotate(45deg)';
            } else {
                summary.style.transform = 'rotate(0deg)';
            }
        }
    });
});