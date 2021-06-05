import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';



class Navbar extends Component {

    render() {

        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark  px-sm-5">

                <Link to='/productList' className="nav-link">
                    Products
                </Link>

                {/* <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" variant="outline-light" >
                        All Brands
                        </Dropdown.Toggle> */}

                {/* <Dropdown.Menu>
                        <ProductConsumer>

                            {(v) => {

                                return (
                                    v.products.map(p => {
                                        return <Dropdown.Item href="/" onClick={() => p.handleBrand()}>{p.title}</Dropdown.Item>
                                    }) */}
                {/* 

                                )
                            }}
                        </ProductConsumer>


                    </Dropdown.Menu>
                </Dropdown> */}


                <Link to='/cart' className="ms-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus" />
                        <span className="ms-2">
                            MyCart
                        </span>
                    </ButtonContainer>
                </Link>

                {/* <Link to='/'>
                    <ButtonContainer>
                        Sign In
                    </ButtonContainer>
                </Link> */}
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform:capitalize!important;
    }
`;



export default Navbar;
