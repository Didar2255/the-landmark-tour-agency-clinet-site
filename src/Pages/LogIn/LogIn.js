import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import "./LogIn.css"

const LogIn = () => {
    const { handelGoogleSignIn } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="login">
            <h1>PLEASE LOG-IN </h1>
            <div className="login-form">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Email :</label>
                        <input {...register("Email")} placeholder='Enter Your Email' />
                        <label htmlFor="">Password :</label>
                        <input {...register("Password")} placeholder="Enter Your Password" /> <br />
                        <input type="submit" value='Log In' />
                    </form>
                    <button className='button' onClick={handelGoogleSignIn}><i class="fab fa-google icon"></i> Sign with Google</button>
                </div>
            </div>

        </div>
    );
};

export default LogIn;