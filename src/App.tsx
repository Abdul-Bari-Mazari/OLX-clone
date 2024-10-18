import { Divider } from '@nextui-org/react';
import MainHeader from './modules/core/components/design/header/mainHeader/MainHeader';
import CatagoriesList from './modules/core/components/design/categories/categoryLinks/CategoriesList';
import FeatureImage from './modules/core/components/design/featureImage/FeatureImage';
import AllCategoriesIcons from './modules/core/components/design/categories/categoryIcons/AllCategoriesIcons';
import MobileSection from './modules/core/components/design/productSection/mobileSection/MobileSection';
import CarSection from './modules/core/components/design/productSection/carSection/CarSection';
import BikeSection from './modules/core/components/design/productSection/bikeSection/BikeSection';
import CatSection from './modules/core/components/design/productSection/catsSection/CatSection';
import Footer from './modules/core/components/design/footer/Footer';

export default function App() {
  return (
    <>
      <div className="">
        <MainHeader />
        <Divider className="my-4" />
        <CatagoriesList />
        <FeatureImage />
        <AllCategoriesIcons />
        <MobileSection />
        <CarSection />
        <BikeSection />
        <CatSection />
        <Footer />
      </div>
    </>
  );
}
