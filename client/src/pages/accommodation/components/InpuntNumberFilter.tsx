import { useFormContext } from 'react-hook-form'
import { IconType } from 'react-icons';
import useInputNumber from '../../../hooks/useInputNumber';
import { IoAdd, IoRemove } from "react-icons/io5";

type Props = {
    label: string,
    name: string,
    icon: IconType
    // valueInput: string
}

const InputNumberFilter = ({ label, name, icon: Icon }: Props) => {
    const { increment, decrement } = useInputNumber(name)
    const { register } = useFormContext()
    return (
        <div className="w-full  flex justify-between items-center gap-x-3">
            <div className='flex gap-x-1.5 items-center'>
                {<Icon size={17} />}
                <span className="block font-normal text-sm  text-primary ">
                    {label}
                </span>
            </div>
            <div className="flex items-center ">

                <button onClick={decrement} type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl  bg-primary text-secondary shadow-sm transition-opacity duration-200 hover:opacity-85 " >
                    <IoRemove />
                </button>

                <input
                    className=" w-8 bg-transparent border-0 text-primary text-center focus:outline-none "
                    {...register(name)}
                />
                <button onClick={increment} type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl  bg-primary text-secondary shadow-sm transition-opacity duration-200 hover:opacity-85 " >
                    <IoAdd />
                </button>

            </div>
        </div>
    )
}

export default InputNumberFilter