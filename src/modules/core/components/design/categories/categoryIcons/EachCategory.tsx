interface EachCategoryProps {
    path: string,
    text: string
}

export default function EachCategory ({path, text}: EachCategoryProps) {
    return (
        <>
        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer">
            <img src={path} alt="" className="w-14 md:w-24" />
            <p className="text-xs font-extrabold text-primaryBlack tracking-wide md:text-[16px]">{text}</p>
        </div>
        </>
    )
}