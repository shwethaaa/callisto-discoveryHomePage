import React, { Component } from 'react';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';

export default {
    title: 'pages/Home',
    Component: Home
}

let homeData = {
    "header": {
        "logo": "https://www.discoveryplus.in/f949cf3160011e286816839197ec2450.png",
        "altText": "logo_image",
        "width": "21%",
        "height": "100%"
    },
    "carousel": [
        {
            "src": "https://ap2-prod-images.disco-api.com/2020/12/07/98b9ffcc-807c-42c8-b698-bdba2b67c5a7.jpeg",

            "title": "Tales of Valour",
            "subTitle": "Revisit the history of India's wars and learn about some of the untold tales of...",
            "label1": "Best of 2020",
            "label2": "Trending"
        }]
};

export const Default = () => <Home data={homeData} />;