let animado=document.querySelectorAll(".animado");
function mostrarscrool(){
    let scrooltop=document.documentElement.scrollTop;
    for(var i=0;i<animado.length;i++){
        let alturaanimasdo=animado[i].offsetTop;
        if(alturaanimasdo - 600 < scrooltop){
            animado[i].style.opacity=1;
            animado[i].classList.add("mostraanimado")
        }
    }
}
window.addEventListener('scroll',mostrarscrool