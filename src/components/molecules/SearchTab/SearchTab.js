import React, { Component } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Buttons/Button';

const SearchTab = () => {
    return (
        <React.Fragment>
            <div className='row'>
                <div className='col-7 col-md-7 pl-2'>
                    <Input size='small' placeholder='Search for show, episose, shorts etc.' ></Input>
                </div>
                <div className='col-5 col-md-5'>
                    <Button variant='primary'> Sign In</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SearchTab;