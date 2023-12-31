const text = "🧍🏽‍♂️\nI understand that I've postponed or seemed incompetent on a number of essential things that should have been done by me as is needed.\nYou've held out on a number of things for me by being 'understanding' and I'm really grateful\nI feel comfy when I'm talking to you and it makes me think about the number of things I could possibly do to make your life better. 😤\nI know that this has been due for a while now but I sat down and thought about a lot of things especially for the fact that I'd attempted this proposal different times and they all failed\nSo I decided to keep things simple with what I know how to do best 👨🏽‍💻\nAs for the timing, I held out and chose this day specifically with the intention that we properly start this coming new year on the basis of our relationship on a fresh note and defined intentions. 🦦\nI apologize for how I may have acted in the past and my different misbehaviors and I sincerely promise to realign and do everything proper for us to work out. 🧍🏽‍♂️";

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
