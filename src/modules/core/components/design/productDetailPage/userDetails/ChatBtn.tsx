import { RiChat3Line } from 'react-icons/ri';

export default function ChatBtn() {
  return (
    <>
      <button className="text-primaryBlack border-2 border-primaryBlack font-semibold flex items-center justify-center gap-2 w-full rounded cursor-pointer py-[8px] mt-4 hover:border-4 hover:py-[6px]">
        <RiChat3Line className="font-bold text-xl" /> Chat
      </button>
    </>
  );
}
