This is the project for my personal website, hosted on my public GitHub page. The site is entirely built using HTML, CSS, and JavaScript, and features an internal database system based on JSON and Markdown files. In the initial version 1.0.0, I chose to avoid the use of any external libraries or frameworks to maintain a minimalist approach and gain a deeper understanding of fundamental web technologies.

As the project evolved, I decided to enhance the user experience by adding a more dynamic and visually engaging landing page. To achieve this, I integrated a library provided by a Figma extension, which allows for advanced SVG animations. This addition brings life to the site with smooth, interactive elements that improve the aesthetic appeal and user engagement.

# Database Structure

The database powering the site is static, eliminating the need for API calls or real-time updates from external sources. All the project data is stored locally in a well-structured manner within the "Projects" folder. Each project's relevant information is maintained in two types of files: a Markdown file for the detailed description (<code>desc.md</code>) and a JSON file (<code>info.json</code>) containing essential metadata.

The magic happens with a custom Node.js script, which consolidates all these JSON files into a master database, ensuring the site's project list is always up-to-date. This database is automatically rebuilt and updated whenever a new commit is pushed to GitHub, utilizing GitHub Actions for automation. This approach guarantees that the site remains low-latency and fast, while always displaying the latest project information.

# Project Display and Management

The projects featured on the site are the most dynamic component. Each project is displayed on the projects page in a card-based layout.
These cards are generated dynamically using JavaScript, and they include a banner image, the project title, and a brief description extracted from the Markdown file.
Users can browse through these cards easily. A button on each card provides access to a more detailed view, where users can dive deeper into the specifics of a project.

# Project Details

The detailed view for each project is loaded dynamically based on the URL structure.
On the project details page, users can explore the full project description, which is directly loaded from the Markdown file. If the project consists of multiple repositories, all relevant repositories are listed and linked for easy access, providing a comprehensive view of each initiative's structure and scope.

# Contact Form Integration

The contact form on the website allows visitors to easily get in touch with me. It is powered by [un-static](https://un-static.com/) a service that handles the form submission and sends the collected data directly to my email. This solution keeps the process simple and reliable, without the need for complex backend setups.

# Assets
All visual assets on the site are optimized for performance and scalability. Wherever possible, I have switched from raster images (such as PNGs) to vector-based SVG files, which not only reduce the overall weight of the site but also provide more flexibility when it comes to resizing and animation

The SVG assets are sourced from trusted repositories like [SVG repo](https://www.svgrepo.com/), [Undraw](https://undraw.co/illustrations), and [Storyset](https://storyset.com/). Many of these SVGs are then customized using Figma to ensure they blend seamlessly with the overall design of the site.
Adjustments might include recoloring elements to match the site’s color scheme or adding animations

The animated svg are embedded in a _html_ file that contains all the style and the script to animate it. This file is automatically created by the figma extension