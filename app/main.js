
var restartButton = document.getElementById( 'restartButton' );
var spaces = document.getElementsByClassName( 'space' );
var notifications = document.getElementById( 'notification' );
var winnerMessage = document.getElementById( 'winnerMessage' );


var symbols = [ 'O', 'X' ];
var turn = 0;

// Waits for doc to load before doing things
document.onreadystatechange = function() {
	if ( document.readyState === 'interactive' ) {
		restartButton.onclick = startGame;
		startGame();
	}
};

function startGame() {
	console.log( 'startGame' );

	// Reset turn counter
	turn = 0;

	// Hide and clear winner notifications
	notifications.style.display = 'none';
	winnerMessage.innerHTML = '';

	// Clear board add click events to spaces
	for ( var i = 0; i < spaces.length; i++ ) {
		spaces[ i ].addEventListener( 'click', takeSpace );
		spaces[ i ].innerHTML = '';
	}
}

function takeSpace( e ) {
	console.log( 'takeSpace ' );
	
	turn++;
	var currentPlayer = symbols[ turn % 2 ];
	this.innerHTML = currentPlayer;
	this.removeEventListener( 'click', takeSpace );

	for ( var i = 0; i < wins.length; i++ ) {
		if ( checkForWin( wins[ i ] ) ) {
			for ( var j = 0; j < spaces.length; j++ ) {
				spaces[ j ].removeEventListener( 'click', takeSpace );
			}

			winnerMessage.innerHTML = currentPlayer + ' has won!';
			notifications.style.display = 'block';
		}
		else {
			if ( turn === 9 ) {
				winnerMessage.innerHTML = 'No one has won, please play again.';
				notifications.style.display = 'block';
			}
		}
	}
}

function checkForWin( winArray ) {
	console.log( 'checkForWin ' );

	return (
		spaces[ winArray[ 0 ] ].innerHTML !== '' &&
		spaces[ winArray[ 0 ] ].innerHTML === spaces[ winArray[ 1 ] ].innerHTML && 
		spaces[ winArray[ 1 ] ].innerHTML === spaces[ winArray[ 2 ] ].innerHTML
	);
}