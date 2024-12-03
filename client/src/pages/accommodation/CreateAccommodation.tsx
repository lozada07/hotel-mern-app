
import AccommodationForm from '../../forms/accommodationForm/AccommodationForm'
import Steps from '../../forms/accommodationForm/Steps'
import { Facilities, AccommodationDetail, AccommodationInformation, Types, UploadImg } from '../../forms/accommodationForm/components'
import { useMultistepForm } from '../../hooks/useMultistepForm'
import { HotelDetailSchema, HotelFacilitiesSchema, HotelInformationSchema, HotelTypeSchema, HotelUploadSchema } from '../../libs/zodSchema/AccommodationSchema'

const CreateHotel = () => {
    const form = useMultistepForm([
        <AccommodationInformation />,
        <Types />,
        <Facilities />,
        <AccommodationDetail />,
        <UploadImg />,

    ], [HotelInformationSchema,
        HotelTypeSchema,
        HotelFacilitiesSchema,
        HotelDetailSchema,
        HotelUploadSchema,
    ])


    return (

        <div className='bg-imgAuth -z-40   bg-cover bg-center  min-h-screen  md:flex  md:items-center md:justify-center '>
            <div className='w-full md:w-11/12 lg:w-9/12  p-5  min-h-screen md:min-h-[475px] lg:md:min-h-[500px]   overflow-hidden  bg-secondary flex flex-col  md:flex-row gap-5 md:gap-8 md:rounded-xl '>

                <Steps stepNumber={form.stepIndex} />

                <AccommodationForm form={form} />
            </div>
        </div>
    )
}

export default CreateHotel