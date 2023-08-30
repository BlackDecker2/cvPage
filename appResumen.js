const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu_visible');
});



document.addEventListener("DOMContentLoaded", function() {
  const readableElements = document.querySelectorAll("[data-readaloud]");
  const synth = window.speechSynthesis;
  let activeUtterance = null;
  let readerActive = false;

  function toggleReader() {
      readerActive = !readerActive;
      if (!readerActive && activeUtterance) {
          synth.cancel();
          activeUtterance = null;
      }

      const toggleButton = document.getElementById("toggleButton");
      toggleButton.style.backgroundColor = readerActive ? "green" : "red";
      toggleButton.textContent = readerActive ? "ON" : "OFF";
  }

  const toggleButton = document.getElementById("toggleButton");
  toggleButton.addEventListener("click", toggleReader);

  readableElements.forEach(element => {
      element.addEventListener("mouseover", function() {
          if (readerActive) {
              const textToRead = element.getAttribute("data-readaloud");
              activeUtterance = new SpeechSynthesisUtterance(textToRead);
              synth.speak(activeUtterance);
          }
      });

      element.addEventListener("mouseout", function() {
          if (activeUtterance) {
              synth.cancel();
              activeUtterance = null;
          }
      });
  });
});




// Muestra el botón después de desplazarse hacia abajo 20px

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
  // Desplaza suavemente hacia arriba al hacer clic en el botón
  function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
  }
  
  //detecto el scrolling del mouse para aplicar la animación de la barra
  window.onscroll = function(){
      scrollFunction();
  }