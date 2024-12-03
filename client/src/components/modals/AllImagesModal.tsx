import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Fancybox from "../../pages/accommodation/components/Fancybox";


type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: () => void;
    title: string;
    body: ReactNode,
    footer?: ReactNode,
    imagesUrl: string[]
}

const AllImagesModal = (imagesUrl: string[]) => {
    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

    }, [isOpen]);


    const onClose = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button onClick={() => (setIsOpen(!isOpen))} className='bg-secondary text-primary px-6 py-1.5 font-semibold text-md rounded-md shadow-2xl border-2 border-white/85'>
                See all Images
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        onClick={stopPropagation}
                        initial={{ x: 1500, y: 0 }}
                        animate={{ y: 0, x: 0 }}
                        exit={{ x: 1500, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="fixed inset-0 z-10 bg-secondary"
                    >
                        <div className="bg-secondary/90 px-5 py-3 ">
                            <button onClick={onClose}>
                                <FaAngleDoubleRight className="text-primary" size={30} />
                            </button>
                        </div>

                        <Fancybox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <div className="relative grid grid-cols-3 gap-3 p-10 overflow-y-scroll max-h-screen">

                                {imagesUrl.imagesUrl.map((url) => (

                                    <a data-fancybox="gallery" href={url} key={url} >
                                        <img src={url} className="w-full h-full object-cover object-center" />

                                    </a>

                                ))}

                            </div>
                        </Fancybox>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AllImagesModal;
