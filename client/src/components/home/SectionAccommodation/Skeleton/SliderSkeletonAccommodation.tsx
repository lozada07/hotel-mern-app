import React from 'react'

const SliderSkeletonAccommodation = ({ row, isFilter }: { row: boolean, isFilter: boolean }) => {
    return (
        <div
            className={`${row ? isFilter ? "lg:w-1/2" : "lg:w-full " : ""}    bg-primary/85 w-full animate-pulse  min-h-[250px] max-h-[300px]`}
        >
        </div>

    )
}

export default SliderSkeletonAccommodation