import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import First from './FirstPage';
import About from './AboutPage';
import Footer from './FooterComponent';

class Main extends Component{
    render(){
        return(
            <div>
                <First />
                <About />
                <Footer />
            </div>
        );
    }
}

export default Main;