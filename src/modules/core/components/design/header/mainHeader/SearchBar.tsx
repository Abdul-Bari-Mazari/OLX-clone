import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
   <>
   <div className="hidden sm:flex items-center w-full">
      <input className="w-full rounded-s-md border p-3  border-gray-300 text hover:bg-none outline-none placeholder:text-gray-500 focus:border-cyan-400" type="texts" placeholder="Find Cars, Mobile Phones and more..." />
    <BiSearch className="bg-primaryBlack rounded-r-md text-white  h-[49px] w-12 p-2 cursor-pointer" />
   </div>
   </>
  );
}