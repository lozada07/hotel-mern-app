import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ name }: { name: string }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={""}
            render={({ field: { onChange, value } }) => (
                <DatePicker
                    selected={value}
                    onChange={onChange}
                    className='bg-transparent h-full w-full lg:max-w-28  text-secondary text-sm font-semibold focus:outline-none placeholder:text-secondary placeholder:text-xs sm:placeholder:text-sm placeholder:text-semibold'
                    placeholderText='Check-in date'
                />
            )}
        />
    );
}

export default Calendar;
