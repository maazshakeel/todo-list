"use client";

import { AiOutlinePlus } from "react-icons/ai";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center">
      <button
        className="border-dashed border-4 border-gray-900 p-24 rounded-xl"
        onClick={() => alert("clicked!")}
      >
        <AiOutlinePlus size={150} color={"#000"} />
      </button>
    </main>
  );
}
