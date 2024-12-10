import { FaCalendarDays } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const SectionDetail = () => {
    return (
        <section className="container  w-full gap-x-5 mb-32  gap-y-5 grid grid-cols-1 grid-rows-2 sm:gap-y-0  sm:grid-cols-2 sm:grid-rows-1 lg:gap-x-0">
            <article className="relative bg-transparent sm:bg-secondary sm:rounded-2xl md:bg-transparent">
                <img src="/public/assets/images/interiorshome1.jpg" alt="" className=" h-[355px] drop-shadow-md border-2 border-secondary sm:border-none rounded-t-xl sm:h-full lg:h-[370px]  w-full lg:w-auto absolute sm:rounded-t-2xl md:rounded-2xl object-cover" />
                <img src="/public/assets/images/interiorshome2.jpg" alt="" className="h-[370px] hidden lg:block absolute rounded-2xl z-10 bottom-3 md:right-[40px] lg:right-[120px] border-4 border-primary" />
                <div className="-z-0 absolute hidden sm:flex rounded-b-2xl lg:rounded-2xl font-semibold text-opacity-80  text-2xl text-primary gap-x-3 justify-center lg:flex-col items-center bottom-0 lg:bottom-[40px] w-full lg:w-auto lg:left-[80px] shadow-md p-5 md:z-20 bg-secondary">
                    99%
                    <span className="text-opacity-0 text-lg md:text-[17px]">Customers like it</span>
                </div>
            </article>
            <article>
                <span className="uppercase text-sm sm:text-lg text-stone-600 font-semibold">Best service</span>
                <h1 className="text-secondary   w-full text-balancer md:leading-[50px] mt-5 text-[25px]  md:text-[46px]  font-semibold">
                    We Provide the Best Apartments and Services
                </h1>
                <p className=" mt-5 md:mt-10 text-sm md:text-base text-secondary font-normal">Providing the best service until you get the apartment you dream of</p>
                <p className=" flex items-center text-sm md:text-base text-opacity-10 font-medium mt-6 md:mt-10 gap-x-3">
                    <svg width="27" height="36" viewBox="0 0 27 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6875 24.916C18.7305 25.4629 17.2949 24.916 16.2012 25.1895C15.1758 25.4629 14.2188 26.625 13.125 26.625C11.9629 26.625 11.0059 25.4629 9.98047 25.1895C8.88672 24.916 7.45117 25.4629 6.49414 24.916C5.53711 24.3691 5.33203 22.8652 4.58008 22.0449C3.75977 21.293 2.25586 21.0195 1.70898 20.1309C1.16211 19.1738 1.70898 17.7383 1.43555 16.6445C1.16211 15.6191 0 14.6621 0 13.5C0 12.4062 1.16211 11.4492 1.43555 10.4238C1.70898 9.33008 1.16211 7.89453 1.70898 6.9375C2.25586 5.98047 3.75977 5.77539 4.58008 5.02344C5.33203 4.20312 5.60547 2.69922 6.49414 2.15234C7.45117 1.60547 8.88672 2.15234 9.98047 1.87891C11.0059 1.60547 11.9629 0.375 13.125 0.375C14.2188 0.375 15.1758 1.60547 16.1328 1.87891C17.2266 2.15234 18.6621 1.60547 19.6191 2.15234C20.5762 2.69922 20.7812 4.20312 21.6016 5.02344C22.3535 5.77539 23.8574 5.98047 24.4043 6.9375C24.9512 7.89453 24.4043 9.33008 24.6777 10.4238C24.9512 11.4492 26.1816 12.4062 26.1816 13.5C26.1816 14.6621 25.0195 15.6191 24.7461 16.6445C24.4727 17.7383 25.0195 19.1738 24.4727 20.1309C23.9258 21.0879 22.4219 21.293 21.6016 22.0449C20.8496 22.8652 20.5762 24.3691 19.6875 24.916ZM7.65625 13.5C7.65625 16.5762 10.0488 18.9688 13.125 18.9688C16.1328 18.9688 18.5938 16.5762 18.5938 13.5C18.5938 10.4922 16.1328 8.03125 13.125 8.03125C10.0488 8.03125 7.65625 10.4922 7.65625 13.5ZM0.0683594 30.043L2.32422 24.4375C4.78516 26.8301 8.06641 28.4707 11.7578 28.8125L9.43359 34.418C9.22852 34.9648 8.68164 35.375 7.99805 35.375C7.99805 35.375 7.99805 35.375 7.92969 35.375C7.31445 35.375 6.76758 35.0332 6.49414 34.4863L4.99023 31.6152L1.91406 32.2305C1.36719 32.3672 0.751953 32.1621 0.341797 31.6836C-0.0683594 31.2051 -0.136719 30.5898 0.0683594 30.043ZM23.8574 24.4375L26.1133 30.043C26.3184 30.5898 26.25 31.2051 25.8398 31.6836C25.4297 32.1621 24.8145 32.3672 24.2676 32.2305L21.1914 31.6152L19.6875 34.4863C19.4141 35.1016 18.8672 35.375 18.252 35.375C18.1836 35.375 18.1836 35.375 18.1836 35.4434C17.5 35.375 16.9531 34.9648 16.6797 34.418L14.4238 28.8125C18.1152 28.4707 21.3965 26.8301 23.8574 24.4375Z" fill="#312424" />
                    </svg>

                    Nr.1 Best Apartment Service in the World
                </p>
                <p className=" flex items-center text-sm md:text-base text-opacity-10 font-medium mt-5 gap-x-3">
                    <FaCalendarDays size={30} className="text-secondary" />

                    We have been willing to serve you for more than 15 years
                </p>
                <a href="/search" className=" flex items-center mb-1  group justify-center bg-secondary text-primary rounded-xl text-sm md:text-base md:rounded-2xl mt-8 md:mt-10 p-2.5 w-2/5 lg:w-1/4">
                    <span className="flex items-center gap-x-2 ">
                        See more
                        <FaArrowRightLong size={14} className="mt-1 " />
                    </span>
                </a>
            </article>
        </section>
    )
}

export default SectionDetail;
