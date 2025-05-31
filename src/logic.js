import Project from './project.js';
import Todo from './todo.js';

const sampleProject = new Project('Default Project');
// sampleProject.addTodo(new Todo('Buy milk', '2025-06-01', 'low'));
// sampleProject.addTodo(new Todo('Fix bug', '2025-06-03', 'high'));

const projects = [sampleProject];

function createProject(name) {
    const project = new Project(name);
    projects.push(project);
    return project;
}

function getProjects() {
    return projects;
}

function findProject(id) {
    return projects.find(p => p.id === id);
}

function addTodoToProject(projectId, todoData) {
    const project = findProject(projectId);
    if (project) {
        const todo = new Todo(...todoData);
        project.addTodo(todo);
    }
}

function removeProject(id) {
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        projects.splice(index, 1);
    }
}

function removeTodoFromProject(projectId, todoId) {
    const project = findProject(projectId);
    if (project) {
        project.removeTodo(todoId);
    }
}

export {
    createProject,
    getProjects,
    addTodoToProject,
    findProject,
    removeProject,
    removeTodoFromProject
};
