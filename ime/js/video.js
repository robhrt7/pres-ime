/*
	Video plugin for Shower, HTML presentation engine (github.com/shower/shower)

	Browser support: latest versions of all major browsers

	@author Robert Haritonov <r@rhr.me>
	@twitter @operatino
*/

//TODO: rerun video if it finished playback or next slide tick
//TODO: check preload on android mobile devices


/*

    Utils

 */

var select = function(query) {
    return document.querySelectorAll(query);
};

//To get easy forEach for querySelectorAll https://gist.github.com/DavidBruant/1016007
NodeList.prototype.forEach = Array.prototype.forEach;



/*

    Core

 */

var showerCssInit = 0;

var startVideo = function(){
    //pause all videos first
    var allVideos = select('video');
    allVideos.forEach(function(el){
        el.pause();

		if (isMobile) { el.parentNode.style.display = 'none';}
    });



	//Fetch all videos on current slide
    var activeVideos = select('.slide.active video');
    activeVideos.forEach(function(el){
        var play = function() {
			//Resetting video
            el.currentTime = 0;
            el.play();
        };

		var prepareForPlaying = function(){
			//For triggering video load on iPad
			el.load();
			el.play();

			//And then pause till video fully downloaded
			el.pause();

			//TODO: add loader

			//Waiting till video fully loads
			el.addEventListener('canplaythrough', play, false);
		};

        if(el && el.currentTime !== undefined) {
            if (el.readyState !== 4) { //HAVE_ENOUGH_DATA
                console.log('not ready');

				if(isMobile && showerCssInit === 0) {
					//TODO: add loader
					//TODO: on first page visit with video, add play button

					//initing video after first Shower CSS init, to avoid CPU load bottleneck
					setTimeout(function(){
						//TODO: move this init to Full mode check
						showerCssInit = 1;

						el.parentNode.style.display = 'block';

						prepareForPlaying();
					}, 700);

				} else {

					//Init video for mobile devices
					if (isMobile) { el.parentNode.style.display = 'block';}

					prepareForPlaying();
				}

            } else {
                console.log('ready');

				if (isMobile) { el.parentNode.style.display = 'block';}

                play();
            }
        }
    });
};

var startGif = function(){
    var activeSlideGifs = select('.slide.active .gif'),
        allGifs = select('.slide .gif');

    if( activeSlideGifs.length !== 0) {

        activeSlideGifs.forEach(function(item){
            if (item.classList.contains('real')) {
                item.style.display = 'block';
            } else {
                item.style.display  = 'none';
            }
        });

    } else {

        allGifs.forEach(function(item){
            if (item.classList.contains('real')) {
                item.style.display  = 'none';
            } else {
                item.style.display  = 'block';
            }
        });
    }
};



/*

    Init

 */

// Listen for the event.
// TODO: wait for proper API implementation in Shower
document.addEventListener('switchSlide', function (e) {
    startVideo();
    startGif();
}, false);