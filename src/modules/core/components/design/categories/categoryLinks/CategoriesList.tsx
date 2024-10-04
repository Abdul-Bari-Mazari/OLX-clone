import AllCategories from "./AllCategories";
import Category from "./Category";

export default function CatagoriesList () {
    return (
        <>
        <div className="max-w-7xl mx-auto flex items-center gap-3">
            <AllCategories />
            <Category text="Mobile Phones" />
            <Category text="Cars" />
            <Category text="Motorcycles" />
            <Category text="Houses" />
            <Category text="Tablets" />
        </div>
        </>
    )
}