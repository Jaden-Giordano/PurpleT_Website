function resize() {
	var main = document.getElementById('main');
	
	main.style.width = window.innerWidth + 'px';
	main.style.height = window.innerHeight + 'px';
};

window.onload = resize;
window.onresize = resize;
