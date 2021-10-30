import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ManageAllOrder.css"

const ManageAllOrder = () => {
    const [users, setUsers] = useState([])
    const [isDelete, setIsDelete] = useState(null)
    useEffect(() => {
        fetch('https://sleepy-springs-36451.herokuapp.com/manageOrder')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [isDelete]);

    const handelDelete = (id) => {
        const proceed = window.confirm('Are you Sure to delete')
        if (proceed) {
            fetch(`https://sleepy-springs-36451.herokuapp.com/deleteOrders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete This Order')
                        setIsDelete(true)
                    }
                    else {
                        setIsDelete(false)
                    }
                });
        }
    }
    return (
        <div className='my-4'>
            <h2>Manage all order</h2>
            <div >
                <div >
                    <Container>
                        <Table striped bordered hover size="sm" className='table'>
                            <thead>
                                <tr>
                                    <th >Email</th>
                                    <th >Order Name</th>
                                    <th >Package Price</th>
                                    <th >Order Status</th>
                                    <th >Update</th>
                                    <th >Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => <tr>
                                        <td>{user.email}</td>
                                        <td>{user.tourName}</td>
                                        <td>{user.price}</td>
                                        <td>{user.status}</td>
                                        <td><Link to={`/updateStatus/${user._id}`}><i class="fas fa-edit update-icon"></i></Link></td>
                                        <td><i class="fas fa-trash-alt delete-icon" onClick={() => handelDelete(user._id)}></i></td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;