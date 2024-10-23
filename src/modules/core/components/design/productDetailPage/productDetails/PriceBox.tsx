import { CiHeart } from 'react-icons/ci';
import { IoShareSocialOutline } from 'react-icons/io5';
import { SlLocationPin } from 'react-icons/sl';

interface PriceBox {
  itemPrice: string;
  itemName: string;
  itemLocation: string;
  shipTime: number;
  timePassed: string,
}

export default function PriceBox({
  itemPrice,
  itemLocation,
  itemName,
  shipTime,
  timePassed,
}: PriceBox) {

  return (
    <>
      <div className="flex flex-col w-full p-4 border border-gray-300 mt-4 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">{`Rs ${itemPrice}`}</h1>
          <div className="flex items-center gap-3 text-2xl">
            <IoShareSocialOutline />
            <CiHeart />
          </div>
        </div>
        <h1 className="mt-4 font-bold text-xl">{itemName}</h1>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 mt-3">
            <SlLocationPin />
            <p>{itemLocation}</p>
          </div>
          <p>{timePassed}</p>
        </div>
      </div>
    </>
  );
}
