import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    state = {
        clicked: false
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav>
                <a href="index.html">Logo</a>
                <div id="mobile" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className={`menu ${this.state.clicked ? 'active' : ''}`}>
                    <ul id="navbar">
                        <li><a href="index.html">Blogs</a></li>
                        <li><a href="index.html">Journal</a></li>
                        <li><a href="index.html">Music</a></li>
                        <li><a href="index.html">Book Appointment</a></li>
                        <li><a href="index.html">Profile</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
