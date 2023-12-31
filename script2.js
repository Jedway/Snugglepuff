const text = "📝\nEver since you came into my life, I have been one thing\nAnd that is very happy\nI have been very happy 😄\nI was really lonely before I met you and things seemed low key falling apart especially with the different issues I had while in CU\nBut coming back to my hostel every evening to have those hour long FaceTime and video-call sessions really did something to me ☺️\nYou're amazing\nYou're beautiful in and out 🫵🏽\nAnd you make me want to move the world for you";

let index = 0;
let isMobile = window.innerWidth <= 600;

function updateText() {
  document.getElementById('text').innerText = text.slice(0, index);

  if (index < text.length) {
    index++;
    setTimeout(updateText, isMobile ? 50 : 100);
  }
}

updateText();
