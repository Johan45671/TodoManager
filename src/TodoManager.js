class TodoManager {
constructor() {
this.todos = [];
this.nextId = 1;
}


addTodo(text) {
if (!text || typeof text !== 'string') {
throw new Error('Text måste vara en icke-tom sträng');
}


const todo = {
id: this.nextId++,
text,
completed: false
};


this.todos.push(todo);
return todo;
}


getTodos() {
return [...this.todos];
}


getTodoById(id) {
return this.todos.find(t => t.id === id) || null;
}


toggleTodo(id) {
const todo = this.getTodoById(id);
if (!todo) {
throw new Error('Todo hittades inte');
}
todo.completed = !todo.completed;
return todo;
}


removeTodo(id) {
const index = this.todos.findIndex(t => t.id === id);
if (index === -1) {
throw new Error('Todo hittades inte');
}
return this.todos.splice(index, 1)[0];
}
}


module.exports = TodoManager;