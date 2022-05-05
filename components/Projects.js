import { createProjectCard } from "../utils/createProjectCard.js";
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
        'https://daniteno.000webhostapp.com/project-folder/eshop/index.html', 
        'https://github.com/DaniTeno/eshop--portfolio', 
        '../assets/eshop-misc.jpg'
    ),
    new ProjectCard(
        'Poke-Memory', 
        'Memory game made using the API from the site pokeapi.co', 
        'https://daniteno.000webhostapp.com/project-folder/memory-game/game.html', 
        'https://daniteno.000webhostapp.com/undefined', 
        '../assets/memory-misc.jpg'
    ),
    new ProjectCard(
        'Block App', 
        'Simple note-block app using the local storage to save the notes', 
        'https://daniteno.000webhostapp.com/project-folder/note-block-app/note-app.html', 
        'https://daniteno.000webhostapp.com/undefined', 
        '../assets/note-bloc-misc.jpg'
    ),
];

listOfProjects.forEach(el => {
    ProjectsContainer.insertAdjacentElement('beforeend', createProjectCard(el));
});

ProjectsSection.appendChild(ProjectsContainer)

export default ProjectsSection;