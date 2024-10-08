import ProductHeading from "../productHeading/ProductHeading";
import { ProductCard } from "./ProductCard";
import ViewMoreBtn from "./ViewMoreBtn";

export default function ProductSection () {
    return (
        <>
        <div className="flex flex-col items-start max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between w-full">
        <ProductHeading text="Mobile Phones" />
        <ViewMoreBtn />
        </div>
        <div className="flex items-center justify-center md:justify-around gap-6 flex-wrap">

        <ProductCard />
        </div>
        </div>
        </>
    )
}