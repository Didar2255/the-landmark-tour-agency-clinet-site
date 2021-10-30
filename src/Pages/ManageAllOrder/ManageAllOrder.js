import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import "./ManageAllOrder.css"

const ManageAllOrder = () => {
    const [users, setUsers] = useState([])
    const [isDelete, setIsDelete] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/manageOrder')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [isDelete])
    const handelUpdate = () => {

    }

    const handelDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are you sure to Delete')
                    setIsDelete(true)
                }
                else {
                    setIsDelete(false)
                }
            })
    }
    return (
        <div className='my-4'>
            <h2>Manage all order</h2>
            <Container>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Order Name</th>
                            <th>Package Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr>
                                <td>{user.email}</td>
                                <td>{user.tourName}</td>
                                <td>{user.price}</td>
                                <td><i class="fas fa-edit update-icon" onClick={handelUpdate}></i></td>
                                <td><i class="fas fa-trash-alt delete-icon" onClick={() => handelDelete(user._id)}></i></td>
                            </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageAllOrder;