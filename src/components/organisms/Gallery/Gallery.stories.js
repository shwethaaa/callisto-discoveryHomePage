import React, { Component } from 'react';
import Gallery from './Gallery';
import 'bootstrap/dist/css/bootstrap.css';

export default {
    title: 'organisms/Gallery',
    Component: Gallery
}

let length = 1;

export const Default = () => <Gallery length={length}></Gallery>