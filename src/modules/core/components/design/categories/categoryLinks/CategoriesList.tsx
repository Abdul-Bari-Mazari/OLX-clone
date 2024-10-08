import AllCategories from './AllCategoriesDropdown';
import Category from './Category';

export default function CatagoriesList() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex items-center gap-3 relative">
        <AllCategories />
        <div className='hidden md:flex items-center gap-5'>
          <Category text="Mobile Phones" />
          <Category text="Cars" />
          <Category text="Motorcycles" />
          <Category text="Houses" />
          <Category text="Tablets" />
        </div>
      </div>
    </>
  );
}
