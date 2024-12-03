
import { useFormContext } from 'react-hook-form';
import ContainerForm from "./ContainerForm";
import { Accommodationtypes } from "../../../constants";




const Types = () => {
    const { register, watch } = useFormContext()
    const valueType = watch("type")
    return (
        <ContainerForm title='What type of accommodation do you have?'>

            <div className='grid grid-cols-3 grid-rows-2 mb-4 h-full gap-4 '>
                {Accommodationtypes.map((type) => (
                    <label key={type.label} className={` ${valueType === type.label && "outline outline-offset-2 outline-stone-400"}
                    flex flex-col justify-center text-start gap-3 bg-primary cursor-pointer 
                     items-center   rounded-lg  hover:outline hover:outline-offset-2 hover:outline-stone-400 hover:opacity-95  transition-all duration-200`}>
                        <input type="radio" value={type.label} className='hidden ' {...register("type")} />

                        <type.icon size={45} />
                        <span className=' text-secondary text-md font-semibold  '>
                            {type.label}
                        </span>
                    </label>
                ))}


            </div>
        </ContainerForm >

    )
}

export default Types