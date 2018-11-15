import React, { Component } from "react";
import "./Home.css";
import mcg from '../Mucugin_img.jpg'

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>Mcgugin Dining Center Menu</h1>
                    <p>Log in to see the weekly menu</p>
                </div>
                <div className="center">
                    <img src={mcg}/>
                </div>
            </div>
        );
    }
}