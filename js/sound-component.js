AFRAME.registerComponent('audiohandler', {
   init:function() {
     let playing = false;
     let audio = document.querySelectorAll('[sound]');
      this.el.addEventListener('click', () => {
         if(!playing) {
            let entity = document.querySelectorAll('[sound]');
            for (let item of entity) {
            item.components.sound.playSound();
            }
         //   audio.components.sound.play();
         } else {
            let entity = document.querySelectorAll('[sound]');
            for (let item of entity) {
            item.components.sound.pauseSound();
            }
         //   audio.components.sound.pause();
         //   audio.currentTime = 0;
         }
         playing = !playing;
     });
  }
})