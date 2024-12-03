import { StepsCreateHotel } from '../../constants'
import { FaCheck } from "react-icons/fa";

const Steps = ({ stepNumber }: { stepNumber: number[] }) => {


    return (
        <div className="  w-full  p-4 md:w-80 md:rounded-xl z-10   md:bg-primary/90  backdrop-blur-3xl">
            <div className='flex justify-between items-center gap-2 relative w-full md:gap-6 md:flex-col md:items-start  '>

                {StepsCreateHotel.map((step, index) => (
                    <div key={step.title} className='flex flex-col md:flex-row  gap-2 md:w-full h-10'>
                        <div className='flex items-center relative  '>
                            <span className={`${stepNumber.includes(index) ? "bg-primary md:bg-secondary px-2 " : " px-3 text-secondary font-semibold bg-primary md:bg-transparent"}  flex items-center  rounded-full  border-2  border-secondary md:border-secondary  h-9  `}>{stepNumber.includes(index) ? <FaCheck size={16} className='text-secondary md:text-primary ' /> : index + 1} </span>
                        </div>
                        <div className='hidden md:block w-full'>
                            <p className='text-sm text-primary md:text-secondary/85  text-balance font-semibold'>{step.title}</p>
                            <p className='hidden text-xs md:text-secondary font-bold md:flex '>{step.name}</p>
                        </div>
                    </div>

                ))}
                <hr className="absolute w-[96%] border border-primary md:hidden -z-10" />
            </div>
        </div>

    )
}

export default Steps

