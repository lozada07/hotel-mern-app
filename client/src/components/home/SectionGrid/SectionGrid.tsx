import GridItem from "./GridItem";

const GridItems = [
    { name: "Hotel", imgPath: "/public/assets/images/hotel.webp", styles: "row-span-2 hidden lg:flex" },
    { name: "Home", imgPath: "/public/assets/images/auth-background.webp" },
    { name: "Cabin", imgPath: "/public/assets/images/cabin.webp" },
    { name: "Trailer", imgPath: "/public/assets/images/trailer.webp" },
    { name: "Apartment", imgPath: "/public/assets/images/apartment.webp" },
];

export const SectionGrid = () => {
    return (
        <section className='h-auto  space-y-14 hidden mb-28 sm:block container ' data-aos="fade-up"  >
            <h2 className=' text-wrap text-4xl lg:text-5xl text-roboto max-w-2xl font-semibold text-secondary'> Comfort and luxury in a single experience</h2>
            <div className='grid grid-rows-2 h-[500px]  sm:grid-cols-2 lg:grid-cols-3    gap-4  '>
                {GridItems.map((item) => (
                    <GridItem key={item.name} name={item.name} imgPath={item.imgPath} styles={item.styles} />
                ))
                }
            </div >
        </section >

    )
}
