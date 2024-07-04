This is the project for my personal website, published on my public GitHub page. The site is entirely written in HTML, CSS, and JavaScript, and uses an internal database system based on JSON and Markdown files. No external libraries or frameworks are used.

# Database

The database is static and does not involve the use of API calls. All projects are saved in the "Projects" folder and are merged into a single JSON file using a script written in Node.js. The database is updated whenever a new commit is pushed to GitHub.

# Projects

The projects are the most dynamic part of the site. Each project has a description in the <i>desc.md</i> file and a JSON file (<i>info.json</i>) that contains all the brief information. These projects are stored in the file created by the Node.js script and loaded on the projects page. On this page, each project is separated into completed projects and projects in progress, using dynamically created card elements. Each card contains a banner, a title, and a brief description of the project. A button allows the user to view the project's details.

# Project Details

A single page dynamically loads the project (based on the URL) for a more detailed view. On this page, you can see the full project description along with all the repositories that make up the project (if there is more than one).