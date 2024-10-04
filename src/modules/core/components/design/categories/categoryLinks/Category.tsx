export default function Category({text}: {text: string}) {
    return(
        <>
        <p className="hover:text-primaryBlue cursor-pointer text-sm">{text}</p>
        </>
    )
}