import { getProjects, addTodoToProject, removeProject, removeTodoFromProject } from './logic.js';

function renderProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    projectList.dataset.selectedId = '';

      const projects = getProjects();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Clear todos by default

    getProjects().forEach(project => {
        const div = document.createElement('div');
        div.classList.add('project-item');

        const nameSpan = document.createElement('span');
        nameSpan.textContent = project.name;
        nameSpan.dataset.id = project.id;

         // Allow selecting project by clicking on its name
        nameSpan.addEventListener('click', () => {
            projectList.dataset.selectedId = project.id;
            renderTodos(project.id);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
             const currentSelectedId = projectList.dataset.selectedId;
            removeProject(project.id);
            const remainingProjects = getProjects();

            if (currentSelectedId === project.id) {
                todoList.innerHTML = '';
                projectList.dataset.selectedId = '';
                // Auto-select another project if available
                if (remainingProjects.length > 0) {
                    projectList.dataset.selectedId = remainingProjects[0].id;
                    renderTodos(remainingProjects[0].id);
                }
            }

            renderProjects(); // Re-render after deletion
        });

        div.appendChild(nameSpan);
        div.appendChild(deleteBtn);
        projectList.appendChild(div);
    });
}

function renderTodos(projectId) {
    const todoList = document.getElementById('todo-list');
    const project = getProjects().find(p => p.id === projectId);
    if (!project) return;

    todoList.innerHTML = '';

    project.todos.forEach(todo => {
        const item = document.createElement('div');
        item.classList.add(`priority-${todo.priority}`, 'todo-item');
        item.innerHTML = `
            <span><strong>${todo.title}</strong> – Due: ${todo.dueDate}</span>
            <button class="delete-todo">delete</button>
        `;

        const deleteBtn = item.querySelector('.delete-todo');
        deleteBtn.addEventListener('click', () => {
            removeTodoFromProject(projectId, todo.id);
            renderTodos(projectId);
        });

        todoList.appendChild(item);
    });
}

export {
    renderProjects,
    renderTodos
};
