
import { IoCarSportOutline } from 'react-icons/io5';
import HeaderOptions from './HeaderOptions';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

export default function HeaderCatagories () {
    return (
        <>
        <div className="flex items center gap-6">

        <HeaderOptions text={"Motors"} Icon={IoCarSportOutline} />
        <HeaderOptions text={"Property"} Icon={HiOutlineBuildingOffice2} />
        </div>
        </>

    )
}