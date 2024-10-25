import { useState } from 'react';
import { LoginModal } from '../../login/LoginPopup';

export default function LoginBtn() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const closeFromComponent = (val: boolean) => {
    setOpenModal(val);
  };
  return (
    <>
      <LoginModal
        openFromComponent={openModal}
        closeFromComponent={closeFromComponent}
      />
      <p
        onClick={() => {
          setOpenModal(true);
        }}
        className="text-primaryBlack font-bold border-b-2 cursor-pointer mx-4 border-primaryBlack hover:border-white"
      >
        Login
      </p>
    </>
  );
}
