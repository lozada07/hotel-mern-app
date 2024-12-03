
import ContainerForm from "./ContainerForm";

import { useFormContext } from 'react-hook-form';
import { Accommodationfacilities } from "../../../constants";




const Facilities = () => {
    const { register, watch } = useFormContext()

    const facilitiesValues = watch("facilities")
    return (
        <ContainerForm title='What facilities are available in your accommodation?'>

            <div className='grid grid-cols-4  h-full gap-4 '>
                {Accommodationfacilities.map((type) => (
                    <label key={type.label} className={`${facilitiesValues && facilitiesValues.includes(type.label) ? " outline outline-offset-2 outline-stone-400" : ""} cursor-pointer flex flex-col  justify-center text-start gap-3 bg-primary  items-center py-1  rounded-lg  hover:outline hover:outline-offset-2 hover:outline-stone-400  transition-all duration-200`}>
                        <input type="checkbox" className='hidden' value={type.label} {...register("facilities")} />
                        <type.icon size={45} />
                        <span className=' text-secondary text-md font-semibold  '>
                            {type.label}
                        </span>
                    </label>
                ))}


            </div>
        </ContainerForm>

    )
}

export default Facilities