export function eyeLogic() {
    const eyes = document.querySelectorAll('.eye-sight'),
        eyeBalls = document.querySelectorAll('.eye-ball'),
        allEyelashes = document.querySelectorAll('.eyelash')
    let lock = 1,
        ini = 0;

    eyeBalls.forEach(pupil => {
        const pupilDOM = pupil.getBoundingClientRect();

        setInterval(() => {
            if (lock == 0 && ini == 1) {
                const randomX = Math.random() * innerWidth / innerWidth * 100,
                    randomY = (Math.random() * innerHeight / innerHeight * 100) - 10
                pupil.style.left = `calc(${randomX}% - ${pupilDOM.width / 2}px)`;
                pupil.style.top = `calc(${randomY}% + ${pupilDOM.height / 4}px)`;
                pupil.style.backgroundColor = 'rgb(123, 215, 252)';
            }
        }, Math.random() * 2000 + 4000)
    })

    eyes.forEach(eye => {
        const eyelash = eye.querySelector('.eyelash'),
            blinker = Math.random() * 3000 + 5000,
            bottom = eye.querySelector('.bottom')

        setInterval(() => {
            if (lock == 0 && ini == 1) {
                bottom.style.height = `100%`;
                eyelash.style.height = `100%`;
                setTimeout(() => {
                    eyelash.style.height = '15%'
                    bottom.style.height = '10%';
                }, 200)
            }
        }, blinker);
    });

    document.addEventListener('mousemove', e => {
        const cursorX = e.clientX / innerWidth * 100,
            cursorY = e.clientY / innerHeight * 100

        eyeBalls.forEach(pupil => {
            const pupilDOM = pupil.getBoundingClientRect();
            pupil.style.left = `calc(${cursorX}% - ${pupilDOM.width / 2}px)`;
            pupil.style.top = `calc(${cursorY}%)`;

            if (e.target.matches('#a *') && ini == 1) {
                pupil.style.background = 'rgba(217, 130, 252, 0.74)';
                allEyelashes.forEach(eyelash => eyelash.style.height = '5%')
                lock = 1;
            }
            else if (e.target.matches('#b *') && ini == 1) {
                pupil.style.background = 'rgba(158, 158, 158, 0.74)';
                allEyelashes.forEach(eyelash => eyelash.style.height = '5%')
                lock = 1;
            }
            else if (e.target.matches('#c *') && ini == 1) {
                pupil.style.background = 'rgba(252, 123, 123, 0.74)';
                allEyelashes.forEach(eyelash => eyelash.style.height = '5%')
                lock = 1;
            }
            else if (e.target.matches('#d *') && ini == 1) {
                pupil.style.background = 'rgba(91, 116, 255, 0.74)';
                allEyelashes.forEach(eyelash => eyelash.style.height = '5%')
                lock = 1;
            }
            else if (e.target.matches('#e *') && ini == 1) {
                pupil.style.background = 'rgba(248, 165, 110, 0.74)';
                allEyelashes.forEach(eyelash => eyelash.style.height = '5%')
                lock = 1;
            }
            else lock = 0

        });

        if (e.target.matches('.eye-sight')) {
            lock = 1
            e.target.style.transition = 'ease .3s';
            e.target.children[0].style.height = '20%';
            e.target.children[2].style.height = '35%';
            e.target.children[1].children[0].style.backgroundColor = 'red';
        }
    });

    document.addEventListener('click', e => {
        if (e.target.matches('.btn-eye-ball')) ini = 1;
    });

    // %
}