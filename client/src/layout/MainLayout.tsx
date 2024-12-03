import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';


const MainLayout = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='my-20'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout