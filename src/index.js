import './style.css';
import { renderProjects, renderTodos } from './dom.js';
import { createProject, addTodoToProject, getProjects } from './logic.js';

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    const projects = getProjects();
    projects.forEach(project => {
        // addTodoToProject(project.id, ['Sample Todo', '2025-01-01', 'low']);
    });

    if (projects.length > 0) {
        renderTodos(projects[0].id);
    }

    const projectList = document.getElementById('project-list');
    projectList.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            renderTodos(id);
            projectList.dataset.selectedId = id;
        }
    });

    document.getElementById('add-project-btn').addEventListener('click', () => {
        const name = document.getElementById('project-name').value.trim();
        if (name) {
            createProject(name);
            renderProjects();
        }
    });

    document.getElementById('add-todo-btn').addEventListener('click', () => {
        const projectId = projectList.dataset.selectedId;
        if (!projectId) return alert("Select a project first");

        const title = document.getElementById('todo-title').value.trim();
        const dueDate = document.getElementById('todo-date').value;
        const priority = document.getElementById('todo-priority').value;

        if (title && dueDate) {
            addTodoToProject(projectId, [title, dueDate, priority]);
            renderTodos(projectId);
        }
    });
});
