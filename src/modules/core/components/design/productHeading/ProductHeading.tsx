export default function ProductHeading({text}: {text: string}) {
    return (
        <>
        <h1 className="text-2xl text-primaryBlack font-extrabold mb-4 tracking-wide">{text}</h1>
        </>
    )
}