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