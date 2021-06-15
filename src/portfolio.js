import React, { Component } from 'react';
import { BsFilterRight } from "react-icons/bs";

class Portfolio extends Component {
    render() {

        return (
            <div className="start__wrapper">
                <header>
                    <h1>Sandeep Rapolu
                     <p>Full Stack Developer</p>
                    </h1>
                    <div className="toggle__nav">
                        <BsFilterRight></BsFilterRight>
                    </div>
                </header>
                <ul className="menu__list">
                    <li><a src="#">About</a> </li>
                    <li><a src="#">Experience</a> </li>
                    <li><a src="#">Projects</a> </li>
                    <li><a src="#">Contact</a> </li>
                </ul>
            </div>
        );
    }
}

export default Portfolio;
