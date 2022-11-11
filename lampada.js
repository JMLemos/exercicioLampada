
const on = document.getElementById ('on');
const off = document.getElementById ('off');
const lamp = document.getElementById ('lampdesl')

function lampLigada ()
{
    lamp.src = "./img/lampada-ligada.png";
}

function lampDesligada ()
{
    lamp.src = "./img/lampada-desligada.png";
    
}

on.addEventListener("click", lampLigada);
off.addEventListener("click", lampDesligada);





