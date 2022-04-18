import { eye } from "./eye.js";
import { eyeLogic } from "./eyeLogic.js";
import { opener } from "./opener.js";


export function miscEye(targetNode){
     const d = document,
          eyeSection = d.createElement('div')

     eyeSection.classList.add('eye-section');
     eyeSection.insertAdjacentElement('beforeend', opener());
     eyeSection.insertAdjacentElement('beforeend', eye());
     targetNode.appendChild(eyeSection);
     eyeLogic();
}