import { BsChevronRight } from "react-icons/bs"
export default function ViewMoreBtn () {
    return (
        <>
        <div className="flex items-center gap-2 cursor-pointer">
            <p className="font-semibold text-primaryBlue">View more</p>
            <BsChevronRight className=" text-primaryBlue" />
        </div>
        </>
    )
}