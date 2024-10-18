import ProductHeading from "../../productHeading/ProductHeading";
import ViewMoreBtn from "../ViewMoreBtn";
import BikeCard from "./BikeCard";

export default function BikeSection () {
    return (
        <>
        <div className="flex flex-col items-start max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between w-full">
        <ProductHeading text="Bikes & Motorcycles" />
        <ViewMoreBtn />
        </div>
        <div className="flex items-center justify-center md:justify-around gap-6 flex-wrap">

        <BikeCard />
        </div>
        </div>
        </>
    )
}