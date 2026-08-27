// ===== SET YOUR SECRET WORD HERE =====
const SECRET_KEY = "Gunavathi akka"; // change this to any one word you like

function checkKey() {
  const input = document.getElementById('keyInput').value.trim().toLowerCase();
  const error = document.getElementById('errorMsg');

  if (input === SECRET_KEY.toLowerCase()) {
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('surpriseScreen').style.display = 'block';
    startEffects();
  } else {
    error.textContent = "❌ Oops! That's not the right word. Try again 💭";
  }
}

// allow Enter key to submit
document.getElementById('keyInput').addEventListener('keyup', function(e) {
  if (e.key === "Enter") checkKey();
});

function startEffects() {
  // Hearts
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['❤️','💖','💕','💗','💓'][Math.floor(Math.random()*5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (16 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }, 400);

  // Butterflies
  setInterval(() => {
    const butterfly = document.createElement('div');
    butterfly.classList.add('butterfly');
    butterfly.innerHTML = '🦋';
    butterfly.style.left = Math.random() * 100 + 'vw';
    butterfly.style.fontSize = (18 + Math.random() * 16) + 'px';
    butterfly.style.animationDuration = (6 + Math.random() * 4) + 's';
    document.body.appendChild(butterfly);
    setTimeout(() => butterfly.remove(), 10000);
  }, 900);
}
