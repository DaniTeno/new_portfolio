import { $, createNode } from "../utils/functionDOM.js";

const Me = createNode('figure', null, 'me', 'header');

Me.innerHTML = `
    <div class="title">
        <p>Hi, I'm</p>
        <h1 class="name">Daniel Tenorio</h1>
        <p>Web Developer</p>
        <div class="container">
            <img src="../assets/me.jpg"/>
        </div>
        <div id="show-info"><p>CodeWars info</p><span></span></div>
    </div>
`;

export default Me
