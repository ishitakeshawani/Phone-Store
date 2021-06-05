import React, { Component } from 'react';
import { ProductConsumer } from '../Contexts';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';


export default class Details extends Component {
    render() {
        return (

            <ProductConsumer>
                {v => {
                    const { id, company, img, info, price, title, inCart } = v.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                    <img src={img} alt="img" className="img-fluid" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:
                                        </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    <div>
                                        <Link to="/productList">
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart="true"
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                v.addtoCart(id);
                                                v.openModal(id);
                                            }}>
                                            {inCart ? 'inCart' : 'add to cart'}
                                        </ButtonContainer>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
