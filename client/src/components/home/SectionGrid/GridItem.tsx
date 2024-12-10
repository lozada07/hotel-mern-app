import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
type GridItemProps = {
    name: string,
    styles?: string,
    imgPath: string
}

const GridItem = ({ name, imgPath, styles }: GridItemProps) => {

    return (
        <div className={` relative group rounded-xl  cursor-pointer overflow-hidden bg-black ${styles && styles}`}>
            <LazyLoadImage src={imgPath} alt="" className='aspect-auto size-full  group-hover:opacity-80 duration-100 transition-all object-cover object-center' />
            <div className='opacity-0 absolute group-hover:opacity-100 invisible group-hover:visible translate-y-12 transition-all duration-300 group-hover:translate-y-0 bottom-0 w-full font-semibold py-3 px-4 text-xl text-primary rounded-b-xl bg-secondary'>
                <span>{name}</span>
            </div>
        </div>
    )
}

export default GridItem
