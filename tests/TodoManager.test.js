const TodoManager = require('../src/TodoManager');


describe('TodoManager', () => {
let manager;


beforeEach(() => {
manager = new TodoManager();
});


test('startar med tom lista', () => {
expect(manager.getTodos()).toEqual([]);
});


test('lägger till todo', () => {
const todo = manager.addTodo('Handla mjölk');
expect(todo).toMatchObject({
id: 1,
text: 'Handla mjölk',
completed: false
});
});


test('kastar fel vid tom text', () => {
expect(() => manager.addTodo('')).toThrow();
});


test('hämtar todo via id', () => {
manager.addTodo('Test');
const todo = manager.getTodoById(1);
expect(todo.text).toBe('Test');
});


test('returnerar null vid ogiltigt id', () => {
expect(manager.getTodoById(999)).toBeNull();
});


test('toggle completed', () => {
manager.addTodo('Toggle test');
const todo = manager.toggleTodo(1);
expect(todo.completed).toBe(true);
});


test('kastar fel vid toggle av ogiltigt id', () => {
expect(() => manager.toggleTodo(123)).toThrow();
});


test('tar bort todo', () => {
manager.addTodo('Ta bort mig');
const removed = manager.removeTodo(1);
expect(removed.text).toBe('Ta bort mig');
expect(manager.getTodos()).toHaveLength(0);
});


test('kastar fel vid borttagning av ogiltigt id', () => {
expect(() => manager.removeTodo(42)).toThrow();
});
});