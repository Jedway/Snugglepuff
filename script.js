const text = "Hi baybeee\nHow's my Snugglepuff?\n📅\nTikTok tells me we've been talking since July 4th\niMessage tells me June 18th\nSnapchat tells me June 8th\nRegardless, I am very sure its June 8th 😌\nIts been 206 days ⏰\nThat makes it\n8 months, 23 days and 14 hours since I've met you and I have definitely fallen in love 🧎🏽‍♂️";

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
