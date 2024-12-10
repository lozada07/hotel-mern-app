import { FaRegStar, FaStar } from 'react-icons/fa';
import { AiFillSchedule } from 'react-icons/ai';
import { IoPerson } from 'react-icons/io5';
import { AccommodationFormData, BookingType } from '../../../types';

export type ReservationSummaryProps = {
    accommodation: AccommodationFormData;
    reservation: BookingType
};

const ReservationSummary = ({ accommodation, reservation }: ReservationSummaryProps) => {

    return (
        <div >
            <h2 className="text-3xl font-bold mb-8">Reservation Summary</h2>
            {accommodation?.imagesUrl && accommodation.imagesUrl.length > 0 && (
                <div className='flex items-center mb-3.5 gap-x-3'>
                    <img src={`${accommodation.imagesUrl[0]}`} alt="" className='h-20 w-20 rounded-md' />
                    <div className=''>
                        <span className="font-semibold block ">{accommodation.name}</span>
                        <div className="flex mt-2 gap-x-1">
                            {["1", "2", "3", "4", "5"].map((star) => (
                                <span key={star} className="text-primary">
                                    {+star <= accommodation.starRating ? <FaStar className="size-3 lg:size-3" /> : <FaRegStar className="size-3 lg:size-3" />}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className="border-t py-4 border-primary mb-2">
                <div className='flex gap-x-1.5 items-center mb-1.5'>
                    <AiFillSchedule className="w-5 h-5 text-primary flex" />
                    <span className='font-semibold'>Dates</span>
                </div>
                <span className='block font-medium'>{reservation.checkIn.toDateString()} - {reservation.checkOut.toDateString()}</span>
            </div>
            <div className="mb-3">
                <div className='flex gap-x-1.5 items-center mt-1 mb-1.5'>
                    <IoPerson className="w-5 h-5 text-primary flex" />
                    <span className='font-semibold'>Guests</span>
                </div>
                <span>{Number(reservation.adultCount) + Number(reservation.childCount)} guests</span>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-primary">
                <span className="font-semibold">Total Price:</span>
                <span className="text-xl font-bold">${reservation.totalPrice}</span>
            </div>
        </div >
    );
};

export default ReservationSummary;
