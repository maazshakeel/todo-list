"use client";

import { FC, createContext, useState } from "react";
import { TodoContextType } from "../_types/GlobalContext";
import { Todo } from "../_types/Board";

export const GlobalContext = createContext<TodoContextType | any | null>(null)

const GlobalProvider: FC<any> = ({ children }: any) => {
    const [isInputModelOpen, setIsInputModelOpen] = useState<boolean>(false);
    const [isDeleteModelOpen, setIsDeletemodelOpen] = useState<boolean>(false);
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    })

    const addTodo = (todo: string) => {
        if (todos) {

            setTodos([...todos, {
                id: todos.length + 1,
                todo,
                type: "todo",
                status: false
            }])
        } else {
            setTodos([{
                id: 1,
                todo,
                type: "todo",
                status: false
            }])

        }
        setIsInputModelOpen(false)
    }

    const deleteTodo = (id: number) => {
        const removedTodo = todos?.filter((todo: Todo) => {
            return todo.id !== id
        })
        setTodos(removedTodo)
    }

    return (
        <GlobalContext.Provider value={{ isInputModelOpen, setIsInputModelOpen, addTodo, todos, isDeleteModelOpen, setIsDeletemodelOpen, deleteTodo }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;