import { FaStar } from "react-icons/fa";
import { FaBed, FaBath } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import SliderAccommodation from './SliderAccommodation';
import { AccommodationFormData } from '../../../types';
import { Link } from "react-router-dom";


const CardAccommodation = ({ data, row = false, isFilter }: { data: AccommodationFormData, row?: boolean, isFilter?: boolean }) => {


    return (
        <Link to={`/detail-accommodation/${data._id}`}>
            <article
                className={`max-w-[340px] sm:max-w-[400px]  lg:max-w-full rounded-lg flex h-full  ${row ? "flex-col lg:flex-row" : "flex-col"} overflow-hidden bg-secondary/95 text-primary/85 hover:shadow-xl transition-shadow duration-300`}>
                <SliderAccommodation images={data.imagesUrl} row={row} isFilter={isFilter} />
                <div className="p-4 space-y-7 w-full flex flex-col justify-center ">
                    <div className={`${row ? "space-y-2 lg:space-y-9" : "space-y-2"}  h-full`}>

                        <div className=' text-sm flex justify-between items-center'>
                            <span className="font-semibold text-sm">{data.type}</span>
                            <div className='flex gap-2 items-center'>
                                <FaStar />
                                <span >{data.starRating}</span>
                            </div>

                        </div>
                        <div className='space-y-6'>
                            <div>

                                <h2 className={`${row ? "text-xl lg:text-3xl" : "text-xl"} font-bold `}>{data.name}</h2>
                                <p className={`${row ? "text-xs lg:text-sm" : "text-xs"} font-bold mt-2 `}> {data.city}, {data.country} </p>
                            </div>
                            {isFilter && (
                                <p className="text-sm mt-2 text-wrap line-clamp-2">{data.description}</p>
                            )}
                        </div>
                    </div>
                    <div className='flex items-center justify-between '>
                        <div className='flex items-center gap-2'>
                            <div className='flex text-secondary bg-primary/80 font-semibold  rounded-sm px-1.5 gap-1 items-center '>
                                <FaBed size={16} />
                                <span className='text-sm'>{data.bedroomCount}</span>
                            </div>
                            <div className='flex text-secondary bg-primary/80 font-semibold  rounded-sm px-1.5 gap-1 items-center '>
                                <FaBath size={16} />
                                <span className='text-sm'>{data.bathroomCount}</span>
                            </div>
                            <div className='flex text-secondary bg-primary/80 font-semibold  rounded-sm px-1.5 gap-1 items-center '>
                                <IoPerson size={16} />
                                <span className='text-sm'>{data.adultCount + data.childrenCount}</span>
                            </div>
                        </div>
                        <span className='font-semibold text-[16px]'>${data.price}</span>
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default CardAccommodation