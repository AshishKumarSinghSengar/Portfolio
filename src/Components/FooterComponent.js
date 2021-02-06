import React, { Component } from 'react';
import '../style/footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                    <h2>It's Never to late too start. let's start together :)</h2> 
                    <h2>Made by <span>Ashish Sengar</span></h2>
                    <div className="social-media">
                        <a href="#" className="btn"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="btn"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="btn"><i className="fa fa-whatsapp"></i></a>
                        <a href="#" className="btn"><i className="fa fa-instagram"></i></a>
                        <a href="#" className="btn"><i className="fa fa-youtube"></i></a>
                    </div>
                    <h5>ashish.sengar18@yahoo.com | +91 9407548510</h5>
            </div>
        );
    }
}

export default Footer;