import { FcGoogle } from 'react-icons/fc';
import OLX_LOGO from '../../../../../assets/login/olx.svg';
import ChatBtn from '../productDetailPage/userDetails/ChatBtn';
import { TiSocialFacebook } from 'react-icons/ti';
import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';

interface LoginModal {
  openFromComponent: boolean;
  closeFromComponent: (a: boolean) => void;
}

export function LoginModal({ openFromComponent, closeFromComponent }: LoginModal) {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(openFromComponent);
  }, [openFromComponent]);

  return (
    <>
      <Modal
        className="z-[2000]"
        show={openModal}
        onClose={() => {
          setOpenModal(false);
          closeFromComponent(false);
        }}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body className=''>
          <div className="space-y-2 flex flex-col items-center ">
            <img
              className="w-[80px] "
              src={OLX_LOGO}
              alt=""
            />
            <h1 className="font-bold text-2xl py-8 text-center">Login into your OLX account</h1>
            <ChatBtn
              text="Login with Google"
              Icon={FcGoogle}
            />
            <ChatBtn
              text="Login with Facebook"
              Icon={TiSocialFacebook}
            />
            <p className="my-5">OR</p>
            <ChatBtn
              text="Login with Email"
              Icon={AiOutlineMail}
            />

            <ChatBtn
              text="Login with Phone"
              Icon={MdOutlineLocalPhone}
            />

            <p className='text-primaryBlue font-bold py-6'>New to OLX? Create an account</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
