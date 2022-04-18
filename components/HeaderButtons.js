import { createNode } from "../utils/functionDOM.js";
const HeaderButtons = createNode('nav', null, 'header-buttons', 'header');

HeaderButtons.innerHTML = `
    <a href="#about-me" id="a">
        <p>About Me</p>
        <div></div>
    </a>
    <a href="#projects" id="b">
        <p>Projects</p>
        <div></div>
    </a>
    <a href="https://github.com/DaniTeno" id="c" target="_blank" rel=noopener>
        <p>Github</p>
        <div></div>
    </a>   
    <a href="https://www.linkedin.com/in/daniel-tenorio-sotillet-79b484216/" id="d" target="_blank" rel=noopener>
        <p>LinkedIn</p>
        <div></div>
    </a>
    <a href="https://www.instagram.com/phantasma.cam/" id="e" target="_blank" rel=noopener>
        <p>Instagram</p>
        <div></div>
    </a>
`;

export default HeaderButtons