import { useFormContext } from "react-hook-form"

const InputRange = () => {
    const { register, watch } = useFormContext()

    const value = watch("price", 0)
    return (
        <div className="border-b border-primary pb-5">
            <h4 className="text-md font-semibold mb-2">Price</h4>

            <input type="range" className="w-full h-2 accent-primary bg-primary/20 rounded-lg appearance-none cursor-pointer text-primary"
                min={0}
                step={25}
                max={500}
                value={value}
                {...register("price")}
            />
            <span className="text-primary  inline-block mt-2"> ${value}</span>
        </div>

    )
}

export default InputRange