import { FiPhone } from 'react-icons/fi';

export default function ShowPhoneBtn() {
  return (
    <>
      <button className="bg-primaryBlack text-white font-bold flex items-center justify-center gap-2 w-full rounded cursor-pointer py-3 mt-4">
        <FiPhone className="font-bold text-xl" /> Show phone number
      </button>
    </>
  );
}
