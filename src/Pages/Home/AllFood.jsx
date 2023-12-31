import React from 'react';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';
import useItem from '../../hook/useItem';
import UpdateModal from './UpdateModal';
import { BsCurrencyRupee } from 'react-icons/bs';

const AllFood = () => {
  const [menu, loading, refetch] = useItem();

  const handleDelete = (item) => {
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
        fetch(`https://resturant-server-gray.vercel.app/menu/${item._id}`, {
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
            refetch(); // Trigger a refetch after successful deletion
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
    console.log(item._id);
  }

  return (
    <div className='p-1'>
      <h4 className='text-center text-pink-500 text-3xl '> Total Menu: {menu.length}</h4>
      <div className="md:overflow-x-auto ">
        <table className="md:table">
          {/* head */}
          <thead className=''>
            <tr className='md:text-lg font-serif text-black font-bold'>
              <th>
                #
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Delete</th>
              <th className='text-xs '>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              menu.map((item, i) => (
                <tr key={item._id} >
                  <th>
                    {i + 1}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle  md:w-12 md:h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className=''>
                 <span className='flex items-center gap-1'> <BsCurrencyRupee/>{item.price}</span>
                  </td>
                  <td>{item.category}</td>
                  <td>
                    <button onClick={() => handleDelete(item)} className=" text-red-500 lg:text-lg md:text-lg"><FaTrashAlt /></button>
                  </td>
                  <td><UpdateModal key={item.name} refetch={refetch} item={item}></UpdateModal></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFood;
