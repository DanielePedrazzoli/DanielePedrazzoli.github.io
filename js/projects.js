const MAX_NUMBER_OF_CHARACTERS = 100;

const webContainer = document.getElementById("web-project-container");
const desktopContainer = document.getElementById("desktop-project-container");
const terminalContainer = document.getElementById("terminal-project-container");
const gameContainer = document.getElementById("game-project-container");
const mobileContainer = document.getElementById("mobile-project-container");
const microControllerContainer = document.getElementById("Microcontroller-project-container");


const webList = createList(webContainer);
const desktopList = createList(desktopContainer);
const terminalList = createList(terminalContainer);
const gameList = createList(gameContainer);
const mobileList = createList(mobileContainer);
const microcontrollerList = createList(microControllerContainer);

var listMap = {
    "Web": webList,
    "Desktop": desktopList,
    "Terminal": terminalList,
    "Game": gameList,
    "Mobile": mobileList,
    "Microcontroller": microcontrollerList
}


function createList(parent) {
    var list = parent.appendChild(document.createElement("div"));
    list.classList.add("projects-list");
    return list;
}


function createItem(list, project) {
    var projectItem = list.appendChild(document.createElement("div"));
    projectItem.classList.add("project-card");
    projectItem.onclick = () => {
        var projectDialog = new ProjectDialog(project);
        projectDialog.showDialog();
    }
    return projectItem
}

function createName(projectItem, project) {
    var span = projectItem.appendChild(document.createElement("span"));
    span.innerText = project.name;
    span.classList.add("project-name");
    return span;
}


Object.keys(projects).forEach((key) => {

    var currentList = listMap[key];

    projects[key].forEach((project, index) => {

        var projectItem = createItem(currentList, project);
        createName(projectItem, project);

        var languages = projectItem.appendChild(document.createElement("span"));
        languages.innerText = project.languages.join(" ");
        languages.classList.add("project-language");

        var description = projectItem.appendChild(document.createElement("span"));
        description.innerText = project.description.slice(0, MAX_NUMBER_OF_CHARACTERS) + "...";
        description.classList.add("project-description");
    })


})