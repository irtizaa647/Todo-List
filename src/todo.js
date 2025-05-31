export default class Todo {
    constructor(title, dueDate, priority, description = '', notes = '', checklist = []) {
        this.id = Date.now().toString();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.completed = false;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    addCheckListItem(text) {
        this.checklist.push({ text, completed: false });
    }

    markCheckListItemCompleted(index) {
        if (this.checklist[index]) {
            this.checklist[index].completed = true;
        }
    }
}
