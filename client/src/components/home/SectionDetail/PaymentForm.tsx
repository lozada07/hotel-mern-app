import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { FaCreditCard } from "react-icons/fa6";
import { StripeCardElement } from '@stripe/stripe-js';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { createRoomBooking } from '../../../services/AccommodationService';
import { useForm } from 'react-hook-form';
import { PaymentFormProps } from '../../../types';
import { redirect, useNavigate } from 'react-router-dom';



const PaymentForm: React.FC<PaymentFormProps> = ({ paymentIntent, reservation }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const { handleSubmit, register } = useForm({
    });
    const { mutate: bookAccomodation, isPending: isLoading, error } = useMutation(
        {
            mutationFn: createRoomBooking,
            onSuccess: () => {
                toast.success("Booking Saved!", { position: "top-right" });
                navigate("/")
            },
            onError: () => {
                toast.error("Error saving booking", { position: "top-right" });

            },
        }
    );

    const onSubmit = async () => {
        if (!stripe || !elements) {
            return;
        }



        const result = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement) as StripeCardElement,
            },
        });


        if (result.error) {
            toast.error(`${result.error.message}`, { position: "top-center" });
        }

        if (result.paymentIntent?.status === "succeeded") {
            bookAccomodation({ ...reservation, paymentIntentId: result.paymentIntent.id });
            console.log("Paser card payment");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto  pt-6 px-6 pb-3 flex flex-col justify-between bg-primary/90  rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="card-element" className="block text-xl font-medium text-secondary mb-2">
                    Credit or debit card
                </label>
                <div className="mt-3 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaCreditCard className="h-5 w-5 text-secondary" />
                    </div>
                    <CardElement
                        id="card-element"
                        options={{
                            style: {
                                base: {
                                    fontSize: '18px',
                                    color: '#312424',
                                    '::placeholder': {
                                        color: '#312424',
                                    },
                                    backgroundColor: '#00000',
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                        className="block w-full pl-10 sm:text-sm  rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
            </div>
            <div className="mt-6">
                <button
                    type="submit"
                    disabled={!stripe || isLoading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-primary bg-secondary transition-colors duration-200 hover:bg-secondary/90  disabled:opacity-50"
                >
                    {isLoading ? 'Processing...' : `Pay $${reservation.totalPrice.toFixed(2)}`}
                </button>
            </div>
            {/* {error && <div className="mt-4 text-red-600 text-sm">{error.message}</div>} */}
        </form>
    );
};

export default PaymentForm;