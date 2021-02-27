import React, { Component } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';

export default {
    title: 'organisms/Header',
    Component: Header
}

let banner = {
    "logo": "https://www.discoveryplus.in/f949cf3160011e286816839197ec2450.png",
    "altText": "logo_image",
    "width": "21%",
    "height": "100%"
}

export const Default = () => <Header banner={banner}></Header>