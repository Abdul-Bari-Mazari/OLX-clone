import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from '../../core/components/design/productDetailPage/productDetails/ProductDetailsSection';
import { Divider } from '@nextui-org/react';
import Footer from '../../core/components/design/footer/Footer';
import CatSection from '../../core/components/design/productSection/catsSection/CatSection';
import BikeSection from '../../core/components/design/productSection/bikeSection/BikeSection';
import CarSection from '../../core/components/design/productSection/carSection/CarSection';
import MobileSection from '../../core/components/design/productSection/mobileSection/MobileSection';
import AllCategoriesIcons from '../../core/components/design/categories/categoryIcons/AllCategoriesIcons';
import FeatureImage from '../../core/components/design/featureImage/FeatureImage';
import CategoriesList from '../../core/components/design/categories/categoryLinks/CategoriesList';
import MainHeader from '../../core/components/design/header/mainHeader/MainHeader';
import ScrollToTop from '../../ScrollToTop';


export default function AppRouter() {
  return (
    
      <Routes>
        <Route
          path={'/'}
          element={
            <>
              <MainHeader />
              <Divider className=""/>
              <CategoriesList />
              <FeatureImage />
              <AllCategoriesIcons />
              <MobileSection />
              <CarSection />
              <BikeSection />
              <CatSection />
              <Footer />
            </>
          }
        />

        <Route path='/details' element={<ProductDetails />} />
      </Routes>
  );
}
