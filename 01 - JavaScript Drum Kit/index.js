console.log("hello")

function playSound(event){
  const audio = document.querySelector(`audio[data-key="${event.key}"]`);
  const button = document.querySelector(`[data-key="${event.key}"]`);
  button.classList.add("playing")

  if (!audio) return;
  audio.currentTime = 0; // rewind to the start
  audio.play();
};

// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return;
//   this.classList.remove('playing');
// }
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
function removeAnimation(event) {
  const button = document.querySelector(`[data-key="${event.key}"]`);
  button.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeAnimation);
