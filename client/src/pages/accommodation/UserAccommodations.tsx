import CardAccommodation from "../../components/home/SectionAccommodation/CardAccommodation"
import Navbar from "../../components/Navbar"
import { useGetUserAccommodations } from "../../libs/react-query/query/AccommodationQuery"
import { AccommodationFormData } from "../../types"

const UserAccommodations = () => {
    const { data } = useGetUserAccommodations()


    const accommodations = data || []

    return (
        <>
            <Navbar />

            <section className="container mt-10">
                <div className="my-14 w-full text-center">

                    <h1 className="text-5xl font-semibold">
                        Your Accommodations
                    </h1>
                    <p className="mt-3 text-base font-normal">
                        Manage and view your Accommodations
                    </p>
                </div>
                <div className='grid justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 sm:gap-4'>
                    {accommodations.map((accommodation: AccommodationFormData) => (
                        <CardAccommodation key={accommodation._id} data={accommodation} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default UserAccommodations
