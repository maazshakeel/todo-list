import { TodoCardProps } from "../_types/TodoCard";

export default function TodoCard({ children }: TodoCardProps) {
    return (
        <div onClick={() => alert(children)} className="text-white bg-[#272b33] mt-4 h-[70px] w-full border-[1px] border-[#7a828e] rounded-md border-solid flex-shrink-0 shadow-inner overflow-visible pr-4 pl-[10px] pt-[10px] pb-2 flex flex-col gap-2 hover:cursor-grab">

            <div className="flex flex-wrap items-center gap-1 select-none">
                {/* circle */}
                <div className="h-4 w-4 border-[2px] border-dashed divide-dashed border-[#f0f3f6] bg-[#272b33] rounded-[8px] flex-shrink-0"></div>

                {/* Todo */}
                <p className="text-[#f0f3f6] text-[12px]">Draft</p>
            </div>

            <span className="text-[#f0f3f6] text-[14px] hover:text-[#71b7ff] hover:cursor-pointer hover:underline">{children}</span>
        </div>
    )
}