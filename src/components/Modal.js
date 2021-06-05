import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Contexts';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';


class Modal extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value) => {
                        const { modalOpen, closeModal } = value;
                        const { img, title, price } = value.modalProduct;

                        if (!modalOpen) {
                            return null;
                        } else {
                            return (
                                <ModalContainer>
                                    <div className="container">
                                        <div className="row">
                                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                                <h5>
                                                    item added top the cart
                                            </h5>
                                                <img src={img} className="img-fluid" alt="product" />
                                                <h5>{title}</h5>
                                                <h5 className="text-muted">Price : ${price}</h5>
                                                <Link to="/productList">
                                                    <ButtonContainer onClick={() => {
                                                        closeModal()
                                                    }}>
                                                        Continue Shopping
                                                    </ButtonContainer>
                                                </Link>
                                                <Link to="/cart">
                                                    <ButtonContainer cart onClick={() => {
                                                        closeModal()
                                                    }}>
                                                        go to cart
                                                    </ButtonContainer>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ModalContainer>
                            )
                        }
                    }}
                </ProductConsumer>
            </div>
        );
    }
}

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background:var(--mainWhite);

    }


`;



export default Modal;
