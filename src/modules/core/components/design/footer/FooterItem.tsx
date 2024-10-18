interface FooterItemProps {
    itemHeading: string,
    link1: string,
    link2: string,
    link3: string,
    link4: string
}

export default function FooterItem({itemHeading, link1, link2, link3, link4}: FooterItemProps) {
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-gray-900 text-sm mb-3">
          {itemHeading}
        </h2>
        <nav className="list-none mt-3 flex flex-col gap-1 text-xs">
          <li>
            <a className="text-gray-400 hover:text-black hover:cursor-pointer">{link1}</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-black hover:cursor-pointer">{link2}</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-black hover:cursor-pointer">{link3}</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-black hover:cursor-pointer">{link4}</a>
          </li>
        </nav>
      </div>
    </>
  );
}
