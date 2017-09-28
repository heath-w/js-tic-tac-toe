
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
	console.log( 'takeSpace ', e );
	console.log( this ); 

	turn++;
	this.innerHTML = symbols[ turn % 2 ];
	this.removeEventListener( 'click', takeSpace );


}