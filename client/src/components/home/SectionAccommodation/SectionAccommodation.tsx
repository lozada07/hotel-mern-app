import { useGetAllAccommodations } from "../../../libs/react-query/query/AccommodationQuery";
import CardAccommodation from "./CardAccommodation";
import { AccommodationFormData } from "../../../types";


const SectionAccommodation = () => {

    const { data, } = useGetAllAccommodations()
    const LatestAccommodation = data?.data.slice(0, 2) || [];
    const AllAccommodation = data?.data.slice(2) || [];



    return (
        <section className='space-y-20 mb-40 container ' data-aos="fade-up">
            <div className="text-center space-y-4">

                <h2 className=' text-wrap text-4xl lg:text-5xl text-roboto font-semibold text-secondary'>
                    Latest Destinations
                </h2>
                <p className="text-secondary font-semibold">Most recent desinations added by our hosts</p>

            </div>
            <div className="space-y-12">

                <div className='grid justify-center sm:grid-cols-2  gap-8 sm:gap-4  '>
                    {LatestAccommodation.map((accommodation: AccommodationFormData) => (
                        <CardAccommodation key={accommodation._id} data={accommodation} row={true} />
                    ))
                    }
                </div >

                <div className='grid justify-center gap-8  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4    sm:gap-4  '>
                    {AllAccommodation.map((accommodation: AccommodationFormData) => (
                        <CardAccommodation key={accommodation._id} data={accommodation} />
                    ))
                    }
                </div >
            </div>

        </section >

    )
}

export default SectionAccommodation