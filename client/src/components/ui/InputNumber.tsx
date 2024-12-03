import { useFormContext } from 'react-hook-form';
import useInputNumber from '../../hooks/useInputNumber';

const InputNumber = ({ name, labelName, fullHeight = false }: { name: string, labelName: string, fullHeight?: boolean }) => {

    const { decrement, increment } = useInputNumber(name)
    const { register } = useFormContext();


    return (
        <div className="bg-primary  w-full h-full text-secondary rounded-lg " >
            <div className={`flex ${fullHeight ? "h-full" : "h-12"} items-center gap-x-1`}>

                <div className={`grow ${fullHeight && "flex flex-col justify-center gap-y-2"}  px-3 h-full`}>
                    <span className={`block ${fullHeight ? "text-md" : "text-xs"} text-secondary font-semibold`}>
                        {labelName}
                    </span>
                    <input {...register(name)} className={`w-full p-0 ${fullHeight && "text-sm font-semibold"}  focus:outline-none bg-transparent border-0 text-secondary focus:outline-none" type="text`} />
                </div>

                <div className="flex   flex-col divide-y  divide-primary h-full border-s border-primary">
                    <button type="button" onClick={increment} className="w-7 h-full inline-flex justify-center items-center text-sm font-medium rounded-se-lgs  stroke-primary stroke-2 bg-secondary text-primary   ">
                        <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" ><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </button>
                    <button type="button" onClick={decrement} className="w-7 h-full inline-flex justify-center items-center text-sm font-medium rounded-ee-lg  stroke-primary stroke-2 bg-secondary text-primary   ">
                        <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" ><path d="M5 12h14" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InputNumber;
