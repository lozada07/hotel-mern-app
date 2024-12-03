import { useFormContext } from "react-hook-form";
import ContainerForm from "./ContainerForm"
import InputNumber from "../../../components/ui/InputNumber";


const AccommodationDetail = () => {
    const { register } = useFormContext()

    return (
        <ContainerForm title="Hotel Detail">
            <div className="space-y-10">
                <div className="flex text-start items-center gap-10 ">
                    <div className="w-full">
                        <label className="text-primary">
                            Price
                        </label>
                        <div className="relative mt-2  ">
                            <span className="h-6 text-secondary absolute left-3 inset-y-0 my-auto">
                                &#x24;
                            </span>
                            <input
                                {...register("price")}
                                type="number"
                                placeholder="0.00"
                                className="w-full pl-8 pr-3 py-2 text-base appearance-none placeholder:text-secondary bg-primary outline-none shadow-sm rounded-lg"
                            />

                        </div>
                    </div>
                    <div className="relative w-full max-w-full mx-auto ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-8  bottom-0 w-5 h-5 my-auto text-secondary right-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <label className="text-primary">
                            Star Rating
                        </label>
                        <select  {...register("starRating")} className="w-full px-4 mt-2 py-2  text-base text-secondary bg-primary  rounded-lg shadow-sm outline-none appearance-none ">
                            {[1, 2, 3, 4, 5].map((value, index) => (
                                <option key={index} className="flex gap-2">
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex flex-row gap-10   ">
                    <InputNumber name="adultCount" labelName="Adults" />
                    <InputNumber name="childrenCount" labelName="Children" />
                </div>
                <div className="flex flex-row gap-10  ">
                    <InputNumber name="bathroomCount" labelName="Bathroom" />
                    <InputNumber name="bedroomCount" labelName="Bedroom" />
                </div>
            </div>

        </ContainerForm>
    )
}

export default AccommodationDetail