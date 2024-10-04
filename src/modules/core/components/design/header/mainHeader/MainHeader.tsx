import LocationSelect from '../secondaryHeader/LocationSelect';
import HeaderTop from '../topHeader/HeaderTop';
import LoginBtn from './LoginBtn';
import SearchBar from './SearchBar';
import SellButton from './SellButton';

export default function MainHeader() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-5 sticky top-0">
        <HeaderTop />
        <div className="flex items-center gap-3 w-full">
          <LocationSelect />
          <SearchBar />
          <LoginBtn />
          <SellButton />
        </div>
      </div>
    </>
  );
}
