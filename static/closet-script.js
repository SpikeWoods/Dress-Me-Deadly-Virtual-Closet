document.addEventListener("DOMContentLoaded", function () {
    const whisper = new Audio('/static/audio/whisper-fluisteren-212192.mp3');
    const heelsSound = new Audio('/static/audio/walking-in-heels-95578.mp3');
    const toast = document.getElementById('toast');

    
    document.querySelectorAll('.fav-btn').forEach(btn => {
        const item = btn.closest(".closet-item");
        const itemId = item.getAttribute("data-id");

        
        if (localStorage.getItem(itemId) === "true") {
            btn.classList.add("favorited");
            btn.innerHTML = '\u2764'; 
        } else {
            btn.innerHTML = '\u2661'; 
        }

        
        btn.addEventListener("click", () => {
            const isFav = btn.classList.toggle("favorited");
            btn.innerHTML = isFav ? '\u2764' : '\u2661';
            localStorage.setItem(itemId, isFav);

        
            heelsSound.currentTime = 0;
            heelsSound.play();

            
            toast.textContent = isFav ? '✨Added to favorites! 💖' : 'Removed from favorites';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 1500);
        });
    });


    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(){
            whisper.currentTime = 0;
            heelsSound.currentTime = 0;

            whisper.play();

            setTimeout(() => {
                heelsSound.play();
            }, 3000);

            toast.textContent = '✨That look is yours, hun! 🔥';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);

            const item = this.closest('.closet-item');
            item.style.transform = 'scale(1.1)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 500);
        });
    });

    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.documentElement.style.setProperty('--mouse-x', x);
        document.documentElement.style.setProperty('--mouse-y', y);
    });
});
