import OLX_LOGO from '../../../../../../assets/olx-logo.png';
import HeaderCatagories from './HeaderCatagories';

export default function HeaderTop() {
  return (
    <>
      <div className="flex items-center gap-11">
        <img
          src={OLX_LOGO}
          width={60}
          className="cursor-pointer"
          alt=""
        />
        <HeaderCatagories />
      </div>
    </>
  );
}
