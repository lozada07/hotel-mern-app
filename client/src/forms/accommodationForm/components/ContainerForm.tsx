import React from 'react'

type ContainerFormProps = {
    title: string
    children: React.ReactNode
}


const ContainerForm = ({ children, title }: ContainerFormProps) => {

    return (

        <div className='flex flex-col text-center gap-7 h-full  '>

            <h2 className=' text-3xl max-w-md mx-auto text-balance  text-primary/85 font-semibold text-roboto '>{title}</h2>

            {children}

        </div>
    )
}

export default ContainerForm