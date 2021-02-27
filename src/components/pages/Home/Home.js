import React, { Component } from 'react';
import Header from '../../organisms/Header/Header';
import Corousal from '../../organisms/Corousal/Corousal';
import Gallery from '../../organisms/Gallery/Gallery';

const Home = (props) => {
    return (
        <React.Fragment>
            <Header banner={props.data.header}></Header >
            <Corousal data={props.data.carousel}></Corousal>
            <Gallery length={16}></Gallery>
        </React.Fragment>

    );
}

export default Home;