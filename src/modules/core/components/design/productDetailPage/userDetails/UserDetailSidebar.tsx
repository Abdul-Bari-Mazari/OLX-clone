import ChatBtn from './ChatBtn';
import LocationBox from './LocationBox';
import ShowPhoneBtn from './ShowPhoneBtn';
import UserProfile from './UserProfile';

interface UserDetaulProps {
  itemLocation: string;
  itemPrice: string;
}

export default function UserDetailSidebar({
  itemLocation,
  itemPrice,
}: UserDetaulProps) {
  return (
    <>
      <div className="flex flex-col flex-wrap w-full h-fit">
        <div className="flex flex-col border border-gray-300 rounded-md p-4 ">
          <h2 className="text-primaryBlack font-bold text-xl">
            Listed by private user
          </h2>
          <UserProfile />
          <ShowPhoneBtn />
          <ChatBtn />
        </div>
        <LocationBox itemLocation={itemLocation} />
      </div>
    </>
  );
}
