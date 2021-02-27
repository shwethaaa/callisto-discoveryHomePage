import React, { Component } from 'react';
import Card from '../../molecules/Card/Card';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Corousal = (props) => {
    return (
        <Carousel axis="horizontal" showArrows={true} showThumbs={true} className='carousel-container' autoPlay={true}>
            {
                props.data.map((data, index) => {
                    return (
                        <Card data={data} key={index}></Card>
                    )
                }
                )
            }
        </Carousel>

    );
}

export default Corousal;