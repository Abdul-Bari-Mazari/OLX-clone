import { Divider } from "@nextui-org/react";
import MainHeader from "./modules/core/components/design/header/mainHeader/MainHeader";
import CatagoriesList from "./modules/core/components/design/categories/categoryLinks/CategoriesList";

export default function App() {
  return (
    <>
    <div className="py-5 ">
      <MainHeader />
      <Divider className="my-4" />
      <CatagoriesList />
    </div>
      
    </>

  )
}