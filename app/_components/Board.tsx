"use client";

import { AiOutlineEllipsis } from "react-icons/ai";

export default function Board() {
  return (
    <div className="flex flex-row gap-4">
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
          <div className="hover:bg-[#474d58] hover:cursor-pointer hover:rounded-md">
            <AiOutlineEllipsis size={25} color={"#dbdbc6"} />
          </div>
        </div>
      </div>
      <div className="h-[35rem] w-96 border-[2px] border-[#7a828e] rounded-md border-solid"></div>
      <div className="h-[35rem] w-96 border-[2px] border-[#7a828e] rounded-md border-solid"></div>
    </div>
  );
}
