document.addEventListener('keyup', (event) => {
  if (event.key === "p") {
    const active = document.querySelector('#player1_race .active');
    active.classList.remove('active');
    active.nextElementSibling.classList.add('active');
    const finishLine = document.querySelector('#player1_race .finish');
    if (finishLine.classList.contains('active')) {
      alert('player 1 Won !');
    }
  } else if (event.key === "q") {
    const active = document.querySelector('#player2_race .active');
    active.classList.remove('active');
    active.nextElementSibling.classList.add('active');
    const finishLine = document.querySelector('#player2_race .finish');
    if (finishLine.classList.contains('active')) {
      alert('player 2 Won !');
    }
  }


  // Do something (callback)
});// TODO: write your code here

