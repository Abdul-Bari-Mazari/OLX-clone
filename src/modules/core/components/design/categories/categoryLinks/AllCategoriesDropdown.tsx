import { MegaMenu } from 'flowbite-react';
import { BsChevronDown } from 'react-icons/bs';
import SubCategories from './SubCategories';
import { useState } from 'react';

export default function AllCategoriesDropdown() {
  const [menu, setMenu] = useState<boolean>(false);
  const menuHandles = () => {
    setMenu(!menu);
  };

  return (
    <MegaMenu
      className={`flex
     justify-center items-center w-full md:block md:w-auto`}
    >
      <MegaMenu.DropdownToggle className="relative">
        <p   onClick={menuHandles} className="font-semibold text-sm">ALL CATEGORIES</p>
        <BsChevronDown className="text-lg ml-2" />
      </MegaMenu.DropdownToggle>
      {menu && (
        <MegaMenu.Dropdown>
          <ul className="absolute top-1 left-0 mx-auto mt-6 w-full px-4 py-5 flex justify-around items-start flex-wrap z-[2000] bg-white">
            <SubCategories
              catagoryHeading="Mobiles"
              subCategory1="Accessories"
              subCategory2="Mobiles Phone"
              subCategory3="Tablets"
              subCategory4="Smart Watches"
              subCategory5=""
            />
            <SubCategories
              catagoryHeading="Bikes"
              subCategory1="Motorcycles"
              subCategory2="Bicycles"
              subCategory3="Spare Parts"
              subCategory4="Scooters"
              subCategory5=""
            />
            <SubCategories
              catagoryHeading="Vehicles"
              subCategory1="Cars"
              subCategory2="Cars Accessories"
              subCategory3="Spare Parts"
              subCategory4="Buses, Vans & Trucks"
              subCategory5="Other Vehicles"
            />
            <SubCategories
              catagoryHeading="Property for Sale"
              subCategory1="Land & Plots"
              subCategory2="Houses"
              subCategory3="Apartments & Flats"
              subCategory4="Shops - offices - Commercial Space"
              subCategory5="Portions & Floors"
            />

            <SubCategories
              catagoryHeading="Fashion & Beauty"
              subCategory1="Clothes"
              subCategory2="Watches"
              subCategory3="Footwear"
              subCategory4="Bags"
              subCategory5="Fragnance"
              subCategory6="Other Fashion"
            />

            <SubCategories
              catagoryHeading="Electronics & Home Appliances"
              subCategory1="Computers & Accessories"
              subCategory2="Televisions & Accessories"
              subCategory3="AC & Coolers"
              subCategory4="Games & Entertainment"
              subCategory5="Cameras & Accessories"
              subCategory6="Fans"
            />

            <SubCategories
              catagoryHeading="Animals"
              subCategory1="Hens"
              subCategory2="Parrots"
              subCategory3="Cats"
              subCategory4="Pet Food & Accessories"
              subCategory5="Fish"
              subCategory6="Rabbits"
            />
            <SubCategories
              catagoryHeading="Kids"
              subCategory1="Toys"
              subCategory2="Kids Furniture"
              subCategory3="Kids Clothing"
              subCategory4="Swings & Slides"
              subCategory5="Kids Accessories"
            />
          </ul>
        </MegaMenu.Dropdown>
      )}
    </MegaMenu>
  );
}
