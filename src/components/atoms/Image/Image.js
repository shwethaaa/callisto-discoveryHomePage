import React, { Component } from 'react';

const Image = (props) => {
    const { src, width, height, ...rest } = props;
    return (
        <img
            alt={props.altText}
            src={props.src}
            className={props.className}
            {...props}
        />

    );
}

export default Image;