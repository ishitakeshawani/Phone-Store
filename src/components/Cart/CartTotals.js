import React from 'react';
import { Link } from 'react-router-dom'


const CartTotals = ({ value }) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="mt-2 ml-sm-5  text-capitalize text-center">
                        <Link to="/productList">
                            <div className="col-md-12 text-center">
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                    type="button"
                                    onClick={() => {
                                        clearCart();
                                    }}
                                >
                                    clear cart
                            </button>
                            </div>

                        </Link>
                        <h5>
                            <span className="text-center">
                                subtotal :
                            </span>
                            <strong>
                                $ {cartSubTotal}
                            </strong>
                        </h5>
                        <h5>
                            <span>
                                tax :
                            </span>
                            <strong>
                                $ {cartTax}
                            </strong>
                        </h5>
                        <h5>
                            <span>
                                total :
                            </span>
                            <strong>
                                $ {cartTotal}
                            </strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartTotals;
