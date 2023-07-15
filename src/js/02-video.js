
import Player from '@vimeo/player'
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

     player.on('play', function() {
         console.log('played the video!');
     });

     player.getVideoTitle().then(function(title) {
         console.log('title:', title);
     });

 // ===== отслеживать событие timeupdate====
const onPlay = function (data) {
    // ==Сохраняй время воспроизведения в локальное хранилище.
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));

    console.log("videoplayer-current-time:", data.seconds, " seconds");
    console.log(data.seconds);

};
    
player.on('timeupdate',throttle(onPlay, 1000 ));

const currentTime = localStorage.getItem("videoplayer-current-time");
console.log(currentTime);

// ====возобновить воспроизведение с сохраненной позиции.
  
player.setCurrentTime(currentTime||0);




