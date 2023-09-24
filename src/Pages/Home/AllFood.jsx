import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import UpdateModal from './UpdateModal';
import { FaTrashAlt } from 'react-icons/fa';

const AllFood = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, []);
    const handleDelete = (item) => {
        console.log(item._id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/menu/${item._id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'The menu item has been deleted.',
                                'success'
                            );
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting class:', error);
                        Swal.fire(
                            'Error',
                            'An error occurred while deleting the menu.',
                            'error'
                        );
                    });
            }
        });
    }
    const handleEdit = (item) => {
        console.log(item._id)
    }
    return (
        <div>
            <h4 className='text-center text-pink-500 text-3xl '> Total Menu: {menu.length}</h4>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th >Delete</th>
                            <th >Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, i) => <>
                                <tr key={item._id} >
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                      $  {item.price}

                                    </td>
                                    <td>{item.category}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className=" text-red-500 text-lg"><FaTrashAlt/></button>

                                    </td>
                                    <td><UpdateModal key={item.name} item={item}></UpdateModal></td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllFood;