import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import First from './FirstPage';
import About from './AboutPage';
import Footer from './FooterComponent';
import Service from './ServicesComponent';

class Main extends Component{
    render(){
        return(
            <div>
                <First />
                <About />
                <Service />
                <Footer />
            </div>
        );
    }
}

export default Main;