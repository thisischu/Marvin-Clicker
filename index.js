let score = 0;
const scoreElement = document.getElementById('score');
const cookieElement = document.getElementById('cookie');


function updateScore() {
    if (score > 1){
        scoreElement.textContent = `${score} Marvins`;
    } else {
        scoreElement.textContent = `${score} Marvin`;
    }

}


function handleClick() {
  score++;
  updateScore();

  cookieElement.classList.add('shrink');
  
  setTimeout(() => {
    cookieElement.classList.remove('shrink');
  }, 100);
  
  const clickSound = document.getElementById('clickSound');
  clickSound.currentTime = 0; 
  clickSound.play();
  
}

cookieElement.addEventListener('click', handleClick);



