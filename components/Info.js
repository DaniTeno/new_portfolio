import { createNode } from "../utils/functionDOM.js";
import Me from "./Me.js";
import HeaderButtons from "./HeaderButtons.js";
const Info = createNode('navmenu', null, 'header-info');

Info.appendChild(Me);
Info.appendChild(HeaderButtons);

export default Info;