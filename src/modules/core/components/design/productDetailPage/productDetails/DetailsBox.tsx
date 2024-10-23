interface DetailsBox {
    brand: string, 
    category: string,
}

export default function DetailsBox ({brand, category}: DetailsBox) {
    return (
        <>
        <div className="flex flex-col gap-4 p-3 border border-gray-300 rounded-md mt-4">
            <h1 className="font-bold text-2xl">Details</h1>
            <div className="flex justify-around text-sm">
            <p>Brand</p>
            <p className="font-bold">{brand}</p>
            <p>Category</p>
            <p className="font-bold">{category}</p>
            </div>
        </div>
        </>
    )
}