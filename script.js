function abrir1(){
    document.getElementById("vent1").style.display="block";
}

function close1(){
    document.getElementById("vent1").style.display="none";
}

/*boton*/
document.getElementById("bot1").addEventListener("click", scrollUp);
function bot1(){
    var currentScroll = document.documentElement.scrollTop;
    
    if(currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll- (currentScroll / 20) );
    }
}


