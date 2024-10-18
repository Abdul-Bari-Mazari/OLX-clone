import { HiPlusSm } from "react-icons/hi";

export default function SellButton() {
    return (
        <>
        <div className="flex items-center rounded-full border-5 border-r-blue-500 border-b-blue-500 border-t-cyan-300 font-bold border-l-yellow-300 px-3 py-1 mx-1 cursor-pointer">
        <HiPlusSm className="w-7 h-7" />
        <p>SELL</p>
        </div>
        </>
    )
}