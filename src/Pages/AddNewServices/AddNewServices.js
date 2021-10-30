import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddNewServices.css"

const AddNewServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://sleepy-springs-36451.herokuapp.com/addServices', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Inserted Successfully')
                    reset()
                }
            })
    };
    return (
        <div className='my-4'>
            <h2>Add New Services</h2>
            <div className="w-50 m-auto mt-4 h-5">
                <div className=" border  d-flex align-items-center justify-content-center p-4 rounded bg-light" >
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("tourName")}
                                placeholder='Tour name'
                                className='p-2 m-2'
                            />
                            <br />
                            <textarea {...register("description")}
                                placeholder='Description'
                                className="p-3 m-2"
                            />
                            <br />
                            <input {...register("tourImg")}
                                placeholder="Tour Image"
                                className='p-2 m-2'
                            />
                            <br />
                            <input type="number" {...register("price")}
                                placeholder="Tour Price"
                                className='p-2 m-2'
                            />
                            <br />
                            <input type="submit" className='w-50 btn btn-success' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewServices;