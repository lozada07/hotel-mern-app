const Loader = () => {
    return (
        <div className='bg-secondary h-screen flex justify-center   items-center'>
            <div className='flex items-center justify-center gap-5'>
                <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin border-primary"></div>

                <span className="block uppercase text-2xl font-semibold font-roboto opacity-90 text-primary">Loading...</span>
            </div>
        </div>
    )
}

export default Loader