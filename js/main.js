var accordion = document.querySelectorAll(".accordion");

function accordionLogic(e){
  let accordion = e.currentTarget
  if(accordion.classList.contains("selected"))
    accordion.classList.remove("selected")
  else  
    accordion.classList.add("selected");
}

accordion.forEach( x => {
  x.addEventListener('click', accordionLogic);
})