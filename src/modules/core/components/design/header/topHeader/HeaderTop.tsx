import { useLocation, useNavigate } from 'react-router-dom';
import OLX_LOGO from '../../../../../../assets/olx-logo.png';
import HeaderCatagories from './HeaderCatagories';

export default function HeaderTop() {

  const navigate = useNavigate()
  console.log(navigate)
  return (
    <>
      <div className="flex items-center gap-11">
        <img
        onClick={() => {
         navigate('/')
        }}
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
