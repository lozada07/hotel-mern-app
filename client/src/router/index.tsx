import { createBrowserRouter } from 'react-router-dom';
import { Home, Contact } from '../pages';
import RootLayout from '../layout/RootLayout';
import AuthForm from '../forms/authForm/AuthForm';
import ResetPassword from '../pages/auth/ResetPassword';
import ProtectLayout from '../layout/ProtectLayout';
import CreateAccommodation from '../pages/accommodation/CreateAccommodation';
import HomeLayout from '../layout/HomeLayout';
import MainLayout from '../layout/MainLayout';
import Search from '../pages/Search';
import DetailAccommodation from '../pages/accommodation/DetailAccommodation';
import ReservationAccommodation from '../pages/accommodation/ReservationAccommodation';
import UserAccommodations from '../pages/accommodation/UserAccommodations';
import UserReservations from '../pages/accommodation/UserReservations';


export const router = createBrowserRouter([

    {
        element: <RootLayout />,

        children: [
            {
                path: "/sign-up",
                element: <AuthForm />
            },
            {
                path: "/reset-password/:token",
                element: <ResetPassword />
            },


        ]
    },


    {
        path: "/contact",
        element: <Contact />
    },

    {
        element: <MainLayout />,
        children: [{
            path: "detail-accommodation/:id",
            element: <DetailAccommodation />,
        },


        ]
    },




    {
        element: <ProtectLayout />,
        children: [
            {
                path: "/create-accommodation",
                element: <CreateAccommodation />,
            },
            {
                path: "reservation-accommodation/:id",
                element: <ReservationAccommodation />
            },
            {
                path: "user-accommodations",
                element: <UserAccommodations />
            },
            {
                path: "user-reservations",
                element: <UserReservations />
            }
        ]
    },


    {
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/search",
                element: <Search />
            },

            //Protect Routes
            // {
            //     element: <ProtectLayout />,
            //     children: [
            //         {
            //             path: "/create-hotel",
            //             element: <CreateHotel />,


            //         }
            //     ]
            // }


        ]

    }



]);
