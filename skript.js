const screen = document.querySelectof(.'screen');
const ship = document.querySelectof(.'spaceship');
const statBtn = document.getElementById('start');
const ScoreElement = document.getElementById('score');
const MessageElement = document.getElementById('message');

let score = 0;
let shipPosition = 50;
const tags = ['<p>', '<br>', '<div>', '<img>', '🚕', '<div>'];

document.addEventListener('keydown', function(e) {
	if (e.key==='ArrowLeft' && shipPosition > 5)
{
			shipPosition -=5;
	}
	if (e.key === 'ArrowRight' && shipPosition < 95) {
		shipPosition+=5;
	}
	ship.style.left = shipPosition + '%';
});
