import { AnimatePresence, motion } from 'framer-motion'
import { PropsMultiStepForm } from '../../../types';



const variants = {
    initial: (direction: number) => {

        return {
            x: direction > 0 ? 200 : -200,
            opacity: 0,
        }
    },
    animate: {
        x: 0,
        opacity: 1,

    },
    exit: (direction: number) => {
        return {
            x: direction > 0 ? -200 : 200,
            opacity: 0,

        }
    },
}


const StepContainer = ({ form }: { form: PropsMultiStepForm }) => {
    return (
        <AnimatePresence mode='wait' initial={false} custom={form.direction}>
            <motion.div
                key={form.currentStepIndex}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ duration: 0.2, ease: "easeInOut" }}
                custom={form.direction}
                className='h-full'
            >
                {form.step}
            </motion.div>
        </AnimatePresence>
    )
}

export default StepContainer