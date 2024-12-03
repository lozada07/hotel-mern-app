import { useParams } from "react-router-dom";
import GalleryAccommodation from "./components/GalleryAccommodation";
import { useGetAccommodation } from "../../libs/react-query/query/AccommodationQuery";
import { IoLocationSharp } from "react-icons/io5";
import { FaBed, FaBath, FaStar, FaRegStar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FormatDate } from "../../utils/FormatDate";
import { Accommodationfacilities, Accommodationtypes } from "../../constants";
import GuestInfo from "../../forms/accommodationForm/components/GuestInfo";
import { AccommodationFormData } from "../../types";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import Loading from "../../components/ui/Loading";

const DetailAccommodation = () => {
    const { id } = useParams();
    const { data: resData, isLoading } = useGetAccommodation(id || "");
    const [reserve, setReserve] = useState(false);

    const data: AccommodationFormData = resData;


    if (isLoading) {
        return (

            <div className="w-full  h-screen flex justify-center items-center">

                <Loading />
            </div>
        )
    }

    return (
        <div className="">
            <GalleryAccommodation imagesUrl={data.imagesUrl || []} />
            <div className="grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_400px] gap-3 lg:gap-5 mb-20 mt-10 lg:mt-16">
                {/* Accommodation info */}
                <div className="">
                    {/* Section Detail */}
                    <div className="flex flex-col space-y-7 w-full bg-secondary/95 px-5 py-7 shadow-md text-primary/95 shadow-secondary/40 rounded-md border-2 border-white/85">
                        <div className="space-y-14">
                            <div className="space-y-5">
                                <h2 className="font-semibold text-4xl lg:text-5xl">{data.name}</h2>
                                <div className="flex justify-between h-full">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="flex h-9 font-semibold text-secondary/95 bg-primary/95 rounded-sm px-2 py-1.5 gap-x-2 items-center justify-center">
                                            <FaBed size={23} className="" />
                                            <span className="text-sm">{data.bedroomCount} Bedroom</span>
                                        </div>
                                        <div className="flex font-semibold h-9 text-secondary/95 bg-primary/95 rounded-sm px-2 py-1.5 gap-x-2 items-center justify-center">
                                            <FaBath size={21} />
                                            <span className="text-sm">{data.bathroomCount} Bathroom</span>
                                        </div>
                                        <div className="flex font-semibold h-9 text-secondary/95 bg-primary/95 rounded-sm px-2 py-1.5 gap-x-2 items-center justify-center">
                                            <IoPerson size={22} />
                                            <span className="text-sm">{data.adultCount + data.childrenCount} Guest</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center min-h-max lg:px-6">
                                <div className="flex gap-x-1">
                                    <IoLocationSharp className="size-8 lg:size-12" />
                                    <div className="">
                                        <h5 className="font-semibold text-md lg:text-lg">{data.country}</h5>
                                        <p className="text-xs lg:text-base">{data.city}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    {Accommodationtypes.map((type) => {
                                        if (type.label === data.type) {
                                            return <type.icon key={type.label} className="size-10 lg:size-14" />;
                                        }
                                    })}
                                    <h5 className="font-semibold text-md lg:text-lg">{data.type}</h5>
                                </div>
                                <div className="flex flex-col gap-y-1 items-center">
                                    <span className="font-semibold text-lg lg:text-2xl">{data.starRating}</span>
                                    <div className="flex gap-x-1">
                                        {["1", "2", "3", "4", "5"].map((star) => (
                                            <span key={star} className="text-primary">
                                                {+star <= data.starRating ? <FaStar className="size-3 lg:size-5" /> : <FaRegStar className="size-3 lg:size-5" />}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-x-2">
                                <div className="flex items-center gap-x-3">
                                    <img className="w-10 h-10 rounded-full" src="/assets/images/user-avatar.png" alt="Rounded avatar" />
                                    <div className="-space-y-1">
                                        <span className="font-bold font-inter">{data.user_id?.firstName} {data.user_id?.lastName}</span>
                                        <p className="text-sm">{FormatDate(data.createdAt)}</p>
                                    </div>
                                </div>
                                <p className="text-2xl lg:text-3xl font-semibold">${data.price}</p>
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="space-y-10 mt-14">
                        <div className="text-secondary space-y-6">
                            <h2 className="font-semibold text-4xl">About this space</h2>
                            <p className="text-base font-medium text-wrap line-clamp-7">{data.description}</p>
                        </div>
                        <hr className="border-t-1.5 border-secondary" />
                    </div>

                    {/* What this place offers */}
                    <div className="my-9 text-secondary space-y-9">
                        <h2 className="font-semibold text-3xl">What this place offers</h2>
                        <section className="grid grid-cols-4 gap-3 sm:gap-6">
                            {data.facilities.map((facility) => (
                                <article className="flex gap-x-1 sm:gap-x-3 items-center" key={facility}>
                                    {Accommodationfacilities.map((item) => {
                                        if (item.label == facility) {
                                            return <item.icon key={item.label} className="size-6 sm:size-9" />;
                                        }
                                    })}
                                    <span className="text-lg font-medium">{facility}</span>
                                </article>
                            ))}
                        </section>
                        {/* <hr className="border-t-1 border-secondary" /> */}
                    </div>
                </div>

                {/* Reserve Form */}
                <div className="hidden md:block">
                    <GuestInfo accommodation={data} />
                </div>
            </div>

            {/* Mobile */}
            <div className={`fixed w-full left-0 h-16 ${reserve ? "h-[350px]" : ""} rounded-t-lg transition-all duration-300 bottom-0 border-t-2 border-white/85 shadow-2xl bg-secondary md:hidden`}>
                <div className={`${reserve ? "hidden" : "block"} flex p-3 justify-between items-center`}>
                    <span className="text-primary font-semibold text-xl">${data.price}</span>
                    <button onClick={() => setReserve(!reserve)} className="px-4 py-2 focus:outline-none font-semibold transition-opacity duration-200 hover:opacity-85 bg-primary rounded-md">
                        Reserve
                    </button>
                </div>
                <div className={`${reserve ? "block" : "hidden"} transform relative flex justify-between items-center`}>
                    <button onClick={() => setReserve(!reserve)}>
                        <MdCancel className="absolute z-10 right-2 top-3 text-primary" size={30} />
                    </button>
                    <GuestInfo accommodation={data} />
                </div>
            </div>
        </div>
    );
};

export default DetailAccommodation;
