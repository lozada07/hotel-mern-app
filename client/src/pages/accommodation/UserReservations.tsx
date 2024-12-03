import CardAccommodation from "../../components/home/SectionAccommodation/CardAccommodation"
import Navbar from "../../components/Navbar"
import { useGetUserReservations } from "../../libs/react-query/query/AccommodationQuery"
import { AccommodationFormData } from "../../types"

const UserReservations = () => {
    const { data } = useGetUserReservations()


    const reservations = data || []

    return (
        <>
            <Navbar />

            <section className="container mt-10">
                <div className="my-14 w-full text-center">

                    <h1 className="text-5xl font-semibold">
                        Your Reservations
                    </h1>
                    <p className="mt-3 text-base font-normal">
                        Manage and view your Reservations
                    </p>
                </div>
                <div className='grid justify-center gap-8  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4    grid-rows-2  sm:gap-4  '>
                    {reservations.map((accommodation: AccommodationFormData) => (
                        <CardAccommodation key={accommodation._id} data={accommodation} />
                    ))
                    }
                </div >
            </section>

        </>
    )
}

export default UserReservations