"use client";

import { FC, createContext, useEffect, useState } from "react";
import { TodoContextType } from "../types/GlobalContext";
import { Todo } from "../types/Board";

export const GlobalContext = createContext<TodoContextType | any | null>(null)

const GlobalProvider: FC<any> = ({ children }: any) => {
    const [isInputModelOpen, setIsInputModelOpen] = useState<boolean>(false);
    const [isDeleteModelOpen, setIsDeletemodelOpen] = useState<boolean>(false);
    const [todos, setTodos] = useState<Todo[]>()

    useEffect(() => {
        console.log(localStorage.getItem('todos'))
    })

    // useEffect(() => {
    //     let savedTodos: any = ""
    //     savedTodos = localStorage.getItem("todos");
    //     console.log(savedTodos)
    //     if (savedTodos) {
    //         try {
    //             setTodos(JSON.parse(savedTodos))
    //         } catch (e) {
    //             return
    //         }
    //     } else {
    //         setTodos([]);
    //     }
    // })

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
        <GlobalContext.Provider value={{ isInputModelOpen, setIsInputModelOpen, addTodo, setTodos, todos, isDeleteModelOpen, setIsDeletemodelOpen, deleteTodo }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;