import projectsArray from './projectObjects.js';

const root = document.querySelector("#main");
root.innerHTML = '';

const createProject = (projectJson, index) => {
  if (!projectJson.name) return;
  const { name, imgSrc, liveLink, repoLink, description } = projectJson;
  const imageId = `image-${index}`;
  const switchId = `switch-${imageId}`
  let currentImg = 0;
  let imgPath = imgSrc[currentImg] || 0;

  const projectNode = document.createElement("div");
  projectNode.className = "project";
  projectNode.innerHTML = `
    <h2>${name}</h2>
    <div class="project-content">
      <div class="preview ${imgSrc.length>0 || 'hidden'}">
          <div class="image">
              <img id="${imageId}" src="${imgPath}" alt="${name} preview" />
              <button id="${switchId}-left" class="switch left ${imgSrc.length>1 || 'hidden'}">Prev</button>
              <button id="${switchId}-right" class="switch right ${imgSrc.length>1 || 'hidden'}">Next</button>
          </div>
      </div>
      <div class="description">
          <p>
              ${description.head}
          </p>
          <div class="buttons">
              <a target="_blank" class="${liveLink.length>0 || 'hidden'}" href="${liveLink}">Live</a>
              <a target="_blank" href="${repoLink}">GitHub</a>
          </div>
          <ul class="tools">
              ${description.tools.map((tool, index) => `<li key="tools-${index}">${tool}</li>`).join("")}
          </ul>
          <ul>
              ${description.features.map((line, index) => `<li key="ls-${index}">${line}</li>`).join("")}
          </ul>
      </div>
    </div>`;
    const changeImg = (isIncrease) => {
      if (isIncrease) {
        currentImg += 1;
      } else {
        currentImg -= 1;
      }
      if (currentImg >= imgSrc.length) {
        currentImg = 0
      } else if (currentImg < 0) {
        currentImg = imgSrc.length - 1;
      }
      document.querySelector(`#${imageId}`).src = imgSrc[currentImg];
    };
    const enlarge = () => {
      document.querySelector(`#${imageId}`).classList.toggle('enlarged');
    }
    root.append(projectNode);
    document.querySelector(`#${imageId}`).addEventListener('click', () => enlarge());
    document.querySelector(`#${switchId}-left`).addEventListener('click', () => changeImg(false) );
    document.querySelector(`#${switchId}-right`).addEventListener('click', () => changeImg(true) );
};

projectsArray.map((project, index) => createProject(project, index));