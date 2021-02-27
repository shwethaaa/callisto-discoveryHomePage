import React, { Component, useLayoutEffect } from 'react';
import SearchTab from '../../molecules/SearchTab/SearchTab';
import Image from '../../atoms/Image/Image';
import './Header.css'

const Header = (props) => {
    console.log(props);

    return (
        <React.Fragment>
            <div className="row mt-4">
                <div className="col-8">
                    <ul>
                        <li><Image src={props.banner.logo} width={props.banner.width} height={props.banner.height} /></li>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">Explore</a></li>
                        <li><a href="#contact">Shorts</a></li>
                        <li><a href="#about">Mindblown</a></li>
                        <li><a href="#about">Premium</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <SearchTab></SearchTab>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Header;