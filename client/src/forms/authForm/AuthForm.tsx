import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { SignUpSchema, SignInSchema } from '../../libs/zodSchema/AuthSchema'
import Input from '../../components/ui/Input'
import { useCreateAccount, useLogin } from '../../libs/react-query/queryMutation/AuthMutation'
import { UserType } from '../../types'
import Loading from '../../components/ui/Loading'
import ForgotPasswordModal from '../../components/modals/ForgotPassworModal'

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(false)


    const methods = useForm<UserType>({
        resolver: zodResolver(isSignUp ? SignUpSchema : SignInSchema)
    })

    //createAccount
    const { mutateAsync: createAccount, isPending: loading } = useCreateAccount()

    //loginAccount
    const { mutateAsync: loginAccount, isPending: loadingLogin } = useLogin()


    const onSubmit = methods.handleSubmit((value: UserType) => {
        isSignUp ? createAccount(value) : loginAccount(value)
    })


    return (
        <>
            <div className='flex  h-screen overflow-hidden '>
                <div className=' flex-1 bg-secondary '>
                    <div className="container flex flex-col gap-10 justify-center items-center h-full  ">
                        <h1 className='text-3xl text-primary text-inter'>{isSignUp ? "Create an Account" : "Welcome back"} </h1>

                        <FormProvider {...methods}>

                            <form action="" className='flex flex-col gap-4  w-96' onSubmit={onSubmit}>
                                {isSignUp &&
                                    <div className="grid grid-cols-2 gap-5">
                                        <Input labelName='First Name' name='firstName' type='text' />
                                        <Input labelName='Last Name' name='lastName' type='text' />
                                    </div>}

                                <Input labelName='Email' name='email' type='email' />
                                <Input labelName='Password' name='password' type='password' />
                                {isSignUp &&
                                    <Input labelName='Confirm Password' name='confirmPassword' type='password' />
                                }



                                <div className='mt-5 '>
                                    <span className='text-primary/75 '>
                                        {isSignUp ? "Already has account?" : "Don't have an account?"}  <a onClick={() => setIsSignUp(!isSignUp)} className=' underline cursor-pointer text-primary'>{isSignUp ? "Login" : "Sign Up"}</a>
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <button type='submit' disabled={loading || loadingLogin} className="w-full bg-primary py-3 text-center rounded-md text-secondary font-semibold hover:opacity-90 transition-all">
                                        {loading || loadingLogin ? (
                                            <div className='flex gap-3 items-center justify-center'>
                                                <Loading />
                                                Loading...
                                            </div>
                                        ) : isSignUp ? "Register Now" : "Login"

                                        }

                                    </button>

                                </div>
                            </form>

                        </FormProvider>
                        {!isSignUp &&
                            <div className=''>
                                <ForgotPasswordModal />
                            </div>
                        }



                    </div>
                </div>
                <img src="/public/assets/images/img-auth.webp" className='hidden md:block w-[50%] object-cover object-center' alt="" />
            </div>
        </>




    )
}

export default AuthForm