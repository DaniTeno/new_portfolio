import { $, createNode } from "../utils/functionDOM.js";
import AboutMeSection from "./AboutMe.js";
import { miscEye } from "./eye/misc-eye.js";
import Header from "./Header.js";
import ProjectsSection from "./Projects.js";
const body = $('body');
const main = createNode('main');

export const mainContent = () => {
    body.appendChild(main);
    main.appendChild(Header);
    main.appendChild(AboutMeSection);
    main.appendChild(ProjectsSection);
    miscEye(Header);
}