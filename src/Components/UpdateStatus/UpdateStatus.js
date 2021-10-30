import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';

const UpdateStatus = () => {
    const { register, handleSubmit } = useForm();
    const [tour, setTour] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/updateStatus/${id}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, []);

    const handelUpdate = (event) => {
        const update = event.target.value;
        const updateStatus = { ...tour }
        updateStatus.status = update;
        setTour(updateStatus)
    };

    const onSubmit = data => {
        const url = `http://localhost:5000/updateStatus/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update success full')
                }
            })
    };

    return (
        <div className='my-5'>
            <h3>Manage Update Status</h3>
            <p>Please approve this Order.. </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("status")} onChange={handelUpdate} value={tour.status || " "} />
                <input type="submit" value='Update' />
            </form>

        </div>
    );
};

export default UpdateStatus;