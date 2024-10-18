import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductSkeleton from '../ProductSkeleton';
import { BiHeart } from 'react-icons/bi';

interface Data {
  name: string;
  image_link: string
}

interface ReponseType {
  data: Data[];
}

export default function CatCard() {
  const [responseData, setResponseData] = useState<Data[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const apikey: string = 'mQiu0j47lw3sCsEKDMUjJA==pOhqLDUb7uLvs8va';

  useEffect(() => {
    axios
      .get(
        `https://api.api-ninjas.com/v1/cats?name=ShortHair`,
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
          return (
            <>
              <div
                key={index}
                className="flex flex-col items-start-gap-3 rounded-sm border border-gray-300 min-w-[300px] cursor-pointer"
              >
                <img
                  className="rounded-sm h-36 object-cover"
                  src={key.image_link}
                  alt=""
                />
                <div className="flex flex-col items-start p-4">
                  <div className="flex justify-between items-center w-full">
                    <p className="font-bold">{`Rs ${Math.floor(
                      Math.random() * 2000000
                    )}`}</p>
                    <BiHeart className="text-2xl" />
                  </div>
                  <p className="whitespace-break-spaces">{`${key.name}`}</p>
                  <div className="flex flex-col gap-1 mt-3">
                    <p className="text-sm text-gray-600">{randomLocation}</p>
                    <p className="text-xs text-gray-600">{randomTimePassed}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}
