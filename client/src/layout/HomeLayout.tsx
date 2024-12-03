import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer';


const HomeLayout = () => {
    return (
        <>
            <Header />
            <div className='mt-48'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default HomeLayout