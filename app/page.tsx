"use client";

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Board from "./_components/Board";

export default function Home() {
  const [showBoard, setShowBoard] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen min-w-fit items-center justify-center bg-[#0a0c10]">
      {!showBoard ? (
        <button
          className="border-dashed border-4 border-[#7a828e] p-24 rounded-xl"
          onClick={() => setShowBoard(true)}
        >
          <AiOutlinePlus size={150} color={"#7a828e"} />
        </button>
      ) : (
        <Board />
      )}
    </main>
  );
}
