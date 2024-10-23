import { BiHeart } from 'react-icons/bi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductSkeleton from '../ProductSkeleton';
import { Link } from 'react-router-dom';

interface Product {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: [string, string?, string?];
  shippingInformation: string;
}

interface ResponseTypes {
  data: {
    products: Product[];
  };
}

export function MobileCard() {
  const [productData, setProductData] = useState<Product[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/category/smartphones')
      .then((response: ResponseTypes) => {
        setProductData(response.data.products);
        setLoader(false);
      })
      .catch(function (error: string) {
        console.log('error---->', error);
        setLoader(false);
      })
      .finally(function () {
        setLoader(false);
      });
  }, []);

  return (
    <>
      {loader ? (
        <ProductSkeleton />
      ) : (
        productData.slice(0, 4).map((val, index) => {
          const itemPrice: number = val.price * 285;
          const noDecimalPrice: string = itemPrice.toFixed();
          const priceWithComma: string =
            Number(noDecimalPrice).toLocaleString();

          const itemDescription: string = val.description;
          const shortDescription: string = `${itemDescription.slice(0, 50)}...`;

          const shipTime: string = val.shippingInformation;
          const searchShipTime: number = shipTime.search(/\d/);
        

          let adTime: string = ""

          let adTimePassed: string = '';
          const extractadTime = (a: number): string => {
              if (a !== -1) {
                adTimePassed = shipTime.slice(a, shipTime.length);
                return adTimePassed;
              } else {
                adTimePassed = '1 week';
                return adTimePassed;
              }
            };

            adTime = extractadTime(searchShipTime)

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

          const randomLocation: string =
            location[Math.floor(Math.random() * location.length)];

          interface RouteDataTypes {
            title: string;
            image: string | undefined;
            price: string;
            description: string;
            itemLocation: string;
            shipTime: number;
            timePassed: string,
          }

          const routeData: RouteDataTypes = {
            title: val.title,
            image: val.images[2],
            price: priceWithComma,
            description: itemDescription,
            itemLocation: randomLocation,
            shipTime: searchShipTime,
            timePassed: adTime,
          };

          return (
            <Link
              to="/details"
              state={routeData}
            >
              <div
                key={index}
                className="flex flex-col items-start-gap-3 rounded-sm border border-gray-300 max-w-[300px] cursor-pointer"
              >
                <img
                  className="rounded-sm h-36 object-contain"
                  src={val.images[2]}
                  alt=""
                />
                <div className="flex flex-col items-start p-4">
                  <div className="flex justify-between items-center w-full">
                    <p className="font-bold">{`Rs ${priceWithComma}`}</p>
                    <BiHeart className="text-2xl" />
                  </div>
                  <p className="whitespace-break-spaces">{shortDescription}</p>
                  <div className="flex flex-col gap-1 mt-3">
                    <p className="text-sm text-gray-600">{randomLocation}</p>
                    <p className="text-xs text-gray-600">{`${extractadTime(
                      searchShipTime
                    )} ago`}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </>
  );
}
