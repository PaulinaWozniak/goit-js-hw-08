import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player")
const player = new Vimeo.Player(iframe);
const lSKey = "videoplayer-current-time";



player.on('timeupdate', throttle((data) => {
    localStorage.setItem(lSKey, data.seconds);
}, 1000));


function resumeTime() {
    let setTime = localStorage.getItem(lSKey);
    if (setTime) player.setCurrentTime(setTime).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'Error' :
                break;
            default:
                break;
        }
    });

    console.log(setTime);
}
resumeTime();