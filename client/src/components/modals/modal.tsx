import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { fadeIn } from "../../utils/framerAnimation";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: () => void;
    title: string;
    body: ReactNode,
    footer?: ReactNode
}

const Modal = ({ isOpen, onClose, title, body, footer, onSubmit }: Props) => {
    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();



    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-10 overflow-hidden backdrop-blur-[1.5px] bg-black/40 flex items-center justify-center"
                >
                    <motion.div
                        onClick={stopPropagation}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <div className="flex flex-col relative bg-secondary space-y-2 justify-center drop-shadow-2xl px-4 py-6 max-w-sm overflow-hidden rounded-xl ">
                            <h1 className="text-3xl  my-4 font-semibold text-primary text-center">{title}</h1>
                            <p className=" ml-4 mb-20 text-sm text-primary text-wrap">
                                Enter the email address associated with your account and we will send you a link to reset your password.
                            </p>
                            <button onClick={onClose} className=" w-full group">
                                <AiOutlineClose
                                    className="absolute top-2 right-3 text-neutral-400 transition group-hover:text-neutral-500"
                                    size={22}
                                />
                            </button>


                            {/* Body */}
                            {body}
                            {/* Footer */}
                            {footer}
                        </div>
                    </motion.div>
                </div>
            )
            }
        </AnimatePresence >
    );
};

export default Modal;