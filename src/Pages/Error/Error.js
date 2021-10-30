import React from 'react';
import "./Error.css"
import error from '../../Images/Error/error.jpg'
import { useHistory } from 'react-router';

const Error = () => {
    const history = useHistory()
    const handelGoHome = () => {
        history.push('/home')
    }
    return (
        <div className='my-5'>
            <img src={error} alt="" className='img-fluid' />
            <h3>404 Page not found</h3>
            <p>This page are not available.Please try again ....</p>
            <button className='btn btn-danger' onClick={handelGoHome}>Go to home page</button>
        </div>
    );
};

export default Error;