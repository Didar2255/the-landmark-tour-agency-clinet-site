import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import "./LogIn.css"

const LogIn = () => {
    const history = useHistory()
    const location = useLocation()
    const { handelGoogleSignIn } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const redirect_uri = location.state?.from || '/home'
    const handelLogIn = () => {
        handelGoogleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="login my-5">
            <h1>Welcome TO Landmark tour ! PLEASE LOG-IN </h1>
            <div className="login-form">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Email :</label>
                        <input {...register("Email")} placeholder='Enter Your Email' />
                        <label htmlFor="">Password :</label>
                        <input {...register("Password")} placeholder="Enter Your Password" /> <br />
                        <input type="submit" value='Log In' />
                    </form>
                    <button className='button' onClick={handelLogIn}><i className="fab fa-google icon"></i> Sign with Google</button>
                </div>
            </div>

        </div>
    );
};

export default LogIn;