import React, { Component } from 'react';
import Corousal from './Corousal';
import 'bootstrap/dist/css/bootstrap.css';

export default {
    title: 'organisms/corousal',
    Component: Corousal
}

let carousel = [
    {
        "src": "https://ap2-prod-images.disco-api.com/2020/12/07/98b9ffcc-807c-42c8-b698-bdba2b67c5a7.jpeg",

        "title": "Tales of Valour",
        "subTitle": "Revisit the history of India's wars and learn about some of the untold tales of...",
        "label1": "Best of 2020",
        "label2": "Trending"
    }];

export const Default = () => <Corousal data={carousel}></Corousal>