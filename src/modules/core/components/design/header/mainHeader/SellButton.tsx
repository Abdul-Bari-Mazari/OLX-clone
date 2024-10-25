import { useContext, useState } from 'react';
import { HiPlusSm } from 'react-icons/hi';
import { LoginModal } from '../../login/LoginPopup';

export default function SellButton() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const closeFromComponent = (val: boolean) => {
    setOpenModal(val)
  }
  return (
    <>
    <LoginModal openFromComponent={openModal} closeFromComponent={closeFromComponent} />
      <div
        onClick={() => {
          setOpenModal(true);
        }}
        className="flex items-center rounded-full border-5 border-r-blue-500 border-b-blue-500 border-t-cyan-300 font-bold border-l-yellow-300 px-3 py-1 mx-1 cursor-pointer"
      >
        <HiPlusSm className="w-7 h-7" />
        <p>SELL</p>
      </div>
    </>
  );
}
