import { createNode } from "../utils/functionDOM.js";
import { ProjectCard } from "./ProjectCard.js";
const ProjectsSection = createNode('section', 'Projects', 'projects');
const ProjectsContainer = createNode('nav', null, 'projects-container');
const listOfProjects = [
    new ProjectCard(
        'Postit',
        'Small app for posting notes using Node, Express and MongoDB, in vanilla Javascript',
        'https://tranquil-plains-23040.herokuapp.com/',
        'https://github.com/DaniTeno/postit-app',
        '../assets/postit-misc.jpg'
    ),
    new ProjectCard(
        'eShop', 
        'A simple eCommerce practice built using React', 
        'https://daniteno.000webhostapp.com/component/projects/project-folder/eshop/index.html', 
        'https://github.com/DaniTeno/eshop--portfolio', 
        '../assets/eshop-misc.jpg'
    ),
    new ProjectCard(
        'Poke-Memory', 
        'Memory game made using the API REST from the site pokeapi.co', 
        'https://daniteno.000webhostapp.com/component/projects/project-folder/memory-game/game.html', 
        'https://daniteno.000webhostapp.com/undefined', 
        '../assets/memory-misc.jpg'
    ),
    new ProjectCard(
        'Block App', 
        'Simple note-block app using the local storage to save the notes', 
        'https://daniteno.000webhostapp.com/component/projects/project-folder/note-block-app/note-app.html', 
        'https://daniteno.000webhostapp.com/undefined', 
        '../assets/note-bloc-misc.jpg'
    ),
];

const insertProjectCard = ({ title, git, url, img, msg }) => {
    let node = document.createElement('figure');
    let nodeId = title.toLowerCase().split(' ').join('-');
    node.classList.add('project-card');
    node.setAttribute('id', nodeId);
    node.innerHTML = `
        <h3>${title}</h3>
        <img src="${img}" alt="${title}-img"/>
        <figcaption>
            <p>${msg}</p>
            <nav>
                <a href="${url}" target="_blank" rel=noopener>Test</a>
                <a href="${git}" target="_blank" rel=noopener>Git</a>
            </nav>
        </figcaption>
    `;
    return node;
};

listOfProjects.forEach(el => {
    ProjectsContainer.insertAdjacentElement('beforeend', insertProjectCard(el));
});

ProjectsSection.appendChild(ProjectsContainer)

export default ProjectsSection;