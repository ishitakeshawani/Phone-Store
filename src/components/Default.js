import React, { Component } from 'react';
import Navbar from "./Navbar";

export default class Default extends Component {
    render() {

        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-uppercase pt-5">
                            <h1 className="display-3">
                                404
                            </h1>
                            <h1>
                                error
                            </h1>
                            <h2>
                                page not found
                            </h2>
                            <h3>
                                The  requested URL <span className="text-danger">{this.props.location.pathname} </span>not found
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
