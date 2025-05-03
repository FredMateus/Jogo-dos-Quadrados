const square = document.getElementById('square');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('game-area');
let score = 0;
let gameOver = false;

function randomPosition() {
  const maxX = gameArea.clientWidth - square.offsetWidth;
  const maxY = gameArea.clientHeight - square.offsetHeight;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
}

function showSquare() {
  if (!gameOver) {
    randomPosition();
    square.style.display = 'block';
  }
}

square.addEventListener('click', () => {
  if (gameOver) return;
  score++;
  scoreDisplay.textContent = score;
  
  if (score >= 10) {
    gameOver = true;
    square.style.display = 'none';
    showVictoryMessage();
  } else {
    showSquare();
  }
});

function showVictoryMessage() {
  const message = document.createElement('div');
  message.classList.add('victory');
  message.innerHTML = '<h2>🎉 Você Venceu! 🎉</h2>';
  document.body.appendChild(message);
}

setInterval(showSquare, 1000);