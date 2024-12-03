import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import z from "zod"
import Input from "../../components/ui/Input"
import Loading from "../../components/ui/Loading"
import { ResetPasswordSchema } from "../../libs/zodSchema/AuthSchema"
import { Navigate, useParams } from "react-router-dom"
import { useResetPassword } from "../../libs/react-query/queryMutation/AuthMutation"
import { PropsResetPassword } from "../../types"



const ResetPasswordForm = () => {
    const { token } = useParams()

    if (!token) {
        return <Navigate to="/" />
    }

    const methods = useForm<PropsResetPassword>({
        resolver: zodResolver(ResetPasswordSchema)
    })

    const { mutateAsync: resetPassword, isPending: loading, error } = useResetPassword()

    const onSubmit = methods.handleSubmit((value: PropsResetPassword) => {
        const data = {
            data: value,
            token: token
        }
        resetPassword(data)

    })


    return (
        <div className="border-2 border-stone-600  rounded-md shadow-2xl max-w-1/3 px-5 py-8">
            <h1 className="text-primary text-2xl font-semibold text-center mb-7">Change Password</h1>
            <FormProvider {...methods}>
                <form action="" className='flex flex-col gap-2 w-80' onSubmit={onSubmit}>
                    <Input labelName='New Password' name='password' type='password' />
                    <Input labelName='Confirm Password' name='confirmPassword' type='password' />

                    <div>
                        <button

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
}

export default ResetPasswordForm