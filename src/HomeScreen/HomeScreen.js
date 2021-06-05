import React from 'react';
import './HomeScreen.css';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Row from '../components/Row';
function HomeScreen(props) {
    return (
        <div className="homeScreen">
            {/* Nav */}
            <Nav />
            {/* Banner */}
            <Banner />
            {/* rows */}
            <Row />
            
        </div>
    );
}

export default HomeScreen;