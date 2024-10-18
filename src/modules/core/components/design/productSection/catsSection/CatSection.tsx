import ProductHeading from "../../productHeading/ProductHeading";
import ViewMoreBtn from "../ViewMoreBtn";
import CatCard from "./CatCard";

export default function CatSection () {
    return (
        <>
        <div className="flex flex-col items-start max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between w-full">
        <ProductHeading text="Cats" />
        <ViewMoreBtn />
        </div>
        <div className="flex items-center justify-center md:justify-around gap-6 flex-wrap">

        <CatCard />
        </div>
        </div>
        </>
    )
}