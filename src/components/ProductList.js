import React, { Component } from 'react';
import Product from "./Product";
import Title from './Title';
import { ProductConsumer } from "../Contexts";
import Navbar from "./Navbar";

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {v => {
                                    return v.products.map(product => {
                                        return <Product key="product.id" Product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}
