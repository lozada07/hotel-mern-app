import { FormProvider, useForm } from "react-hook-form";
import { TbWorldSearch } from "react-icons/tb";
import InputNumber from "../../ui/InputNumber";
import { AiFillSchedule } from "react-icons/ai";
import Calendar from "../../Calendar";
import { SearchBarContextProps, useSearchBar } from "../../../contexts/SearchBarContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const search = useSearchBar()
    const navigate = useNavigate()
    const methods = useForm()
    const onSubmit = methods.handleSubmit((values) => {
        search?.saveValues(values as SearchBarContextProps)
        navigate("/search")
    })


    return (
        <div className=' z-20 md:max-w-[80%] lg:max-w-[100%] xl:max-w-[90%] px-4 bg-secondary -mt-1 rounded-2xl py-5  shadow-2xl'>
            <FormProvider {...methods}>
                <form className="grid grid-cols-3 grid-rows-2  lg:grid-rows-1 lg:grid-cols-6 gap-3   " onSubmit={onSubmit}>

                    <div className=" bg-primary flex flex-col gap-1 px-2  border-r-2 border-secondary rounded-xl p-2 ">

                        <label htmlFor="text" className='text-secondary font-semibold left-2 top-1'>Location</label>
                        <div className="flex gap-x-2  h-full items-center ">
                            <TbWorldSearch className="hidden sm:w-5.5 sm:h-5.5 w-6 h-6 sm:block" />
                            <input type="text" {...methods.register("site")} className="block w-full bg-transparent text-xs font-bold max-w-32 focus:outline-none  h-full sm:text-sm text-gray-900 sm:font-semibold  placeholder:text-secondary/90 placeholder:font-semibold " placeholder="Where you from?" />
                        </div>
                    </div>


                    <div className=" bg-primary flex flex-col gap-1 px-2  border-r-2 border-secondary rounded-xl   p-2 ">

                        <label htmlFor="text" className='text-secondary font-semibold left-2 top-1'>Check-in</label>
                        <div className="flex gap-x-2  items-center h-full  justify-center ">
                            <AiFillSchedule className="hidden w-7 h-7 md:w-6 md:h-6 sm:block" />
                            <Calendar name="checkIn" />
                        </div>
                    </div>
                    <div className=" bg-primary flex flex-col gap-1 px-2  border-r-2 border-secondary rounded-xl  p-2 ">

                        <label htmlFor="text" className='text-secondary font-semibold left-2 top-1'>Check-out</label>
                        <div className="flex gap-x-2  items-center h-full  justify-center">
                            <AiFillSchedule className="hidden w-7 h-7 md:w-6 md:h-6 sm:block" />
                            <Calendar name="checkOut" />

                        </div>
                    </div>
                    <div className="bg-primary flex flex-col  rounded-xl w-full ">
                        <InputNumber name="adultCount" labelName="Adults" fullHeight={true} />
                    </div>

                    <div className="bg-primary flex flex-col border-r-2 border-secondary rounded-xl w-full  ">
                        <InputNumber name="childrenCount" labelName="Child" fullHeight={true} />
                    </div>
                    <button type="submit" className="bg-primary rounded-2xl px-6 transition-opacity duration-300 text-secondary font-semibold">
                        Search
                    </button>
                </form>

            </FormProvider>

        </div>
    )
}

export default SearchBar