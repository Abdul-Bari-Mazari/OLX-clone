import { IconType } from 'react-icons';
import { RiChat3Line } from 'react-icons/ri';

interface ChatBtnProps {
  text: string,
  Icon: IconType,
}

export default function ChatBtn({text, Icon}: ChatBtnProps) {
  return (
    <>
      <button className="text-primaryBlack border-2 border-primaryBlack font-semibold flex items-center justify-center gap-2 w-full rounded cursor-pointer py-[8px] mt-4 hover:border-4 hover:py-[6px]">
        <Icon className="font-bold text-xl" /> {text}
      </button>
    </>
  );
}
