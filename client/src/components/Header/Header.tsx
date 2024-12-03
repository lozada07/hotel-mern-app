import Hero from "./components/Hero"
import Navbar from "../Navbar"
import SearchBar from "./components/SearchBar"

const Header = () => {
    return (

        <div className="relative bg-imgHero w-full h-[562px]  space-y-32 bg-cover bg-center ">
            <div className="sm:container">

                <Navbar />
            </div>
            <div className="container md:items-center  flex flex-col gap-[90px] ">

                <Hero />
                <SearchBar />
            </div>
        </div>
    )
}

export default Header