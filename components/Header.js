import { $, createNode } from "../utils/functionDOM.js";
import Info from "./Info.js";

const Header = createNode('nav', null, 'head-section');
Header.appendChild(Info);

export default Header;
