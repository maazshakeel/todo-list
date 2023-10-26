"use client";

import { AiOutlineDelete } from "react-icons/ai";
import { TodoCardProps } from "../types/TodoCard";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/Global";
import toast from "react-hot-toast";

export default function TodoCard({ children }: TodoCardProps) {

    const { isDeleteModelOpen, setIsDeletemodelOpen, deleteTodo } = useContext(GlobalContext)

    const handleDeleteTodo = (e: React.FormEvent, id: number | any) => {
        e.preventDefault();
        deleteTodo(id);

        toast('Todo Deleted!',
            {
                icon: '✅',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
        setIsDeletemodelOpen(false)
    };

    return (
        <div className="group text-white bg-[#272b33] mt-4 h-[70px] w-full border-[1px] border-[#7a828e] rounded-md border-solid flex-shrink-0 shadow-inner overflow-visible pr-4 pl-[10px] pt-[10px] pb-2 flex flex-col gap-2 hover:cursor-grab"> {/*//onClick={() => alert(children)}*/}

            {isDeleteModelOpen ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none hover:cursor-default"
                    >
                        <div className="relative w-96 my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div style={{
                                boxShadow: 'rgb(82, 89, 100) 0px 0px 0px 1px, rgba(1, 4, 9, 0.85) 0px 16px 32px',
                                animation: '200ms cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running overlay--dialog-appear'
                            }} className="p-4 border-1 border-gray-500 rounded-lg shadow-xl relative flex flex-col w-full bg-[#272b33] outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between pt-[2px]">
                                    <h3 className="text-[18px] font-semibold text-[#f0f3f6]">Delete todo?</h3>
                                </div>

                                <div className="relative pt-5 flex-auto">
                                    <p className="text-sm">Are you sure you want to delete this item from this project?</p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end px-3 py-3">
                                    <button
                                        className="text-gray-300 background-transparent font-bold uppercase px-6 py-0 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setIsDeletemodelOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={(e) => handleDeleteTodo(e, children.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            <div className="flex flex-wrap items-center justify-between  select-none">
                {/* circle */}
                <div className="flex gap-1 items-center">
                    <div className="h-4 w-4 border-[2px] border-dashed divide-dashed border-[#f0f3f6] bg-[#272b33] rounded-[8px] flex-shrink-0"></div>

                    {/* Todo */}
                    <p className="text-[#f0f3f6] text-[14px]">Draft</p>
                </div>
                <AiOutlineDelete onClick={() => setIsDeletemodelOpen(true)} className="text-red-500 group-hover:block hidden hover:cursor-pointer" />
                {/* <p className="text-[#f0f3f6] text-[12px] group-hover:block hidden">Delete</p> */}
            </div>

            <span className="text-[#f0f3f6] text-[14px] hover:text-[#71b7ff] hover:cursor-pointer hover:underline w-fit">{children.todo}</span>
        </div>
    )
}