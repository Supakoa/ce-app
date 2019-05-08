import React, { Component } from 'react';
import Header from './navbarAndnews/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

export default class CeApp extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
