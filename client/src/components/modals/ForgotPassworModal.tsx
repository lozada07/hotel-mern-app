import { FormProvider, useForm } from 'react-hook-form'
import Modal from './modal'
import { useEffect, useState } from 'react'
import Input from '../ui/Input'
import Loading from '../ui/Loading'
import { useForgotPassword } from '../../libs/react-query/queryMutation/AuthMutation'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'


type PropsForgetPassword = {
    email: string
}


const ForgotPassworModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const methods = useForm<PropsForgetPassword>({
        resolver: zodResolver(z.object({
            email: z.string().email()
        }))
    })


    const { mutateAsync: forgotPassword, isPending: loading, isError, isSuccess } = useForgotPassword()


    const onClose = () => {
        setIsOpen(!isOpen)
        methods.reset()
    }


    const onSubmit = methods.handleSubmit((value: PropsForgetPassword) => {


        forgotPassword(value)
    })

    useEffect(() => {
        if (isSuccess || isError && !loading) {

            onClose()

        }
    }, [isSuccess, isError])


    const body = (
        <div className=" px-4 py-2 ">
            <FormProvider {...methods}>

                <form action="" className='flex flex-col gap-2 w-80' onSubmit={onSubmit}>
                    <Input labelName='Email' name='email' type='email' />

                    <div>
                        <button
                            onClick={() => {
                                if (loading) {

                                    onClose()
                                }

                            }}
                            type='submit' disabled={loading} className="w-full bg-primary py-3 text-center rounded-md text-secondary font-semibold hover:opacity-90 transition-all">
                            {loading ? (
                                <div className='flex gap-3 items-center justify-center'>
                                    <Loading />
                                    Loading...
                                </div>
                            ) : "Send"

                            }

                        </button>
                    </div>

                </form>
            </FormProvider>
        </div>
    )

    return (
        <>
            <button type='button' className=' cursor-pointer text-primary' onClick={onClose}>Forgot password?</button>
            <Modal isOpen={isOpen} title='Reset your password' onClose={onClose} body={body} onSubmit={onSubmit} />
        </>
    )
}

export default ForgotPassworModal