import EachCategory from './EachCategory';
import MOBILE from '../../../../../../assets/category-imgs/mobile.png';
import VEHICLES from '../../../../../../assets/category-imgs/vehicles.png';
import PROPERTY_FOR_SALE from '../../../../../../assets/category-imgs/property-for-sale.png';
import PROPERTY_FOR_RENT from '../../../../../../assets/category-imgs/property-for-rent.png';
import BIKES from '../../../../../../assets/category-imgs/bikes.png';
import ANIMALS from '../../../../../../assets/category-imgs/animals.png'
import FURNITURE from '../../../../../../assets/category-imgs/furniture.png'
import FASHION from '../../../../../../assets/category-imgs/fashion.png';
import KIDS from '../../../../../../assets/category-imgs/kids.png';
import ProductHeading from '../../productHeading/ProductHeading';

export default function AllCategoriesIcons() {
  return (
    <>
      <div className="flex flex-col items-start gap-2 max-w-7xl mx-auto">
        <ProductHeading text="All categories" />

        <div className=" flex gap-6 justify-around w-full  flex-wrap mx-auto">
          <EachCategory
            path={MOBILE}
            text="Mobiles"
          />
          <EachCategory
            path={BIKES}
            text="Bikes"
          />
          <EachCategory
            path={VEHICLES}
            text="Vehicles"
          />
          <EachCategory
            path={PROPERTY_FOR_SALE}
            text="Property for sale"
          />
          <EachCategory
            path={PROPERTY_FOR_RENT}
            text="Property for rent"
          />
          <EachCategory
            path={ANIMALS}
            text="Animals"
          />
          <EachCategory
            path={FURNITURE}
            text="Furniture"
          />
          <EachCategory
            path={FASHION}
            text="Fashion"
          />
          <EachCategory
            path={KIDS}
            text="Kids"
          />
        </div>
      </div>
    </>
  );
}
