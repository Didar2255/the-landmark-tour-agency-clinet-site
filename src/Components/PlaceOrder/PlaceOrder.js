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
        <div className="place-order">
            <h2>Place Order</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name")} defaultValue={user.displayName} placeholder="Enter Name" />
                <input {...register("Email")} defaultValue={user.email} placeholder="Enter Email" />
                <input {...register("Address")} placeholder="Enter Address" />
                <input type="number" {...register("Phone number")} placeholder='Enter Phone number' />
                <button className="btn btn-success" onClick={handelOk}>OK</button>
            </form>
        </div>
    );
};

export default PlaceOrder;