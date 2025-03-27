//for click
document.querySelectorAll(".drum").forEach(button=>{
  button.addEventListener("click",function (){
    playSound(button.innerHTML);
    anime(button.innerHTML);
  });
});
//for key press
document.addEventListener("keydown",function(event){
  playSound(event.key.toLowerCase());
  anime(event.key.toLowerCase());
});
//for animation
function anime(char){
  document.querySelector("."+char).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+char).classList.remove("pressed");
  },100);
}
function playSound(char){
  switch(char){
    case 'w':
    new Audio('sounds/tom-1.mp3').play();
    break;
  case 'a':
    new Audio('sounds/tom-2.mp3').play();
    break;
  case 's':
    new Audio('sounds/tom-3.mp3').play();
    break;
  case 'd':
    new Audio('sounds/tom-4.mp3').play();
    break;
  case 'j':
    new Audio('sounds/snare.mp3').play();
    break;
  case 'k':
    new Audio('sounds/crash.mp3').play();
    break;
  case 'l':
    new Audio('sounds/kick-bass.mp3').play();
    break;
  default:
    console.log(key);
  }
}