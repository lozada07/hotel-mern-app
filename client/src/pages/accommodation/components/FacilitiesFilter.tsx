import { useFormContext } from "react-hook-form"
import { Accommodationfacilities } from "../../../constants"
import { FaCheck } from "react-icons/fa";

const FacilitiesFilter = () => {
    const { register } = useFormContext()
    return (

        <div className="border-b border-primary pb-5">
            <h4 className="text-md font-semibold mb-2">Facilities</h4>
            {Accommodationfacilities.map((facility) => (
                <div className="flex items-center" key={facility.label}>
                    <label className="relative flex items-center p-1 rounded-full cursor-pointer" htmlFor="check">
                        <input type="checkbox"
                            className="before:content[''] mr-1 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-primary checked:before:bg-primary "
                            id="check"
                            value={facility.label}
                            {...register("facilities")}
                        />

                        <span
                            className="absolute text-secondary transition-opacity opacity-0 pointer-events-none top-2/4 left-3.5 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <FaCheck size={12}/>
                        </span>
                    </label>
                    <label className="mt-px flex gap-x-2 items-center text-[14px] font-normal text-primary cursor-pointer select-none" htmlFor="check">
                        {<facility.icon size={20} />}
                        <span >{facility.label}</span>
                    </label>
                </div>
            ))}
        </div>
    )
}

export default FacilitiesFilter