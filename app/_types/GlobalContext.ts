import { Todo } from "./Board";

export type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
//   updateTodo: (id: number) => void;
};