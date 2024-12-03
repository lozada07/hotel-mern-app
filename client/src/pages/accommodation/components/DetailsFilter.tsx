import { IoPerson } from "react-icons/io5"
import InputNumberFilter from "./InpuntNumberFilter"
import { FaBed, FaBath } from "react-icons/fa";


const DetailsFilter = () => {
    return (

        <div >
            <h4 className="text-md font-semibold mb-2">Details</h4>
            <div className="space-y-2.5">
                <InputNumberFilter label="Guest" name="guestCount" icon={IoPerson} />
                <InputNumberFilter label="Bathroom" name="bathroomCount" icon={FaBath} />
                <InputNumberFilter label="Bedroom" name="bedroomCount" icon={FaBed} />
            </div>

        </div>
    )
}

export default DetailsFilter