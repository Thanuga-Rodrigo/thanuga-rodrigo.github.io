    document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal({
                reset: true,
                distance: '80px',
                duration: 1000,
                delay: 200
            });
            ScrollReveal().reveal('.header-text p', { origin: 'top' });
            ScrollReveal().reveal('.header-text h1', { origin: 'left' });
        });

        const typed = new Typed('.multiple-text', {
            strings: ['Full stack Developer', 'Designer', 'Youtuber', 'Vlogger', 'Gamer', 'Blogger'],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true
        });

        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab (tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add ("active-tab"); I
        }

