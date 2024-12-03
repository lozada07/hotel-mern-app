import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { GoAlertFill } from "react-icons/go";

type Props = {
    message: string
}

const ErrorZod = ({ message }: Props) => {

    return (
        <>
            {message &&
                <motion.p
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    exit={{ opacity: 0, x: -5, transition: { duration: 0.2 } }}
                    className="mt-2 md:mt-1  text-red-600  flex items-center justify-start gap-2 text-[11px] md:text-xs font-semibold"
                >
                    <GoAlertFill />
                    {message}
                </motion.p>
            }
        </>
    );
};

export default ErrorZod;