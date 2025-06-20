document.getElementById("loginBtn").addEventListener('click', function () {
    const whisper = new Audio('/static/audio/whisper-fluisteren-212192.mp3');
    const door = new Audio('/static/audio/closet-creak.mp3');

    
    door.play();

    const doors = document.getElementById('doorAnimation');
    if (doors) {
        doors.classList.add('open');
    }

    setTimeout(() => {
        whisper.play();
    }, 1500);

    setTimeout(() => {
        window.location.href = "/closet";
    }, 3500); 
});
