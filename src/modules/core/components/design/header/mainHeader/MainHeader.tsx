import LocationSelect from "../secondaryHeader/LocationSelect";
import HeaderTop from "../topHeader/HeaderTop";

export default function MainHeader() {
    return (
        <>
        <div className="flex flex-col items-start gap-5">
            <HeaderTop />
            <LocationSelect />
        </div>
        </>
    )
} 