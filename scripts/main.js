document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    const projects = [
        { name: 'Proyecto 1', description: 'Descripción del proyecto 1' },
        { name: 'Proyecto 2', description: 'Descripción del proyecto 2' }
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectDiv);
    });
});