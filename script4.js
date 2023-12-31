const text = "What I'm trying to say is I love you 💕\n \nAnd........ ⬇️";

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
