window.addEventListener('load', function () {
    const sections = document.querySelectorAll('section');
    const bgMusic = document.getElementById('bg-music');

    function revealSection() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight / 1.3;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    }

    // Initial call
    revealSection();

    // Add scroll event listener
    window.addEventListener('scroll', function () {
        revealSection();
        
        // Play the music if it is paused
        if (bgMusic.paused) {
            bgMusic.play().catch(error => {
                console.log("Autoplay failed: ", error);
            });
        }
    });

    // Handle page visibility change
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            // Pause the music when the page is hidden
            bgMusic.pause();
        } else {
            // Resume the music when the page becomes visible
            bgMusic.play().catch(error => {
                console.log("Autoplay failed: ", error);
            });
        }
    });
});
