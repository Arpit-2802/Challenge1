const box = document.getElementById('mybox');
const startButton = document.getElementById('start-button');

let boxP = { x: 0, y: 0 };

function startGame() {
  var element=document.getElementById('mybox')
  element.className='box';
  boxP = {
    x: (window.innerWidth - box.offsetWidth) / 2,
    y: (window.innerHeight - box.offsetHeight) / 2
  };
  updateBoxPosition();
  document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  switch (event.key) {
    case 'ArrowUp':
      boxP.y -= 10;
      break;
    case 'ArrowDown':
      boxP.y += 10;
      break;
    case 'ArrowLeft':
      boxP.x -= 10;
      break;
    case 'ArrowRight':
      boxP.x += 10;
      break;
  }

  updateBoxPosition();
}

function updateBoxPosition() {
  
  boxP.x = Math.max(0, Math.min(window.innerWidth - box.offsetWidth, boxP.x));
  boxP.y = Math.max(0, Math.min(window.innerHeight - box.offsetHeight, boxP.y));
  box.style.left = `${boxP.x}px`;
  box.style.top = `${boxP.y}px`;
}