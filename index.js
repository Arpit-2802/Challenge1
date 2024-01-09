const box = document.getElementById('mybox');
const startButton = document.getElementById('start-button');

let boxPosition = { x: 0, y: 0 };

function startGame() {
  var element=document.getElementById('mybox')
  element.className='box';
  boxPosition = {
    x: (window.innerWidth - box.offsetWidth) / 2,
    y: (window.innerHeight - box.offsetHeight) / 2
  };
  updateBoxPosition();
  document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  switch (event.key) {
    case 'ArrowUp':
      boxPosition.y -= 10;
      break;
    case 'ArrowDown':
      boxPosition.y += 10;
      break;
    case 'ArrowLeft':
      boxPosition.x -= 10;
      break;
    case 'ArrowRight':
      boxPosition.x += 10;
      break;
  }

  updateBoxPosition();
}

function updateBoxPosition() {
  
  boxPosition.x = Math.max(0, Math.min(window.innerWidth - box.offsetWidth, boxPosition.x));
  boxPosition.y = Math.max(0, Math.min(window.innerHeight - box.offsetHeight, boxPosition.y));

  // Update box position
  box.style.left = `${boxPosition.x}px`;
  box.style.top = `${boxPosition.y}px`;
}