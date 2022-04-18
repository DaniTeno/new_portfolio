import { createNode } from "../utils/functionDOM.js";

const Me = createNode('figure', null, 'me', 'header');
Me.innerHTML = `
    <div class="title">
        <p>Hi, I'm</p>
        <h1 class="name">Daniel Tenorio</h1>
        <p>Web Developer</p>
        <img src="../assets/me.jpg"/>
    </div>
`;

export default Me
