import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import "./PlaceOrder.css"

const PlaceOrder = () => {
    const history = useHistory()
    const { user } = useAuth()
    const { register, handleSubmit } = useForm();
    const handelOk = () => {
        history.push('/home')
    }
    const onSubmit = data => console.log(data);
    return (
        <div className="place-order my-5">
            <h2>Place Order</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name")} defaultValue={user.displayName} placeholder="Enter Name" />
                <input {...register("Email")} defaultValue={user.email} placeholder="Enter Email" />
                <input {...register("Address")} placeholder="Enter Address" required />
                <input type="number" {...register("Phone number")} placeholder='Enter Phone number' required />
                <button className="btn btn-success px-5" onClick={handelOk}>Proceed To Check Out</button>
            </form>
        </div>
    );
};

export default PlaceOrder;