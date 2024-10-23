import axios from 'axios';
import { useEffect, useState } from 'react';
import UserDetailSkeleton from './UserDetailSkeleton';
import { BiChevronRight } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';

interface Users {
  firstName: string;
  lastName: string;
  image: string;
  birthDate: string;
}

interface ResponseType {
  data: {
    users: Users[];
  };
}

export default function UserProfile() {
  const [userData, setUserData] = useState<Users | null>();
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((response: ResponseType) => {
        const lengthOfUsers: number = response.data.users.length;
        const randomUser: Users =
          response.data.users[Math.floor(Math.random() * lengthOfUsers)];
        setUserData(randomUser);
        setLoader(false);
      })
      .catch((error: string) => {
        console.log(error);
        setLoader(false);
      });
  }, []);

  return (
    <>
      {loader ? (
        <UserDetailSkeleton />
      ) : (
        userData && (
          <div className="flex gap-2 mt-3 cursor-pointer">
            <div>
              <img
                className="rounded-full w-16 border border-gray-500 object-contain"
                src={userData.image}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
                <p className='font-semibold text-sm'>{`${userData.firstName} ${userData.lastName}`}</p>
                <p className='text-sm'>{`Member since ${userData.birthDate.slice(0, userData.birthDate.indexOf("-"))}`}</p>
                <p className='flex items-center gap-2 font-semibold text-sm'>See profile <BsChevronRight /></p>
            </div>
          </div>
        )
      )}
    </>
  );
}
