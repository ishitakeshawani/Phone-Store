import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51IxTGsSHBMg24esRlA6HZLUdkY8kUBHyRmJw2H2S0h3UTq8rjHGhX7XvEuIV0ztC2sIQMJRMUQZJmzUMN6LGFBEE00iW7IjgiM"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer({ value }) {
    const { cartTotal } = value;
    // console.log(cartTotal);
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm cartTotal={cartTotal} />
        </Elements>
    )
}