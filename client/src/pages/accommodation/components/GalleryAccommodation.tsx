
import AllImagesModal from '../../../components/modals/AllImagesModal';
import Fancybox from './Fancybox';

type Props = {
    imagesUrl: string[]
}

const GalleryAccommodation = ({ imagesUrl }: Props) => {

    let images = imagesUrl.length < 4 ? imagesUrl.slice(0, 2) : imagesUrl.slice(0, 5)

    return (

        <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
            }}
        >
            <div className={`grid  ${images.length >= 5 ? "  overflow-hidden sm:grid-cols-2  lg:grid-cols-4" : "  grid-rows-1 grid-cols-1 sm:grid-cols-2"}  gap-2 max-w-full   relative`}>

                {images.map((url, index) => (

                    <a data-fancybox="gallery" href={url} key={url} className={`
                    ${index === 0 && images.length >= 5 ? "lg:col-span-2 lg:row-span-2 lg:h-[500px]  " : ""} 
                    ${index === 0 && (images.length === 4 || images.length === 2) ? "rounded-l-lg  w-full sm:h-[500px] " : ""} 
                    ${images.length < 5 ? "max-h-[400px] lg:max-h-[500px] " : " sm:max-h-[280px] md:max-h-[320px] lg:max-h-[260px] lg:first:max-h-[500px] "} 
                    ${images.length >= 5 && index == images.length - 1 ? "hidden lg:block" : ""}  w-full shadow-xl hidden first:block sm:[&:nth-child(5)]:hidden sm:block lg:[&:nth-child(5)]:block `}>
                        <img src={url} className={`${index === 0 && " lg:rounded-l-lg"} ${(index === 2 || index === images.length - 1) && "lg:rounded-r-lg"}  rounded-md lg:rounded-none w-full h-full object-center`} />

                    </a>

                ))}
                <div className='absolute bottom-7 right-7 '>
                    <AllImagesModal imagesUrl={imagesUrl} />
                </div>
            </div>
        </Fancybox>

    )
}

export default GalleryAccommodation
