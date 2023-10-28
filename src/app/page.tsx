"use client";

import { useContext } from "react";
// import { AiOutlinePlus } from "react-icons/ai";
import Board from "../components/Board";
import { GlobalContext } from "../context/Global";

export default function Home() {
  // const [showBoard, setShowBoard] = useState<boolean>(false);
  const { isInputModelOpen, isDeleteModelOpen } = useContext(GlobalContext);

  // const backgroundHandle = isInputModelOpen || isDeleteModelOpen ? 'bg-[#010409cc]' : 'bg-[#0a0c10]'

  return (
    <main
      style={
        isInputModelOpen || isDeleteModelOpen
          ? {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }
          : {}
      }
      className={`flex flex-col min-h-screen min-w-fit items-center justify-center bg-[#0a0c10]`}
    >
      {/**#2e343f ${isInputModelOpen ? '#2e343f' : '#0a0c10'}*/}
      {/* {!showBoard ? (
        <button
          className="border-dashed border-4 border-[#7a828e] p-24 rounded-xl"
          onClick={() => setShowBoard(true)}
        >
          <AiOutlinePlus size={150} color={"#7a828e"} />
        </button>
      ) : ( */}
      <Board />
      <p className="text-white text-xs mt-1 absolute bottom-1 leading-7">
        🌐 Press <span>⏎</span> <code>CTRL</code> + <code>Space</code> to add
        todo. Press <kbd>Enter</kbd> to add todo and <kbd>Esc</kbd> to discard.
      </p>
      {/* )} */}
    </main>
  );
}
