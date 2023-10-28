"use client";

import {
  AiFillQuestionCircle,
  AiOutlineEllipsis,
  AiOutlinePlus,
} from "react-icons/ai";
import { Todo } from "../types/Board";
import TodoCard from "./TodoCard";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/Global";
import toast, { Toaster } from "react-hot-toast";

export default function Board(): React.ReactElement {
  const [todoInput, setTodoInput] = useState<string>("");

  // context
  const { isInputModelOpen, setIsInputModelOpen, todos, addTodo, setTodos } =
    useContext(GlobalContext);

  useEffect(() => {
    function handleAddTodoOnKey(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === " ") {
        setIsInputModelOpen(true);
      }
    }

    window.addEventListener("keydown", handleAddTodoOnKey);

    return () => {
      window.removeEventListener("keydown", handleAddTodoOnKey);
    };
  });

  // add todo
  const handleAddTodo = (e: React.FormEvent, formData: string | any) => {
    e.preventDefault();
    if (!todoInput) {
      toast.error("Todo is epmty!?");
      return;
    }
    addTodo(formData);
    setTodoInput("");

    toast("Todo Added!", {
      icon: "✅",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      // handleAddTodo()
      if (!todoInput) {
        toast.error("Todo is epmty!?");
        return;
      }
      addTodo(todoInput);
      setTodoInput("");
      return;
    }
    if (e.key === "Escape") {
      setTodoInput("");
      setIsInputModelOpen(false);
      return;
    }
  };

  return (
    <div className="flex flex-row gap-2">
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <AiFillQuestionCircle
        onClick={() => {
          toast("🌐 Press ⏎ CTRL + Space to add todo.", {
            duration: 6000,
          });
        }}
        size={50}
        color={"white"}
        className="absolute bottom-3 right-3 hover:cursor-pointer hover:shadow-xl"
      />
      {isInputModelOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                style={{
                  boxShadow:
                    "rgb(82, 89, 100) 0px 0px 0px 1px, rgba(1, 4, 9, 0.85) 0px 16px 32px",
                  animation:
                    "200ms cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running overlay--dialog-appear",
                }}
                className="p-5 border-0 rounded-lg relative flex flex-col w-full bg-[#272b33] outline-none focus:outline-none"
              >
                {/*header*/}
                <div className="flex items-start justify-between pt-5 pl-5 border-none">
                  <h3 className="text-3xl font-semibold text-[#f0f3f6]">
                    Add Todo
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    autoFocus
                    onKeyDown={(e: any) => handleKeyPress(e)}
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                    className="border-2 border-solid border-[#f0f3f6] py-4 px-4 w-72 rounded-md text-sm"
                    placeholder="Start typing to create a draft"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end pb-6 pr-6 border-none">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsInputModelOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => handleAddTodo(e, todoInput)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="h-[35rem] w-96 border-[2px] border-[#7a828e] rounded-md border-solid pr-4 pl-4 pt-[8px] pb-2 overflow-clip overflow-y-auto">
        {/*circkle todo and number of items*/}
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {/* circle */}
            <div className="h-4 w-4 border-2 border-solid border-[#08a837] bg-[#021e11] rounded-[8px] flex-shrink-0"></div>

            {/* Todo */}
            <p className="text-white text-[16px] font-[600] leading-6">Todo</p>

            {/* number of items */}
            <div className="inline-block pr-[5px] pl-[5px] pt-[2.15px] pb-[2px] bg-[#9ea7b366] mr-2 mt-1 mb-1 text-[12px] leading-[1] rounded-[20px] text-[#f0f3f6] font-[600]">
              {/*@ts-ignore*/}
              {todos && todos.length}
              {!todos && 0}
            </div>
          </div>

          {/*three dots*/}
          <div className="hover:bg-[#474d58] hover:cursor-pointer hover:rounded-md p-1">
            <AiOutlinePlus
              onClick={() => setIsInputModelOpen(true)}
              size={20}
              color={"#dbdbc6"}
            />
          </div>
        </div>
        <p className="mt-2 text-[#f0f3f6] font-[400] text-[14px]">
          This item hasn&apos;t been started
        </p>

        {todos &&
          todos.map((todo: Todo) => <TodoCard key={todo.id}>{todo}</TodoCard>)}
      </div>

      {/* <p className="mt-2 text-[#f0f3f6] font-[400] text-[20px]">Testing for the bottom button</p> */}

      {/* 2 */}
      <div className="h-[35rem] w-96 border-[2px] border-[#7a828e] rounded-md border-solid pr-4 pl-4 pt-[8px] pb-2">
        {/*circkle todo and number of items*/}
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {/* circle */}
            <div className="h-4 w-4 border-2 border-solid border-[#e09b13] bg-[#e09b1326] rounded-[8px] flex-shrink-0"></div>

            {/* Todo */}
            <p className="text-white text-[16px] font-[600] leading-6">
              In Progress
            </p>

            {/* number of items */}
            <div className="inline-block pr-[5px] pl-[5px] pt-[2.15px] pb-[2px] bg-[#9ea7b366] mr-2 mt-1 mb-1 text-[12px] leading-[1] rounded-[20px] text-[#f0f3f6] font-[600]">
              0
            </div>
          </div>

          {/*three dots*/}
          <div className="hover:bg-[#474d58] hover:cursor-pointer hover:rounded-md">
            <AiOutlineEllipsis size={25} color={"#dbdbc6"} />
          </div>
        </div>
        <p className="mt-2 text-[#f0f3f6] font-[400] text-[14px]">
          This is actively being worked on
        </p>
      </div>

      {/* 3 */}
      <div className="h-[35rem] w-96 border-[2px] border-[#7a828e] rounded-md border-solid pr-4 pl-4 pt-[8px] pb-2">
        {/*circkle todo and number of items*/}
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {/* circle */}
            <div className="h-4 w-4 border-2 border-solid border-[#b87fff] bg-[#b780ff1a] rounded-[8px] flex-shrink-0"></div>

            {/* Todo */}
            <p className="text-white text-[16px] font-[600] leading-6">Done</p>

            {/* number of items */}
            <div className="inline-block pr-[5px] pl-[5px] pt-[2.15px] pb-[2px] bg-[#9ea7b366] mr-2 mt-1 mb-1 text-[12px] leading-[1] rounded-[20px] text-[#f0f3f6] font-[600]">
              0
            </div>
          </div>

          {/*three dots*/}
          <div className="hover:bg-[#474d58] hover:cursor-pointer hover:rounded-md">
            <AiOutlineEllipsis size={25} color={"#dbdbc6"} />
          </div>
        </div>
        <p className="mt-2 text-[#f0f3f6] font-[400] text-[14px]">
          This has been completed
        </p>
      </div>
    </div>
  );
}
