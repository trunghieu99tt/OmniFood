import React , {Component} from 'react';
import '../css/Footer.css'

class Footer extends Component{


    state = {
        links : ['About Us', 'Blog', 'Press', 'iOS App','Android App']
    }

    render(){

        const arr = [1,2,3,4,5];

        const links = arr.map((el, index) => {
            return(
                <li className="nav-item">
                    <a className = "nav-link text-white" href="#AboutUs">
                        {this.state.links[index]}
                    </a>
                </li>
            )
        })

        return(
            <footer className = "container-fluid bg-dark text-center mt-5 font-weight-light " >
                <ul className= "nav pt-5 d-flex justify-content-center">
                    {links}
                </ul>

                <p className = "text-white py-5">Copyright © 2015 by Omnifood. All rights reserved.</p>

            </footer>
        )
    }
}

export default Footer;
