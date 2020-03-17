var aAudio = new Audio('sounds/error.mp3');
var bAudio = new Audio('sounds/error.mp3');

function myAudioFunction(letter) {
  if (letter == 'a') {
    aAudio.play();
  } else if (letter == 'b') {
    bAudio.play();
  }
}
