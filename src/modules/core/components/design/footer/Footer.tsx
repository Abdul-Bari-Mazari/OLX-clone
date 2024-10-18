import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci';
import FooterItem from './FooterItem';
import PLAY_STORE from '../../../../../assets/install-app-icons/play-store.svg';
import APPLE_STORE from '../../../../../assets/install-app-icons/apple-store.svg';
import HUAWEI from '../../../../../assets/install-app-icons/huawei.svg';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#ebeeef] text-gray-600 body-font w-full border-t-gray-300">
        <div className="max-w-7xl pt-5 pb-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className=" text-sm font-semibold mt-5 lg:mt-0">
                FOLLOW US
              </span>
            </a>
            <p className="flex justify-center md:justify-start gap-2 text-black text-xl hover:cursor-pointer">
              <CiFacebook />
              <CiTwitter />
              <CiInstagram />
              <CiYoutube />
            </p>

            <div className="flex flex-wrap gap-2 mt-10">
              <img
              className='w-20'
                src={APPLE_STORE}
                alt=""
              />
              <img
              className='w-20'
                src={PLAY_STORE}
                alt=""
              />
              <img
              className='w-20'
                src={HUAWEI}
                alt=""
              />
            </div>
          </div>
          <div className="flex-grow flex gap-3 lg:gap-0 flex-wrap md:pr-20 mb-10 md:text-left text-center order-first">
            <FooterItem
              itemHeading="POPULAR CATEGORIES"
              link1="Mobiles Phone"
              link2="Cars for sale"
              link3="Bikes"
              link4="Cats"
            />
            <FooterItem
              itemHeading="TRENDING SEARCHES"
              link1="Bikes"
              link2="Cars"
              link3="Mobiles"
              link4="Cats"
            />
            <FooterItem
              itemHeading="ABOUT US"
              link1="About Dubizzle Group"
              link2="OLX Blog"
              link3="Contact Us"
              link4="OLX for Business"
            />
            <FooterItem
              itemHeading="OLX"
              link1="Help"
              link2="Sitemap"
              link3="Terms of use"
              link4="Privacy Policy"
            />
          </div>
        </div>
        <div className="bg-[#002f34]">
          <div className="container mx-auto py-4 px-5 flex gap-3 justify-center sm:justify-end">
            <p className="text-white font-bold text-xs tracking-wide text-center sm:text-left">
              Free Classifieds in Pakistan
              <span className="font-normal"> . © 2006-2024 OLX</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
