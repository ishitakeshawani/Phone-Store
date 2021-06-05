import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns.js';
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Contexts";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import StripeContainer from "./StripeContainer";
import Navbar from "./../Navbar";


export default class Cart extends Component {
    render() {

        return (

            <section>
                <Navbar />
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart"></Title>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                    <StripeContainer value={value} />
                                </React.Fragment>

                            );

                        }
                        else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>




            </section>
        )
    }
}
