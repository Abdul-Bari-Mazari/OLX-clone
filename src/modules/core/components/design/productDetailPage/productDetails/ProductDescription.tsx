export default function ProductDesciption ({description}: {description: string}) {
    return (
        <>
        <div className="flex flex-col gap-3 p-3 mt-4 mb-8 border border-gray-300 rounded-md">
            <h1 className="font-bold text-2xl">Description</h1>
            <p className="text-gray-700">{description}</p>
        </div>
        </>
    )
}