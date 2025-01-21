import { makeAutoObservable } from 'mobx'

class Todo {
  todos: Array<{ id: number; title: string; completed: boolean }> = [
    { id: 1, title: 'First todo', completed: false },
    { id: 2, title: 'Second todo', completed: false },
    { id: 3, title: 'Third todo', completed: false },
    { id: 4, title: 'Fourth todo', completed: false },
    { id: 5, title: 'Fifth todo', completed: false },
  ]

  constructor(todo: Array<{ id: number; title: string; completed: boolean }> = this.todos) {
    this.todos = todo
    makeAutoObservable(this)
  }

  addTodo(todo: { id: number; title: string; completed: boolean }) {
    this.todos.push(todo)
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  completeTodo(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    )
  }
}

export default new Todo()
