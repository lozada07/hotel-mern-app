import { useFormContext } from 'react-hook-form';

const useInputNumber = (name: string) => {
    const { trigger, watch, setValue } = useFormContext();
    const value = watch(name);

    const increment = () => {
        setValue(name, ((+value || 0) + 1).toString());
        trigger(name)
    };

    const decrement = () => {
        if (value > 0) {
            setValue(name, (+value - 1).toString());
            trigger(name)
        }
    };
    return {
        increment,
        decrement
    }
}

export default useInputNumber