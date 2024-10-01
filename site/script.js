// script.js

// Sample projects array (can be loaded from an external JSON)
const projects = [
    {
        "title": "Project 1",
        "description": "A web application that helps manage tasks.",
        "link": "https://github.com/yourprofile/project1",
        "image": "https://via.placeholder.com/300x200"
    },
    {
        "title": "Project 2",
        "description": "An ecommerce website with payment integration.",
        "link": "https://github.com/yourprofile/project2",
        "image": "https://via.placeholder.com/300x200"
    }
];

// Function to render the projects dynamically
function loadProjects() {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
        `;
        projectList.innerHTML += projectCard;
    });
}

// Call the function when the page loads
window.onload = loadProjects;

// script.js

// Fetch the projects.json file
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        loadProjects(data);
    })
    .catch(error => {
        console.error('Error fetching the projects:', error);
    });

// Function to load projects
function loadProjects(projects) {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
        `;
        projectList.innerHTML += projectCard;
    });
}

