import SectionAccommodation from "../components/home/SectionAccommodation/SectionAccommodation"
import SectionDetail from "../components/home/SectionDetail/SectionDetail"
import { SectionGrid } from "../components/home/SectionGrid/SectionGrid"
import SectionServices from "../components/home/SectionServices/SectionServices"



const Home = () => {



  return (
    <div className='' >
      <SectionAccommodation />
      <SectionGrid />
      <SectionServices />
      <SectionDetail />

    </div >
  )
}

export default Home