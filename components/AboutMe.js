import { $, $$, createNode } from "../utils/functionDOM.js";
const AboutMeSection = createNode('section', 'About', 'about-me');
const bioContent = createNode('div', undefined, 'bio', 'my-info');
const hobbiesContent = createNode('div', undefined, 'hobbies', 'my-info');
const likesContent = createNode('div', undefined, 'likes', 'my-info');
const infoNav = createNode('nav', null, 'info-nav');
const infoDotNav = createNode('div', undefined, 'info-dot');
const leftBtn = createNode('div', '<', 'left-dot', 'btn')
const rigthBtn = createNode('div', '>', 'rigth-dot', 'btn')
const listOfInfo = [
    bioContent,
    hobbiesContent,
    likesContent,
];

bioContent.innerHTML = `
    <p class="title">Me:</p>
    <div class="content">
        <p>I am a self taught software development learner.</p>
        <p>Always practicing and focusing on getting better everyday.</p>
        <p>Trying my best to learn more technologies but with my heart linked to Javascript <3</p>
        <p >Currently, I have knowledge in: <span id="techs"></span></p>
        <div class="icon-container">
            <img src="../assets/icons8-javascript-48.png" class="icon" alt="Javascript">
            <img src="../assets/icons8-typescript-48.png" class="icon" alt="Typescript">
            <img src="../assets/icons8-node-js-48.png" class="icon" alt="Node Js">
            <img src="../assets/icons8-react-40.png" class="icon" alt="React">
            <img src="../assets/icons8-mongodb-48.png" class="icon" alt="MongoDB">
            <img src="../assets/icons8-git-48.png" class="icon" alt="Git">
            <img src="../assets/icons8-python-48.png" class="icon" alt="Python">
            <img src="../assets/icons8-php-48.png" class="icon" alt="PHP">
            <img src="../assets/icons8-mysql-logo-48.png" class="icon" alt="MySQL">
        </div>
    </div>
`;

hobbiesContent.innerHTML = `
    <p class="title">My Hobbies:</p>
    <div class="content">
        <p>I really like videogames, especially those that invite you to think and develop strategies.</p>
        <p>Some of them are: <i>Minecraft, Factorio, League of Legends, Dark Souls, SimCity 4, They Are Billions, Loop Hero...</i></p>
        <p>Also part of my daily hobbies is programming (since I discovered it) because I love problem solving and the possibility of creating what imagination (and knowledge) allows me to do. I spend part of my free time doing katas from <a href="https://codewars.com" target="_blank" rel=noopener class="link">codewars</a>.</p>
    </div>
`;

likesContent.innerHTML = `
    <p class="title">What I like:</p>
    <div class="content">
        <p>I love music, especially lofi and synthwave, but in general I like electronic and instrumental music.</p>
        <p>I am also a fan of photography, on my <a href="https://www.instagram.com/phantasma.cam/" target="_blank" rel=noopener class="link">instagram</a> there are some of the photos that I liked the most</p>
        <p>I also love to cook, (besides food), so much so that I have a degree in 'professional haute cuisine'.</p>
        <p>I also exercise because I like a healthy life, and part of keeping my brain healthy is having a healthy body, and continuing to do what I love.</p>
    </div>
`;

listOfInfo.forEach((el, i) => {
    let dot = createNode('div')
    dot.setAttribute('data-pos', i)
    dot.classList.add('dot')
    // el.setAttribute('pos', i)
    infoNav.appendChild(el);
    infoDotNav.appendChild(dot)
    if (i === 0) {
        el.classList.add('visible')
        dot.classList.add('active')
    }
});

const changeDisplayedInfo = (pos, target) => {
    $('.active').classList.remove('active');
    target.classList.add('active');
    $('.visible').classList.remove('visible');
    $$('.my-info')[pos].classList.add('visible');
}

AboutMeSection.addEventListener('click', e => {
    let dotPos = parseInt($('.active').dataset.pos);

    if (Array.from(e.target.classList).includes('dot')) {
        let nextDotPos = e.target.dataset.pos;
        changeDisplayedInfo(nextDotPos, e.target)
    }
    if (e.target == leftBtn || e.target.matches('#left-dot *')) {
        (dotPos === 0) ? dotPos = $$('.dot').length - 1 : dotPos--;
        changeDisplayedInfo(dotPos, $$('.dot')[dotPos])
    }
    if (e.target == rigthBtn || e.target.matches('#rigth-dot *')) {
        (dotPos === $$('.dot').length - 1) ? dotPos = 0 : dotPos++;
        changeDisplayedInfo(dotPos, $$('.dot')[dotPos])
    }
});

AboutMeSection.appendChild(infoNav);
AboutMeSection.appendChild(infoDotNav);
AboutMeSection.appendChild(leftBtn);
AboutMeSection.appendChild(rigthBtn);

AboutMeSection.addEventListener('mouseover', (e) => {
    const techsText = $('#techs', AboutMeSection)
    if (e.target.matches('.icon')) {
        techsText.style.opacity = '1';
        techsText.innerHTML = `${e.target.alt}`;
    }
    else {
        techsText.style.opacity = '0';
    }
});

export default AboutMeSection;