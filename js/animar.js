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




function myFunction(x) {
    if (x.matches) { // If media query matches
        
    } else {
        window.addEventListener('scroll',mostrarscrool)
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes