import { useLocation } from 'react-router-dom';
import MainHeader from '../../header/mainHeader/MainHeader';
import DetailImage from './DetailImage';
import Footer from '../../footer/Footer';
import CategoriesList from '../../categories/categoryLinks/CategoriesList';
import { Divider } from '@nextui-org/react';
import UserDetailSidebar from '../userDetails/UserDetailSidebar';
import PriceBox from './PriceBox';

export default function ProductDetails() {
  const routeData = useLocation();

  return (
    <>
      <div className="">
        <MainHeader />
        <Divider className="" />
        <CategoriesList />

        <div className="flex gap-3 max-w-7xl mx-auto mt-5">
          <div className="flex flex-col">
            <DetailImage image={routeData.state.image} />
            <PriceBox
              itemName={routeData.state.title}
              itemPrice={routeData.state.price}
              itemLocation={routeData.state.itemLocation}
              shipTime={routeData.state.shipTime}
              timePassed={routeData.state.timePassed}
            />
          </div>
          <UserDetailSidebar
            itemLocation={routeData.state.itemLocation}
            itemPrice={routeData.state.price}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
