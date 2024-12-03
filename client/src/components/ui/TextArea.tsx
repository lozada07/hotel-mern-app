import { useFormContext } from "react-hook-form";
import ErrorZod from "./ErrorZod";

const TextArea = () => {
    const { register, formState: { errors } } = useFormContext()



    return (
        <div className="flex flex-col gap-2 text-start ">
            <textarea
                {...register("description")}
                name="description"
                id=""
                cols={30}
                rows={7}
                className=" focus:outline-none rounded-md
             bg-primary p-2 placeholder:text-secondary placeholder:font-semibold placeholder:text-sm "
                placeholder="Description"
            />


            <ErrorZod message={errors["description"]?.message as string} />
        </div >
    )
}

export default TextArea
