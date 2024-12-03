import { useFormContext } from 'react-hook-form'
import { GoAlertFill } from "react-icons/go";
import ErrorZod from './ErrorZod';

type Props = {
    type: string,
    name: string
    labelName: string

}



const Input = ({ type, name, labelName }: Props) => {
    const { formState: { errors }, register } = useFormContext()

    return (
        <div className="relative mb-2">
            <input type={type}
                id={name}
                {...register(name)}
                className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-primary border-0 border-b-4 border-secondary/50 appearance-none focus:outline-none focus:ring-0 font-semibold  peer" placeholder=" " />
            <label htmlFor="input" className="absolute text-sm font-semibold text-secondary  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ">
                {labelName}
            </label>

            <ErrorZod message={errors[name]?.message as string} />
        </div>
    )
}

export default Input