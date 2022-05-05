export const createProjectCard = ({ title, git, url, img, msg }) => {
  let node = document.createElement('figure');
  let nodeId = title.toLowerCase().split(' ').join('-');
  node.classList.add('project-card');
  node.setAttribute('id', nodeId);
  node.innerHTML = `
    <div class="img-container">
      <div class="container">
        <img src="${img}" alt="${title}-img"/>  
        <nav class="modal">
          <p>${msg}</p>
          <div>
            <a href="${url}" target="_blank" rel=noopener>Test</a>
            <a href="${git}" target="_blank" rel=noopener>Git</a>
          </div>
        </nav>
      </div>
      <h3>${title}</h3>
    </div>
  `;
  return node;
};