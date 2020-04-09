import React, {Component} from 'react';
import '../css/Header.css'


class Header extends Component{

    state = {
        logoUrl: [require('../img/logo-white.png'), require('../img/logo.png')],
        linkDescription: ["Food Delivery", "How it works", 'Our cities', 'Sign Up'],
        linkTags: ['#header', '#section-steps', '#section-cities', '#section-form']
    }


    render(){

        const arr = [1,2,3, 4];
        
        const list = arr.map((el, index) => {
            return (
                <li className="nav-item active p-3 header__navbar--li">
                    <a href={this.state.linkTags[index]} className="nav-link text-white">
                        {this.state.linkDescription[index]}
                    </a>
                </li>
            )
        })


        return(
            <header id = "header">
                <nav className = "navbar navbar-expand-lg container header__navbar">
                    <a href="#header" className="navbar-brand header__navbar--img m-3">
                        <img src={this.state.logoUrl[0]} alt="logo"
                        className = "img-fluid"></img>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navList" aria-controls="navList" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id = "navList">
                        <ul className="navbar-nav ml-auto">
                            {list}
                        </ul>
                    </div>
                </nav>

                <div id= "header__main" className= "container text-left d-flex flex-column justify-content-center">
                    <h2 className="text-uppercase display-4 text-white">GoodBye Junk Food.</h2>
                    <h2 className="text-uppercase display-4 text-white">Hello Super Healthy Meals.</h2>
                    <div id = "header__main--btn">
                        <button className="btn btn-lg rounded-pill m-3 header__main--btn__real">I'm Hungry</button>
                        <button className="btn btn-lg rounded-pill header__main--btn__shadow">Show Me More</button>
                    </div>
                </div>

            </header>
        )
    }
}

export default Header;



