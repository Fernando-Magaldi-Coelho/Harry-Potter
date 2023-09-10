  //CHEKBOX

  document.addEventListener("DOMContentLoaded", function () {
    const chk = document.getElementById('checkbox');
    const bolhas = document.querySelector('.bolhas');
    const imgFundo = document.querySelector('.fundinho');
    const patronoSrc = './assents/img/Mal.jpg';

    chk.addEventListener('change', () => {
        document.body.classList.toggle('Patrono');
        bolhas.classList.toggle('Patrono');
        
        imgFundo.classList.add('fade-out'); // Aplica a classe para iniciar a transição

        // Troca da imagem
        setTimeout(() => {
            if (document.body.classList.contains('Patrono')) {
                imgFundo.src = patronoSrc;
            } else {
                imgFundo.src = './assents/img/Bem.jpg';
            }
            imgFundo.classList.remove('fade-out'); // Remove a classe após a troca da imagem
        }, 300); // Tempo correspondente à duração da transição (milissegundos)
    });
});



//OPEN NAVBAR


const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});








//Musica

document.addEventListener("DOMContentLoaded", function () {
  const musica = document.getElementById('musica');

  // Função para reproduzir a música
  function playMusica() {
      musica.play();
      document.removeEventListener('mousemove', playMusica); // Remove o evento após o primeiro disparo
  }

  // Adiciona o ouvinte para o evento 'mousemove' no corpo da página
  document.body.addEventListener('mousemove', playMusica);
});






  



// NAV BAR
const navbar = document.querySelector('.nav_bar');
    const MobileNavbar = document.querySelector('.navbar_mobile');
    const button = document.querySelector('.barra');
    const mobileLinks = document.querySelectorAll('.mobile_links a');

    button.addEventListener('click', function(){
        MobileNavbar.classList.toggle('active');
    });

window.addEventListener('scroll', function(){
    if (this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        MobileNavbar.classList.remove('active');
    });
});


imageContainers.forEach(container => {
    container.addEventListener('click', () => {
      container.classList.toggle('active');
    });
  });
  

  
  
  // Animar o scroll até o alvo
  
  const menuItems = document.querySelectorAll(' .navbar__links a, .btn, .mobile__links a[href^="#"]');
  
  function getScrollTopByHref(element) {
      const id = element.getAttribute('href');
      return document.querySelector(id).offsetTop;
  }
  
  function scrollToPosition(to) {
    smoothScrollTo(0, to);
  }
  
  function scrollToIdOnClick(event) {
      event.preventDefault();
      const to = getScrollTopByHref(event.currentTarget) - 160;
      scrollToPosition(to);
  }
  
  menuItems.forEach(item => {
      item.addEventListener('click', scrollToIdOnClick);
  });
  
  
  /**
   * Smooth scroll animation
   * @param {int} endX: destination x coordinate
   * @param {int) endY: destination y coordinate
   * @param {int} duration: animation duration in ms
   */
  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 100 / 60 fps
  };

  