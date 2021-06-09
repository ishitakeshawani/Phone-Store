import React, { Component } from 'react';
import styled from 'styled-components';




class BlankNavbar extends Component {

    render() {

        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark  px-sm-5">

                <div className="title">
                    Phone Store App
                </div>


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



export default BlankNavbar;
