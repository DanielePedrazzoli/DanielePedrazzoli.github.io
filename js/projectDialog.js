class ProjectDialog {

    constructor(project) {
        this.project = project;
        this.dialogPointer = document.querySelector("#project-dialog")
        this.closeBtnPointer = this.dialogPointer.querySelector(".close-btn")
        this.linkButton = this.dialogPointer.querySelector(".github-btn")

        this.linkButton.classList.remove("disabled")

        this.closeBtnPointer.onclick = () => {
            this.dialogPointer.close();
        }

        if (project.link == "") {

            this.linkButton.classList.add("disabled")
        } else {
            this.linkButton.href = project.link
        }

        var description = this.dialogPointer.querySelector(".project-description")
        description.innerText = project.description


        var languages = this.dialogPointer.querySelector(".project-language")
        languages.innerText = project.languages.join(" ")

        var framework = this.dialogPointer.querySelector(".project-framework")
        if (project.framework) {
            framework.innerText = "Framework: " + project.framework
        } else {
            framework.innerText = "";
        }


        var name = this.dialogPointer.querySelector(".project-name")
        name.innerText = project.name
    }




    showDialog() {
        this.dialogPointer.showModal();
    }
}