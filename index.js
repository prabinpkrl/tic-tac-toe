const cells = document.querySelectorAll('.cell');
const reset = document.querySelector('.reset');
const playerTurn = document.querySelector('.playerturn');
const msg = document.querySelector('.msg');
const newGame = document.querySelector('.newgame');
const newGameBtn = document.querySelector('.newgamebtn');

let turnX = true;
let count = 0;
playerTurn.innerHTML = "Player X's Turn";

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (turnX) {
      playerTurn.innerHTML = "Player O's Turn";
      cell.innerHTML = "X";
      turnX = false;
    }
    else {
      playerTurn.innerHTML = "Player X's Turn";
      cell.innerHTML = "O";
      turnX = true;
    }

    cell.disabled = true;
    count++;
    
    checkWinner();
    console.log(checkWinner());//undefined..how??
    

    if(!checkWinner() && count === 9){
      drawGame();
    }
  });
});

function drawGame() {
  playerTurn.innerHTML = "Play Again!";
  msg.innerHTML = "It's Draw Try Again";
  cells.disabled = true;
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  winPatterns.forEach((pattern) => {

    let position1 = cells[pattern[0]].innerHTML;
    let position2 = cells[pattern[1]].innerHTML;
    let position3 = cells[pattern[2]].innerHTML;

    if (position1 != '' && position2 != '' && position3 != '') {
      if (position1 === position2 && position2 === position3) {
        showWinMsg(position1);
        return true;
        
      }
    }

  });
}

function showWinMsg(winner) {
  playerTurn.innerHTML = "Congrulations";
  msg.innerHTML = `Winner is ${winner}`;
  cells.forEach((cell) => {
    cell.disabled = true;
  });
}

function resetBTn() {
  turnX = true;
  playerTurn.innerHTML = "Player X's Turn";
  cells.forEach((cell) => {
    cell.textContent = "";
    msg.innerHTML = '';
    cell.disabled = false;


  });
}
reset.addEventListener('click', resetBTn);


