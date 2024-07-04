const fs = require('fs').promises;



async function main() {
    const mergeContent = {};
    const projectPath = "./Projects/";
    var avaiableProjectsDirecotry = await fs.readdir(projectPath);
    console.log("\nFounded projects:")
    for (const project of avaiableProjectsDirecotry) {

        var stats = {
            "name": project,
            "description_present": false,
            "paragraphs_number": 0,
        }

        var info = JSON.parse(await fs.readFile(projectPath + "/" + project + "/info.json", "utf8"));
        var fileContent = await fs.readFile(projectPath + "/" + project + "/desc.md", "utf8");

        const paragraphs = {};
        const sections = fileContent.replace(/\r/gm, "").split(/\n\n#/gm);

        const description = sections.shift().trim();

        if (description != "") {
            stats.description_present = true;
        }

        sections.forEach(section => {
            const lines = section.split('\n\n');
            const title = lines.shift().replace('#', '').trim();
            const paragraph = lines.join('\n\n').trim();
            paragraphs[title] = paragraph;

            stats.paragraphs_number++;
        });

        console.log(stats);


        mergeContent[project] = {
            "info": info,
            "description": description,
            "paragraphs": paragraphs
        }

    }

    await fs.writeFile("./database/Projects.js", "const projects = " + JSON.stringify(mergeContent, null, 2));
    console.log("done");

}



main();