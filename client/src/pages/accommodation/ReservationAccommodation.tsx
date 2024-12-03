import ReservationSummary from './components/ReservationSummary';
import { useParams } from 'react-router-dom';
import { useGetAccommodation } from '../../libs/react-query/query/AccommodationQuery';
import PaymentForm from '../../components/home/SectionDetail/PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import { createPaymentIntent } from '../../services/AccommodationService';
import { useEffect, useState } from 'react';
import { useSearchBar } from '../../contexts/SearchBarContext';
import Navbar from '../../components/Navbar';
const ReservationAccommodation = () => {
    const { id } = useParams();
    const search = useSearchBar();
    const VITE_API = import.meta.env.VITE_STRIPE_API_KEY
    console.log("EST", typeof VITE_API);

    const { data } = useGetAccommodation(id || "");
    const stripePromise = loadStripe(VITE_API)
    const [numberOfNights, setNumberOfNights] = useState<number>(0);



    useEffect(() => {
        if (search.checkIn && search.checkOut) {
            const nights =
                Math.abs(search.checkOut.getTime() - search.checkIn.getTime()) /
                (1000 * 60 * 60 * 24);

            setNumberOfNights(Math.ceil(nights));
        }
    }, [search.checkIn, search.checkOut]);



    const { data: paymentIntentData } = useQuery(
        {
            queryKey: ["createPaymentIntent"],
            queryFn: () =>
                createPaymentIntent({
                    hotelId: id as string,
                    numberOfNights: numberOfNights.toString()
                }
                ),
            enabled: !!id && numberOfNights > 0 && !!numberOfNights,
        }
    );


    const reservation = {
        _id: data._id,
        checkIn: search.checkIn,
        checkOut: search.checkOut,
        adultCount: search.adultCount,
        childCount: search.childrenCount,
        totalPrice: data.price * numberOfNights,
        paymentIntentId: paymentIntentData
    };


    return (
        <div className='container'>

            <Navbar />
            <div className='mt-10'>
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-3 bg-secondary border-2 border-white/80 text-primary shadow shadow-secondary/40 drop-shadow-2xl rounded-lg w-full p-6 mb-6">
                    <ReservationSummary accommodation={data} reservation={reservation} />
                    {paymentIntentData ? (
                        <Elements stripe={stripePromise}>
                            <PaymentForm paymentIntent={paymentIntentData} reservation={reservation} />
                        </Elements>
                    ) : (
                        <div className='w-full mx-auto animate-pulse duration-200 pt-6 px-6 pb-3 flex flex-col justify-between bg-primary/90  rounded-lg shadow-md'>

                        </div>
                    )
                    }
                </div>
            </div>

        </div>
    );
};

export default ReservationAccommodation;
