"use client";

import { AiOutlineEllipsis, AiOutlinePlus } from "react-icons/ai";
import { BoardProps, Todos } from "../_types/Board";
import TodoCard from "./TodoCard";
import { useState } from "react";

export default function Board(): React.ReactElement {

  const [todos, setTodos] = useState<Todos>([
    {
      id: 1,
      todo: "manage state board",
      type: "todo",
      status: false
    },
    {
      id: 2,
      todo: "auth & authorization feature",
      type: "todo",
      status: false
    },
    {
      id: 3,
      todo: "drag and drop functionality",
      type: "todo",
      status: false
    },
  ])
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-row gap-2">
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="h-[35rem] w-96 border-[2px] border-[#7a828e] rounded-md border-solid pr-4 pl-4 pt-[8px] pb-2">
        {/*circkle todo and number of items*/}
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {/* circle */}
            <div className="h-4 w-4 border-2 border-solid border-[#08a837] bg-[#021e11] rounded-[8px] flex-shrink-0"></div>

            {/* Todo */}
            <p className="text-white text-[16px] font-[600] leading-6">Todo</p>

            {/* number of items */}
            <div className="inline-block pr-[5px] pl-[5px] pt-[2.15px] pb-[2px] bg-[#9ea7b366] mr-2 mt-1 mb-1 text-[12px] leading-[1] rounded-[20px] text-[#f0f3f6] font-[600]">
              0
            </div>
          </div>

          {/*three dots*/}
          <div className="hover:bg-[#474d58] hover:cursor-pointer hover:rounded-md p-1">
            <AiOutlinePlus onClick={() => setShowModal(true)} size={20} color={"#dbdbc6"} />
          </div>
        </div>

        <p className="mt-2 text-[#f0f3f6] font-[400] text-[14px]">This item hasn't been started</p>

        {
          todos.map(todo => <TodoCard key={todo.id}>{todo.todo}</TodoCard>)
        }
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
        <p className="mt-2 text-[#f0f3f6] font-[400] text-[14px]">This is actively being worked on</p>
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
        <p className="mt-2 text-[#f0f3f6] font-[400] text-[14px]">This has been completed</p>
      </div>
    </div>
  );
}
