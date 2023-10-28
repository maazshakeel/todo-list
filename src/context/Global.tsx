"use client";

import { FC, createContext, useEffect, useState } from "react";
import { TodoContextType } from "../types/GlobalContext";
import { Todo } from "../types/Board";

export const GlobalContext = createContext<TodoContextType | any | null>(null);

const GlobalProvider: FC<any> = ({ children }: any) => {
  const [isInputModelOpen, setIsInputModelOpen] = useState<boolean>(false);
  const [isDeleteModelOpen, setIsDeletemodelOpen] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    //@ts-ignore
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  const addTodo = (todo: string) => {
    if (todos) {
      setTodos((prev: any) => {
        const l = [
          ...prev,
          { id: todos.length + 1, todo, type: "todo", status: false },
        ];
        localStorage.setItem("todos", JSON.stringify(l));

        return l;
      });
    } else {
      setTodos((prev: any) => {
        const l = [{ id: 1, todo, type: "todo", status: false }];
        localStorage.setItem("todos", JSON.stringify(l));

        return l;
      });
    }
    setIsInputModelOpen(false);
  };

  const deleteTodo = (id: number) => {
    const removedTodo = todos?.filter((todo: Todo) => {
      return todo.id !== id;
    });
    setTodos(removedTodo);
  };

  return (
    <GlobalContext.Provider
      value={{
        isInputModelOpen,
        setIsInputModelOpen,
        addTodo,
        setTodos,
        todos,
        isDeleteModelOpen,
        setIsDeletemodelOpen,
        deleteTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

