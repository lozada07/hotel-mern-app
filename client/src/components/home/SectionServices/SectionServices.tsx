import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const SectionServices = () => {
    const [isPaused, setIsPaused] = useState(true);
    const videoRef = useRef(null);

    const services = ["Consultation 24 hours a day", "Certification Team", "More Office Branch", "Best Work Result"]

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            if (isPaused) {
                video.play();
            } else {
                video.pause();
            }
            setIsPaused(!isPaused);
        }
    };

    return (
        <div className="bg-secondary   mb-32 py-16 sm:py-16  ">
            <section className="container w-full grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_500px]  xl:gap-x-7  ">
                <article className="">
                    <span className="uppercase text-sm  sm:text-base text-stone-400 font-semibold"> Why should you use our service? </span>
                    <h1 className="text-primary mt-5 text-balance text-3xl sm:text-4xl md:text-5xl text-semibold"> We provide the best service results for your apartment. </h1>
                    <div className="flex flex-col space-y-8 md:flex-row gap-x-5  mt-14">
                        <div className="relative group ">
                            <div className="absolute flex inset-0 items-center group justify-center z-10 bg-black/5">
                                <button className={`flex items-center justify-center bg-secondary p-2   border-primary  rounded-full  transition-opacity duration-300 delay-75 group-hover:opacity-100 ${isPaused ? "" : "opacity-0"} `} onClick={handlePlayPause}>
                                    {isPaused ?
                                        <FaPlay className="text-primary" size={22} /> : <IoMdPause className="text-primary" size={22} />
                                    }
                                </button>
                            </div>
                            <div className=" border-2 border-primary rounded-sm">

                                <video preload="auto" ref={videoRef} autoPlay={!isPaused} loop muted className="w-full md:w-[420px]  md:aspect-video  rounded-sm relative ">
                                    <source src="/public/interior.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <ul className="grid grid-cols-2  gap-x-2  gap-y-5 md:grid-cols-1  mt-4">
                            <li className="flex  gap-x-2.5">
                                <FaShieldAlt size={24} className="text-primary/70 mt-1" />
                                <div>
                                    <h4 className="text-primary text-base sm:text-lg font-semibold">Service Guarantee</h4>
                                    <p className="text-stone-400  text-base">Get security</p>
                                </div>
                            </li>
                            <li className="flex   gap-x-2.5">
                                <FaListUl size={24} className="text-primary/70 mt-1" />
                                <div>
                                    <h4 className="text-primary text-base sm:text-lg font-semibold">List of Best Apartments                                    </h4>
                                    <p className="text-stone-400  text-base">The best apartment </p>
                                </div>
                            </li>
                            <li className="flex gap-x-2.5 ">
                                <IoChatbubbles size={24} className="text-primary/70 mt-1" />
                                <div>
                                    <h4 className="text-primary text-base sm:text-lg font-semibold">Free Consultation</h4>
                                    <p className="text-stone-400  text-base">Tersedia konsultasi terbaik</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className="hidden lg:flex  items-center justify-center ">

                    <div className="bg-third bg-opacity-90 shadow-xl w-[340px] h-full rounded-lg p-6 space-y-4">
                        <svg width="40" height="25" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-primary/85">
                            <path d="M8.4375 11.3125C13.0957 11.3125 16.875 15.0918 16.875 19.75C16.875 24.4961 13.0957 28.1875 8.4375 28.1875C3.69141 28.1875 0 24.4961 0 19.75V11.3125C0 5.16016 5.00977 0.0625 11.25 0.0625C12.7441 0.0625 14.0625 1.38086 14.0625 2.875C14.0625 4.45703 12.7441 5.6875 11.25 5.6875C8.08594 5.6875 5.625 8.23633 5.625 11.3125V11.8398C6.50391 11.5762 7.38281 11.3125 8.4375 11.3125ZM30.9375 11.3125C35.5957 11.3125 39.375 15.0918 39.375 19.75C39.375 24.4961 35.5957 28.1875 30.9375 28.1875C26.1914 28.1875 22.5 24.4961 22.5 19.75V11.3125C22.5 5.16016 27.5098 0.0625 33.75 0.0625C35.2441 0.0625 36.5625 1.38086 36.5625 2.875C36.5625 4.45703 35.2441 5.6875 33.75 5.6875C30.5859 5.6875 28.125 8.23633 28.125 11.3125V11.8398C29.0039 11.5762 29.8828 11.3125 30.9375 11.3125Z" />
                        </svg>

                        <h5 className="text-primary/95 font-semibold italic text-xl">“Adequate facilities, modern place“</h5>
                        <p className="text-sm text-primary/80">
                            We offers the best services and the most charming stays. From cozy apartments to luxurious villas, we have everything you need to make your trip unforgettable.
                        </p>
                        <ul className="space-y-3">
                            {services.map(service => (
                                <li key={service} className="flex items-center  gap-x-3 ">
                                    <FaCheckCircle size={20} className="text-primary" />
                                    <span className="text-base text-primary/90 font-normal">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default SectionServices;
