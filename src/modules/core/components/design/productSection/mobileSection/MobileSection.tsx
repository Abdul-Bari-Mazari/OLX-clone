import ProductHeading from "../../productHeading/ProductHeading";
import { MobileCard } from "./MobileCard";
import ViewMoreBtn from "../ViewMoreBtn";

export default function MobileSection () {
    return (
        <>
        <div className="flex flex-col items-start max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between w-full">
        <ProductHeading text="Mobile Phones" />
        <ViewMoreBtn />
        </div>
        <div className="flex items-center justify-center md:justify-around gap-6 flex-wrap">

        <MobileCard />
        </div>
        </div>
        </>
    )
}