import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useSearchBar } from '../../../contexts/SearchBarContext';
import { AccommodationFormData } from '../../../types';
import DatePicker from 'react-datepicker';
import InputNumberFilter from '../../../pages/accommodation/components/InpuntNumberFilter';
import { IoPerson } from 'react-icons/io5';
import { FaChildren } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export type PropsAccommodation = { accommodation: AccommodationFormData };

const GuestInfoSchema = z.object({
    checkIn: z.date({
        required_error: "Check-in date is required",
        invalid_type_error: "Invalid date format",
    }),
    checkOut: z.date({
        required_error: "Check-out date is required",
        invalid_type_error: "Invalid date format",
    }),
    adultCount: z.string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val) && val > 0, {
            message: 'Must be a number greater than zero',
        }),
    childCount: z.string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val), {
            message: 'Must be a number equal to or greater than zero',
        }),
});

type GuestInfoFormData = z.infer<typeof GuestInfoSchema>;

const GuestInfo = ({ accommodation }: PropsAccommodation) => {
    const search = useSearchBar();
    const navigate = useNavigate();
    const searchBar = useSearchBar()



    const methods = useForm({
        resolver: zodResolver(GuestInfoSchema),
        defaultValues: {
            checkIn: new Date(),
            checkOut: (() => {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                return tomorrow;
            })(),
            adultCount: "0",
            childCount: "0",
        },
        mode: 'onChange',
        shouldUseNativeValidation: true,
    });

    const { watch, formState: { errors } } = methods;
    const checkIn = watch('checkIn');
    const checkOut = watch('checkOut');
    const adultCount = watch('adultCount');
    const childCount = watch('childCount');



    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);




    const handleClick = () => {

        searchBar.checkIn = checkIn,
            searchBar.checkOut = checkOut,
            searchBar.adultCount = parseInt(adultCount),
            searchBar.childrenCount = parseInt(childCount),

            navigate(`/reservation-accommodation/${accommodation._id}`);
    };

    const isButtonDisabled = Object.keys(errors).length > 0;


    return (
        <div className="sticky top-5 text-primary/95 rounded-xl border-2 border-white/80 bg-secondary/95 shadow shadow-secondary/40 drop-shadow-2xl max-h-[350px] lg:max-h-96 w-full p-6">
            <h3 className="font-semibold text-2xl lg:text-3xl w-full text-center">Make reservation</h3>
            <span className="font-semibold mt-4 inline-block text-xl">Add dates</span>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleClick)} className="flex mt-4 flex-col">
                    <div className="w-full gap-1">
                        <label className="bg-primary flex flex-col w-full rounded-md py-1 px-2 text-secondary/95 font-semibold">
                            Check-in | Check-out
                            <DatePicker
                                selectsRange={true}
                                startDate={checkIn}
                                endDate={checkOut}
                                onChange={(update) => {
                                    methods.setValue('checkIn', update[0]);
                                    methods.setValue('checkOut', update[1]);
                                }}
                                minDate={minDate}
                                maxDate={maxDate}
                                isClearable={true}
                                className="bg-transparent w-full h-6 font-semibold p-2 focus:outline-none"
                            />
                        </label>
                    </div>
                    <div className="my-6 space-y-4">
                        <InputNumberFilter label="Adults" name="adultCount" icon={IoPerson} />

                        <InputNumberFilter label="Children" name="childCount" icon={FaChildren} />
                    </div>
                    <button
                        type="submit"
                        disabled={isButtonDisabled}
                        className={`bg-primary flex items-center justify-center text-secondary/95 font-semibold py-3 rounded-lg transition-opacity duration-300 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-75'
                            }`}
                    >
                        Book Now
                    </button>
                </form>
            </FormProvider>
        </div>
    );
};

export default GuestInfo;
