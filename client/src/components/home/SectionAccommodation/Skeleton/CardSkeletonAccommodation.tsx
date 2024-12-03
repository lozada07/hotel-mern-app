import SliderSkeletonAccommodation from "./SliderSkeletonAccommodation"

const CardSkeletonAccommodation = ({ row = false, isFilter = false }: { row?: boolean, isFilter?: boolean }) => {
    return (
        <div className="space-y-5">



            {Array.from({ length: 5 }).map((_, index) => (
                <article
                    key={index}
                    className={`max-w-md sm:max-w-full rounded-lg flex ${row ? "flex-col lg:flex-row" : "flex-col"}   overflow-hidden bg-secondary/85 text-primary/85`}
                >

                    <SliderSkeletonAccommodation row={row} isFilter={isFilter} />
                    <div className="p-4 space-y-7 w-full flex flex-col justify-center animate-pulse ">
                        <div className={`${row ? "space-y-2 lg:space-y-9" : "space-y-2"}  h-full`}>
                            <div className=' text-sm flex justify-between items-center'>
                                <span className="w-10 h-4 rounded-full bg-primary/85"></span>
                                <div className='w-10 h-4 rounded-full bg-primary/85'>
                                </div>
                            </div>
                            <div className='space-y-3'>
                                <h2 className=' h-4 rounded-full bg-primary/85 w-full'></h2>
                                <p className='h-4 rounded-full bg-primary/85 w-full'></p>
                                {isFilter && (
                                    <p className='h-4 rounded-full bg-primary/85 w-full'></p>
                                )}
                            </div>
                        </div>
                        <div className='flex items-center justify-between '>
                            <div className='w-24 h-4 rounded-full bg-primary/85'></div>
                            <span className='w-16 h-4 rounded-full bg-primary/85'></span>
                        </div>
                    </div>
                </article>
            ))}

        </div>

    )
}

export default CardSkeletonAccommodation