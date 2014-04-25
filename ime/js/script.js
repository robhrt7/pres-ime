/*
Video plugin
*/

//TODO: write Shower plugin for gifs and videos
//TODO: add play controls and shortcuts
//TODO: rerun video if it finished playback or next slide tick
//TODO: dont preload on mobile

var startVideo = function(){
    //pause all video first
    $('video').each(function(){
        this.pause();
    });

    if(isMobile) {
        //do something with mobile
    } else {
        var el = $('.slide.active video')[0];

        var play = function() {
            el.currentTime = 0;
            el.play();
        };

        if(el && el.currentTime !== undefined) {
            if (el.readyState === 0) {
                el.addEventListener('loadeddata', function () {
                    play();
                }, false);
            } else {
                play();
            }
        }
    }
};

var startGif = function(){
    if( $('.slide.active .gif').length !== 0) {

        $('.slide.active .gif.real').show();
        $('.slide.active .gif.stub').hide();
    } else {
        $('.slide .gif.real').hide();
        $('.slide .gif.stub').show();
    }
};

//First start
setTimeout(function(){
    startVideo();
    startGif();
}, 1);

//Listen navigation
window.addEventListener('popstate', function(event) {
    //listening after DOM change
    setTimeout(function(){
        startVideo();
        startGif();
    }, 1);
});