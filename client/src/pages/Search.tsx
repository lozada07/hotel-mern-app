import { FormProvider, useForm } from "react-hook-form"
import StarRatingFilter from "./accommodation/components/StarRatingFilter"
import TypesFilter from "./accommodation/components/TypesFilter"
import FacilitiesFilter from "./accommodation/components/FacilitiesFilter"

import DetailsFilter from "./accommodation/components/DetailsFilter"
import { useSearchAccommodations } from "../libs/react-query/query/AccommodationQuery"
import { useSearchBar } from "../contexts/SearchBarContext"
import CardAccommodation from "../components/home/SectionAccommodation/CardAccommodation"
import { AccommodationFormData } from "../types"
import InputRange from "./accommodation/components/InputRange"
import CardSkeletonAccommodation from "../components/home/SectionAccommodation/Skeleton/CardSkeletonAccommodation"
import { useEffect } from "react"
import { useInView } from 'react-intersection-observer';
import Loading from "../components/ui/Loading"

const Search = () => {
    const searchBar = useSearchBar()
    const methods = useForm()
    const values = methods.watch()

    const { data: res, isPending, fetchNextPage, hasNextPage, isFetchingNextPage, } = useSearchAccommodations({ ...searchBar, ...values })

    const data = res?.pages.flatMap(page => page.data)
    const total = res?.pages[0].total



    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])




    return (
        <>
            <div className="sm:container grid grid-cols-[200px_1fr] md:grid-cols-[270px_1fr]  gap-5 mb-20   ">
                <div className="rounded-lg p-3 md:p-5 h-fit bg-secondary text-primary sticky top-7">
                    <FormProvider {...methods}>
                        <form className="space-y-5" >
                            <h3 className="text-xl font-semibold border-b border-primary pb-3">
                                Filter by
                            </h3>
                            <InputRange />
                            <StarRatingFilter />
                            <TypesFilter />
                            <FacilitiesFilter />
                            <DetailsFilter />

                        </form>
                    </FormProvider>
                </div>
                {isPending ?
                    <div className=" space-y-8  ">
                        <div className="flex justify-between items-center">

                            <h2 className="w-64 h-5 rounded-full animate-pulse  bg-secondary"></h2>


                            <div className="w-32 h-5 rounded-full animate-pulse  bg-secondary"></div>
                        </div>

                        <CardSkeletonAccommodation row={true} isFilter={true} />

                    </div>
                    :

                    <div className="text-secondary space-y-8 text-2xl font-semibold overflow-hidden">
                        <div className="flex justify-between gap-x-1 items-center">

                            <h2 className="text-sm sm:text-lg font-bold md:text-2xl sm:font-semibold  ">
                                {total} Accommodations Found

                            </h2>

                            <select {...methods.register("sortOptions")} className="text-sm md:text-sm p-1 sm:p-1  rounded-md focus:outline-none bg-secondary text-primary  ">
                                <option value="" >Sort by</option>
                                <option value="higherRating">Higher Rating</option>
                                <option value="lowerRating">Lower Rating</option>
                                <option value="higherPrice">Higher Price</option>
                                <option value="lowerPrice">Lower Price</option>
                            </select>

                        </div>
                        <div className="flex flex-col  justify-center gap-y-5  ">
                            {data?.map((accommodation: AccommodationFormData) => (
                                <CardAccommodation key={accommodation._id} data={accommodation} row={true} isFilter={true} />
                            ))
                            }
                        </div>

                        {
                            hasNextPage &&
                            <div ref={ref} className="text-center ">
                                {isFetchingNextPage &&
                                    <span className="text-sm font-bold flex gap-x-2 justify-center items-center">
                                        <Loading />
                                        Loading more...
                                    </span>
                                }
                            </div>
                        }
                    </div>
                }


            </div>
        </>

    )
}

export default Search