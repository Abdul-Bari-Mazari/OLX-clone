import { SlLocationPin } from 'react-icons/sl';

interface LocationBoxProps {
  itemLocation: string;
}

export default function LocationBox({ itemLocation }: LocationBoxProps) {
  return (
    <>
      <div className="flex flex-col gap-2 p-4 mt-3 border border-gray-300 rounded-md">
        <h1 className="font-bold text-2xl">Location</h1>
        <div className="flex items-center gap-2">
          <SlLocationPin className='text-xl font-bold' />
          <p>{itemLocation}</p>
        </div>
      </div>
    </>
  );
}
