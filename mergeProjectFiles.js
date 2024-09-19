const fs = require('fs').promises;



async function main() {
    const mergeContent = {};
    const projectPath = "./Projects/";
    var avaiableProjectsDirecotry = await fs.readdir(projectPath);
    console.log("\nFounded projects:")
    for (const project of avaiableProjectsDirecotry) {

        console.log(project)

        var info = JSON.parse(await fs.readFile(projectPath + "/" + project + "/info.json", "utf8"));
        info.descriptionLocation = "/" + project + "/" + info.descriptionLocation
        var fileContent = await fs.readFile("./Projects/" + project + "/" + info.briefDescriptionLocation, "utf8");
        info.briefDescription = fileContent
        mergeContent[project] = info

    }

    var result = await fs.writeFile("./database/projects.js", "const projects = " + JSON.stringify(mergeContent, null, 2));
    // console.log(result);
    console.log("done");

}




main();