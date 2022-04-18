export const $ = (query) => document.querySelector(query)
export const $$ = (query) => document.querySelectorAll(query)
export const $id = (id) => document.getElementById(id)

export const createNode = (nodeType, title = undefined, id = undefined, className = undefined) => {
    let node = document.createElement(nodeType);
    if (title) {
        let nodeTitle = document.createElement('h2');
        nodeTitle.textContent = title;
        node.appendChild(nodeTitle);
    }
    if (id) node.setAttribute('id', id);
    if (className) node.classList.add(className);
    return node;
};