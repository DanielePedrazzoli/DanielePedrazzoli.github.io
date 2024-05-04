const resumeContainer = document.querySelector(".resume-container")


function generateResumeItem(item) {
    var card = document.createElement("div");
    card.classList.add("resume-item");
    var dotColor = "rgb(154, 154, 154)";
    switch (item.type) {
        case "study":
            dotColor = "rgb(68, 126, 160)";
            break;

        case "work":
            dotColor = "rgb(160, 83, 68)";
            break;
    }

    card.style.setProperty("--color", dotColor);

    var title = card.appendChild(document.createElement("span"));
    title.innerText = item.year + " - " + item.text;
    title.classList.add("resume-title");


    var description = card.appendChild(document.createElement("span"));
    description.innerText = item.description;
    description.classList.add("resume-description");



    return card
}

resume.forEach((item, index) => {
    resumeContainer.appendChild(generateResumeItem(item))
});


/*

    "text": "Diploma terza media",
        "description": "Presso <nome scuola>",
        "year": "2014",
        "type": "study"

        */