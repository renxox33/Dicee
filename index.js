let roll = function(){

  let player1score = Math.floor(Math.random()*6 + 1);
  let player2score = Math.floor(Math.random()*6 + 1);

  // document.getElementById('playerOneScore').innerHTML = player1score;
  // document.getElementById('playerTwoScore').innerHTML = player2score;

  let player1dice;
  let player2dice;

  switch (player1score) {
    case 1: player1dice = 'dice1'; break;
    case 2: player1dice = 'dice2'; break;
    case 3: player1dice = 'dice3'; break;
    case 4: player1dice = 'dice4'; break;
    case 5: player1dice = 'dice5'; break;
    case 6: player1dice = 'dice6'; break;
      break;
    default:
  }

  switch (player2score) {
    case 1: player2dice = 'dice1'; break;
    case 2: player2dice = 'dice2'; break;
    case 3: player2dice = 'dice3'; break;
    case 4: player2dice = 'dice4'; break;
    case 5: player2dice = 'dice5'; break;
    case 6: player2dice = 'dice6'; break;
      break;
    default:
  }

  document.getElementById('player1dice').setAttribute('class',player1dice);
  document.getElementById('player2dice').setAttribute('class',player2dice);

  if(player1score == player2score)
    document.querySelector('h1').textContent = 'Its a draw. Roll again !';
  else{
    let winner = player1score > player2score? 'Player 1': 'Player 2';
    document.querySelector('h1').textContent = winner + ' Wins !';
  }
}

document.getElementById('rollButton').setAttribute('onclick','roll()');
