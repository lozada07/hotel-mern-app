import { Fragment } from 'react'
import { navigationItem } from "../constants";
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useSignOut } from '../libs/react-query/queryMutation/AuthMutation';
import { Menu, Transition } from '@headlessui/react';
const Navbar = () => {


    const { isAuthenticated, user } = useAuth()


    const { mutateAsync: signOutAccount } = useSignOut()

    const handleSignOut = () => {
        signOutAccount()
    }

    // bg-blue-400 sm:bg-yellow-300 md:bg-red-600  lg:bg-secondary xl:bg-green-600
    return (
        <nav data-aos="fade-down"
            className=" bg-secondary  rounded-3xl px-4 pb-1 pt-4 shadow-md -mt-4  w-full">
            <div className="flex items-center justify-between w-full pt-2 ">
                <Link to="/" className='flex items-center gap-1'>

                    <img src="/assets/icons/logo.svg"

                        className='w-20 h-20 -mt-3'
                        alt="logo" />
                    <span className={`uppercase text-2xl font-semibold font-roboto opacity-90 text-primary `}>StaySwift</span>
                </Link>
                <div className='hidden md:block'>

                    <ul className='flex gap-16  '>
                        {navigationItem.map(item => (
                            <li key={item.title} className='font-inter  text-primary/90 '> <Link to={item.path}>{item.title}</Link ></li>
                        )
                        )}
                    </ul>

                </div>

                {!isAuthenticated ?
                    <Link to="/sign-up"

                        className='bg-primary px-6 py-4 sm:px-10 sm:py-4 rounded-full font-semibold text-sm uppercase font-roboto text-secondary'
                    >
                        Get Start
                    </Link>
                    :
                    <Menu as="div" className="relative z-10  ml-3">
                        <div>
                            <Menu.Button className="relative  flex rounded-full bg-gray-800 text-sm focus:outline-none">
                                <img
                                    className="h-10 w-10 rounded-full border-2 focus:outline-none  border-primary"
                                    src="/assets/images/user-avatar.png"
                                    alt=""
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >


                            <Menu.Items className="absolute  -right-4   w-48 origin-top-right rounded-br-md rounded-bl-md  bg-secondary py-2 px-1   focus:outline-none">
                                <Menu.Item>
                                    {({ }) => (
                                        <p
                                            className={'block border-b-2 mb-3 overflow-hidden overflow-ellipsis border-primary/60 font-bold px-4 py-3 text-sm text-primary/90  font-inter'}
                                        >
                                            {user?.email}

                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ }) => (
                                        <Link
                                            to="/create-accommodation"
                                            className={'block px-4 py-2 text-sm text-primary/90  font-inter'}
                                        >
                                            Add Hotel

                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ }) => (
                                        <Link
                                            to="/user-reservations"
                                            className={'block px-4 py-2 text-sm text-primary/90  font-inter'}
                                        >
                                            My reservations
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ }) => (
                                        <Link
                                            to="/user-accommodations"
                                            className={'block px-4 py-2 text-sm text-primary/90  font-inter'}
                                        >
                                            My Accommodations
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ }) => (
                                        <button
                                            onClick={handleSignOut}
                                            className={'block px-4 py-2 text-sm text-primary/90  font-inter'}
                                        >
                                            Sign out
                                        </button>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                }
            </div>

        </nav >
    )
}

export default Navbar