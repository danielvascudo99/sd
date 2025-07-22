// Efeito de digitação para a mensagem de amor
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Efeito de coração pulsante
function createHeartEffect() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'heartFloat 3s ease-out forwards';
    
    // Posição aleatória
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(heart);
    
    // Remove o coração após a animação
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 3000);
}

// Adiciona CSS para animação do coração
const heartStyle = document.createElement('style');
heartStyle.textContent = `
    @keyframes heartFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartStyle);

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const loveMessage = document.querySelector('.love-message h2');
    
    // Efeito de digitação para "Eu te amo"
    setTimeout(() => {
        typeWriter(loveMessage, 'Eu te amo bb', 150);
    }, 2000);
    
    // Cria corações aleatoriamente
    setInterval(createHeartEffect, 2000);
    
    // Efeito de clique na foto
    const photo = document.getElementById('main-photo');
    if (photo) {
        // Efeito quando a foto carrega
        photo.addEventListener('load', function() {
            this.style.animation = 'photoGlow 2s ease-out';
        });
        
        photo.addEventListener('click', function() {
            // Cria vários corações quando clica na foto
            for (let i = 0; i < 8; i++) {
                setTimeout(createHeartEffect, i * 150);
            }
            
            // Efeito de brilho ao clicar
            this.style.animation = 'photoGlow 0.5s ease-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    }
    
    // Efeito de hover nos nomes
    const names = document.querySelector('.names h1');
    if (names) {
        names.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        names.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// Adiciona CSS para animação de brilho da foto
const photoGlowStyle = document.createElement('style');
photoGlowStyle.textContent = `
    @keyframes photoGlow {
        0% {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        50% {
            box-shadow: 0 20px 40px rgba(255, 105, 180, 0.6);
        }
        100% {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
    }
`;
document.head.appendChild(photoGlowStyle);

// Efeito de parallax suave no scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.container');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});
