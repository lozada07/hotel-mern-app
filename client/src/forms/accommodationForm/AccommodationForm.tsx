import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import StepContainer from './components/StepContainer'
import { AccommodationFormData, PropsMultiStepForm } from '../../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useCreateAccommodation } from '../../libs/react-query/queryMutation/AccommodationMutation'

const AccommodationForm = ({ form }: { form: PropsMultiStepForm }) => {

    const methods = useForm<AccommodationFormData>({ resolver: zodResolver(form.schema) })
    const [data, setData] = useState<AccommodationFormData>({
        name: "",
        adultCount: 0,
        childrenCount: 0,
        bathroomCount: 0,
        bedroomCount: 0,
        city: "",
        country: "",
        description: "",
        facilities: [],
        price: 0,
        starRating: 0,
        type: "",

    })
    const { mutateAsync: createAccommodation, isPending: loading, } = useCreateAccommodation()
    const navigate = useNavigate()





    const onSubmit = methods.handleSubmit((values: AccommodationFormData) => {

        if (!form.isLastStep) {
            setData((prevData) => {
                return { ...prevData, ...values };
            })
            return form.next()

        }

        const finallyData = { ...data, ...values }

        const formData = new FormData()


        formData.append("name", finallyData.name);
        formData.append("city", finallyData.city);
        formData.append("country", finallyData.country);
        formData.append("description", finallyData.description);
        formData.append("type", finallyData.type);
        formData.append("price", finallyData.price.toString());
        formData.append("starRating", finallyData.starRating.toString());
        formData.append("adultCount", finallyData.adultCount.toString());
        formData.append("childrenCount", finallyData.childrenCount.toString());
        formData.append("bathroomCount", finallyData.bathroomCount.toString());
        formData.append("bedroomCount", finallyData.bedroomCount.toString());


        finallyData.facilities.forEach((facility, index) => {
            formData.append(`facilities[${index}]`, facility);
        });

        // if (data.imageUrls) {
        //     data.imageUrls.forEach((url, index) => {
        //         formData.append(`imageUrls[${index}]`, url);
        //     });
        // }
        if (finallyData.images) {

            Array.from(finallyData.images).forEach((imageFile) => {
                formData.append(`images`, imageFile);
            });
        }


        createAccommodation(formData)


    })

    const handleBack = () => {
        if (!form.isFirstStep) {
            form.back()
        } else {
            navigate("/");
        }
    }



    return (
        <div className=' w-full rounded-md flex  flex-1 md:flex-auto gap-2'>
            <FormProvider {...methods}>
                <form className='w-full flex  flex-col gap-4' onSubmit={onSubmit}>

                    <StepContainer form={form} />
                    <div className='flex  justify-between items-center '>
                        <button type='button' onClick={handleBack} className='px-6 bg-primary py-2 rounded-md  text-secondary font-semibold shadow-md text-roboto hover:opacity-80   transition-opacity duration-300'>
                            {!form.isFirstStep ? 'Back' : "Cancel"}
                        </button>

                        <button type='submit' disabled={loading} className='px-6  bg-primary  py-2 rounded-md   text-secondary font-semibold shadow-md text-roboto hover:opacity-80    transition-opacity duration-300' >
                            {!form.isLastStep ? "Next" : "Create"}
                        </button>

                    </div>

                </form>
            </FormProvider>
        </div >
    )
}

export default AccommodationForm