import styled, { css } from 'styled-components';

interface SubCategoriesProps {
  catagoryHeading: string;
  subCategory1: string;
  subCategory2: string;
  subCategory3: string;
  subCategory4: string;
  subCategory5?: string;
  subCategory6?: string;
}

export default function SubCategories({
  catagoryHeading,
  subCategory1,
  subCategory2,
  subCategory3,
  subCategory4,
  subCategory5,
  subCategory6,
}: SubCategoriesProps) {
  const primaryHoverEffect = css`
    &:hover {
      color: rgb(59 130 246);
    }
  `;

  const CategoryHeading = styled.div``;

  const CategoryHeadingHover = styled(CategoryHeading)`
    ${primaryHoverEffect}
  `;

  return (
    <>
      <li className="">
        <a
          href="#"
          className="w-auto md:w-[300px] block rounded-lg px-1 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <CategoryHeadingHover className="font-semibold text-sm mt-6 mb-3">
            {catagoryHeading}
          </CategoryHeadingHover>
          <CategoryHeadingHover className="text-sm text-gray-500 dark:text-gray-400">
            {subCategory1}
          </CategoryHeadingHover>
          <CategoryHeadingHover className="text-sm text-gray-500 dark:text-gray-400">
            {subCategory2}
          </CategoryHeadingHover>
          <CategoryHeadingHover className="text-sm text-gray-500 dark:text-gray-400">
            {subCategory3}
          </CategoryHeadingHover>
          <CategoryHeadingHover className="text-sm text-gray-500 dark:text-gray-400">
            {subCategory4}
          </CategoryHeadingHover>
          <CategoryHeadingHover className="text-sm text-gray-500 dark:text-gray-400">
            {subCategory5}
          </CategoryHeadingHover>
          <CategoryHeadingHover className="text-sm text-gray-500 dark:text-gray-400">
            {subCategory6}
          </CategoryHeadingHover>
        </a>
      </li>
    </>
  );
}
