import React, { Component } from 'react';
import { BsFilterRight } from "react-icons/bs";
import { Link } from "react-router-dom";
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
                    <li><Link to="/">About</Link> </li>
                    <li><Link to="/">Experience</Link> </li>
                    <li><Link to="/">Projects</Link> </li>
                    <li><Link to="/">Contact</Link> </li>
                </ul>
            </div>
        );
    }
}

export default Portfolio;
