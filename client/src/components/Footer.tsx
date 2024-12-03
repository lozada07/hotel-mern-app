import { Link } from "react-router-dom"
import { footerNavs } from "../constants"

const Footer = () => {


    return (
        <footer className="text-primary bg-secondary px-4 py-5  max-w-full  md:px-8">
            <div className="container gap-6 justify-between md:flex">
                <div className="flex justify-center md:block  ">
                    <div className=" flex items-center gap-1.5 sm:gap-1 ">

                        <img src="/public/assets/icons/logo.svg"

                            className=' w-28 h-28 sm:w-24 sm:h-24 -mt-3'
                            alt="logo" />
                        <span className={`uppercase text-4xl sm:text-3xl font-semibold font-roboto opacity-90 text-primary  `}>StaySwift</span>
                    </div>
                </div>
                <div className="flex-1 mt-6 sm:mt-10   items-center justify-around flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-primary font-medium">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={el.href}
                                                className="hover:underline hover:opacity-70"

                                            >
                                                {el.name}
                                            </Link>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t border-primary text-center  items-center justify-center flex">
                <div className="">
                    &copy; 2024 StaySwift. All rights reserved.
                </div>

            </div>

        </footer>
    )
}

export default Footer