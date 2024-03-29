var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}


//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


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
  
  



//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let java = document.getElementById("java");
crearBarra(java);
let css = document.getElementById("css");
crearBarra(css);
let ingles = document.getElementById("ingles");
crearBarra(ingles);
let sql = document.getElementById("sql");
crearBarra(sql);
let spring = document.getElementById("spring");
crearBarra(spring);
let cmas = document.getElementById("c++");
crearBarra(cmas);


let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 8, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 8, 1, intervalJavascript);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 6, 2, intervalJava);
        },100);
        const intervalSpring = setInterval(function(){
            pintarBarra(spring, 7, 3, intervalSpring);
        },100);
        const intervalCss = setInterval(function(){
            pintarBarra(css, 6, 4, intervalCss);
        },100);
        const intervalCmas = setInterval(function(){
            pintarBarra(cmas, 8, 5, intervalCmas);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 8, 6, intervalSql);
        },100);
        const intervalIngles = setInterval(function(){
            pintarBarra(ingles, 8, 7, intervalIngles);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#861111";
    }else{
        clearInterval(interval)
    }
}



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
    efectoHabilidades();
    scrollFunction();
}
