import { $, createNode } from "../utils/functionDOM.js";
import AboutMeSection from "./AboutMe.js";
import { miscEye } from "./eye/misc-eye.js";
import Header from "./Header.js";
import { KataProfile } from "./KataProfile.js";
import ProjectsSection from "./Projects.js";

const body = $('body');
const main = createNode('main');

export const mainContent = async () => {
  body.appendChild(main);
  main.appendChild(Header);
  main.appendChild(AboutMeSection);
  main.appendChild(ProjectsSection);
  miscEye(Header);
  const { username, honor, codeChallenges } = await KataProfile();

  const imgContainer = $('.container')
  const modalTemplate = `
    <div class="modal hidden">
      <div>
        <p>Nickname:</p>
        <b>${username}</b>
      </div>
      <div>
        <p>Honor:</p>
        <b>${honor}</b>
      </div>
      <div>
        <p>Challenges Completed:</p>
        <b>${codeChallenges.totalCompleted}</b>
      </div>
    </div>
  `;
  Header.addEventListener('click', e => {
    const modal = $('.modal');
    if (e.target.matches('#show-info p')){
      modal.classList.toggle('hidden')
      console.log(e.target.textContent)
      if(e.target.textContent === 'CodeWars info') e.target.textContent = 'Hide'
      else e.target.textContent = 'CodeWars info'
    } 
  })
  imgContainer.insertAdjacentHTML('beforeend', modalTemplate)
}