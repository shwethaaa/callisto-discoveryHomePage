import React, { Component } from 'react';
import Button from './Button'
import 'bootstrap/dist/css/bootstrap.css';

export default {
    title: 'atoms/Button',
    Component: Button
}

export const Primary = () => <Button variant='primary'>Primary</Button>