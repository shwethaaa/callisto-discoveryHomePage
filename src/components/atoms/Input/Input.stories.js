import React, { Component } from 'react';
import Input from './Input'
import 'bootstrap/dist/css/bootstrap.css';

export default {
    title: 'atoms/Input',
    Component: Input
}

export const small = () => <Input size='small' placeholder='Small size' ></Input>