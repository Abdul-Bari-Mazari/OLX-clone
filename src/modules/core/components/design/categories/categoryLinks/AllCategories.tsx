import { BsChevronDown } from 'react-icons/bs';

export default function AllCategories() {
  return (
    <>
      <div className="flex items-center gap-2 cursor-pointer mr-4">
        <p className="font-semibold text-sm">ALL CATEGORIES</p>
        <BsChevronDown  />
      </div>
    </>
  );
}
