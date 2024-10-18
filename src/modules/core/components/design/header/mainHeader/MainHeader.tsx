import LocationSelect from '../secondaryHeader/LocationSelect';
import HeaderTop from '../topHeader/HeaderTop';
import LoginBtn from './LoginBtn';
import SearchBar from './SearchBar';
import SellButton from './SellButton';

export default function MainHeader() {
  return (
    <>
    <div className="w-full bg-white sticky top-0 z-[1000] py-5">

      <div className="max-w-7xl mx-auto flex flex-col items-start gap-5 ">
        <HeaderTop />
        <div className="flex flex-wrap md:flex-nowrap items-center gap-3 w-full">
          <LocationSelect />
          <SearchBar />
          <LoginBtn />
          <SellButton />
        </div>
      </div>
    </div>
    </>
  );
}
