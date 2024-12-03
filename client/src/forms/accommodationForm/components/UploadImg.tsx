import { useFormContext } from "react-hook-form"
import ContainerForm from "./ContainerForm"
import { IoCloseSharp } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";


const UploadImg = () => {

    const { register, setValue, trigger, watch } = useFormContext()

    const images = watch("images")

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {


        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);
            const allFiles = [...images, ...selectedFiles];
            setValue("images", allFiles);
        }

    };



    const handleDeleteImg = (imgRemove: any) => {
        if (images) {
            setValue("images", Object.values(images).filter(img => img !== imgRemove));
            trigger("images");
        }
    };



    return (
        <ContainerForm title="Upload file the Accommodation">
            {images && images.length > 0 ?
                <div className="grid grid-cols-3 gap-6">
                    {Object.values(images).map((img: any, index) => (

                        <div key={index} onClick={() => handleDeleteImg(img)} className="h-[240px] overflow-hidden cursor-pointer group  relative rounded-md shadow-md bg-black ">
                            <div className="hidden absolute   inset-0 group-hover:flex items-center justify-center text-primary">
                                <IoCloseSharp size={40} />
                            </div>
                            <img className=" object-cover object-center transition-opacity group-hover:opacity-20 h-full w-full" src={URL.createObjectURL(img)} alt="" />
                        </div>
                    ))}

                    {images.length < 6 &&
                        <div className="bg-primary hover:opacity-85 transition-opacity duration-200  rounded-md h-[240px]">

                            <label htmlFor="file" className=" h-full flex flex-col gap-1  items-center justify-center cursor-pointer">
                                <IoAddCircle size={40} />
                                <span className="text-secondary text-roboto font-semibold">Add more</span>
                            </label>
                            <input {...register("images")} onChange={handleFileChange} id="file" type="file" accept=".jpeg,.jpg,.png" multiple className="hidden" />
                        </div>
                    }


                </div>
                :
                <div className="h-full rounded-lg border-2 border-dashed border-primary flex items-center justify-center">
                    <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
                        <svg className="w-16 h-16 stroke-primary stroke-2 mx-auto" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667" />
                        </svg>
                        <p className="mt-3 text-stone-400 max-w-xs mx-auto">Click to <span className="font-medium text-primary">Upload your  file</span> or drag and drop your file here</p>
                    </label>
                    <input {...register("images")} id="file" type="file" accept=".jpeg,.jpg,.png" multiple className="hidden" />
                </div>
            }
        </ContainerForm >
    )
}

export default UploadImg