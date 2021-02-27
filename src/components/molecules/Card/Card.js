import React, { Component } from 'react';
import './Card.css';
import Image from '../../atoms/Image/Image';
import Button from '../../atoms/Buttons/Button';

const Card = (props) => {

    return (
        <div className='row cardContainer'>
            <div className='col-md-4 col-4'>
                <div className='heading'>{props.data.title}</div>
                <div className='subHeading'>{props.data.subTitle}</div>

                <div className='labels mt-3'>
                    <span className='mr-3 labelText'>{props.data.label1}</span>
                    <span className='labelText'>{props.data.label2}</span>
                </div>

                <div className='play mt-3'>
                    <span className='mr-3  '>
                        <Image src='https://www.emotionallyhealthy.org/wp-content/uploads/2018/03/81097-round-play-button.png' width='72px' height='72px' />
                    </span>
                    <span className='playText'>Play</span>
                </div>
            </div>
            <div className='col-md-7 col-7'>
                <Image src={props.data.src} width='880px' height='500px' />
            </div>
        </div>
    );
}

export default Card;
