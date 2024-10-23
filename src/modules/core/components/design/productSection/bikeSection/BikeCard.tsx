import H2R from '../../../../../../assets/bikes/h2r.webp';
import SUZUKI_110 from '../../../../../../assets/bikes/110.jpg';
import HONDA_70 from '../../../../../../assets/bikes/125.webp';
import HONDA_125 from '../../../../../../assets/bikes/70.jpg';
import SUZUKI_150 from '../../../../../../assets/bikes/150.jpg';
import R1 from '../../../../../../assets/bikes/r1.jpg';
import HARLEY from '../../../../../../assets/bikes/harley.jpg';
import HAYABUSA from '../../../../../../assets/bikes/hayabusa.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductSkeleton from '../ProductSkeleton';
import { BiHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface Data {
  make: string;
  model: string;
  engine: string
}

interface ReponseType {
  data: Data[];
}

export default function BikeCard() {
  const [responseData, setResponseData] = useState<Data[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const apikey: string = 'mQiu0j47lw3sCsEKDMUjJA==pOhqLDUb7uLvs8va';

  useEffect(() => {
    axios
      .get(
        `https://api.api-ninjas.com/v1/motorcycles?make=kawasaki&model=ninja`,
        {
          headers: {
            'X-Api-Key': apikey,
          },
        }
      )
      .then((response: ReponseType) => {
        setResponseData(response.data);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
      });
  }, []);

  return (
    <>
      {loader ? (
        <ProductSkeleton />
      ) : (
        responseData.slice(0, 4).map((key, index) => {
          const bikeImagesArr: string[] = [
            H2R,
            SUZUKI_110,
            SUZUKI_150,
            HARLEY,
            HAYABUSA,
            HONDA_125,
            HONDA_70,
            R1,
          ];
          const randomBikeImages: string =
            bikeImagesArr[Math.floor(Math.random() * bikeImagesArr.length)];

          const itemPrice: number = Math.floor(Math.random() * 2000000);
          const noDecimalPrice: string = itemPrice.toFixed();
          const priceWithComma: string =
            Number(noDecimalPrice).toLocaleString();

          const location: string[] = [
            'M.A. Jinnah Road, Karachi',
            'Bahria Town, Lahore',
            'Kalma Chowk, Lahore',
            'DHA Phase 1, Lahore',
            'Jamshed Road, Karachi',
            'Gulberg, Lahore',
            'Gulshan-eIqbal Town, Karachi',
            'Zamzama, Karachi',
            'Wapda Town Phase 1, Lahore',
            'Gulshan e Hadeed, Karachi',
            'Shah Town, Karachi',
            'Port Qasim, Karachi',
            'Malir, Karachi',
          ];

          const timePassed: string[] = [
            '1 month ago',
            '2 months ago',
            '1 week ago',
            '2 weeks ago',
            'a day ago',
            '2 days ago',
          ];

          const randomTimePassed: string =
            timePassed[Math.floor(Math.random() * timePassed.length)];

          const randomLocation: string =
            location[Math.floor(Math.random() * location.length)];

          interface RouteDataTypes {
            title: string;
            image: string | undefined;
            price: string;
            description: string;
            itemLocation: string;
            shipTime: string;
            brand: string;
            category: string;
          }

          const routeData: RouteDataTypes = {
            title: key.model,
            image: randomBikeImages,
            price: priceWithComma,
            description: key.engine,
            itemLocation: randomLocation,
            shipTime: randomTimePassed,
            brand: key.make,
            category: "Motorbike",
          };

          return (
            <>
            <Link to={'/details'} state={routeData}>
              <div
                key={index}
                className="flex flex-col items-start-gap-3 rounded-sm border border-gray-300 min-w-[300px] cursor-pointer"
              >
                <img
                  className="rounded-sm h-36 object-cover"
                  src={randomBikeImages}
                  alt=""
                />
                <div className="flex flex-col items-start p-4">
                  <div className="flex justify-between items-center w-full">
                    <p className="font-bold">{`Rs ${priceWithComma}`}</p>
                    <BiHeart className="text-2xl" />
                  </div>
                  <p className="whitespace-break-spaces">{`${key.make}, ${key.model}`}</p>
                  <div className="flex flex-col gap-1 mt-3">
                    <p className="text-sm text-gray-600">{randomLocation}</p>
                    <p className="text-xs text-gray-600">{randomTimePassed}</p>
                  </div>
                </div>
              </div>
            </Link>

            </>
          );
        })
      )}
    </>
  );
}
