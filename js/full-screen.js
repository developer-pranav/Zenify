function fullScreen() {
	var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
		(document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
		(document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
		(document.msFullscreenElement && document.msFullscreenElement !== null);
    const btn = document.getElementById('full-btn');

	var docElm = document.documentElement;
	if (!isInFullScreen) {
		if (docElm.requestFullscreen) {
			docElm.requestFullscreen();
		} else if (docElm.mozRequestFullScreen) {
			docElm.mozRequestFullScreen();
		} else if (docElm.webkitRequestFullScreen) {
			docElm.webkitRequestFullScreen();
		} else if (docElm.msRequestFullscreen) {
			docElm.msRequestFullscreen();
		}
        btn.classList.replace('fa-expand','fa-compress')
	} else {
		if (docElm.exitFullscreen) {
			docElm.exitFullscreen();
		} else if (docElm.webkitExitFullscreen) {
			docElm.webkitExitFullscreen();
		} else if (docElm.mozCancelFullScreen) {
			docElm.mozCancelFullScreen();
		} else if (docElm.msExitFullscreen) {
			docElm.msExitFullscreen();
		} else{
            alert('Exit Fullscreen using Esc Key');
        }
        btn.classList.replace('fa-compress','fa-expand')
	}
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'F2') {
        event.preventDefault();
        fullScreen();
    }
});
