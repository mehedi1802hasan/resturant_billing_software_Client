import React, { useEffect, useState } from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';
import './bill.css'
import Swal from 'sweetalert2';
import { RiDeleteBinLine } from 'react-icons/ri';

const Bills = () => {
  const [checkout, setCheckout] = useState([]);

  useEffect(() => {
  fetchCheckout();
  }, []);

  const fetchCheckout=()=>{
    fetch('https://resturant-server-gray.vercel.app/checkout')
    .then((res) => res.json())
    .then((data) => setCheckout(data))
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete all payment history'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('https://resturant-server-gray.vercel.app/checkout', {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Response from server:', data); // Add this line to see the response
            
            if (data.deletedCount > 0) {
              fetchCheckout();

              console.log('if');
              Swal.fire(
                'Deleted!',
                'The menu item has been deleted.',
                'success'
              );
            } else {
              fetchCheckout();

              console.log('else');
            }
          })
          .catch((error) => {
            console.error('Error deleting checkout records:', error);
            Swal.fire(
              'Error',
              'An error occurred while deleting payment history',
              'error'
            );
          });
      }
    });
  };
  
  return (
    <div className='p-3'>
      <h3 className='text-center font-semibold font-serif text-2xl'>Total Bills: {checkout.length}</h3>
      <div className='flex justify-end items-center gap-2' onClick={() => handleDelete()}>
  <span>Delete all payment history</span>
  <span className='text-red-500 text-3xl btn btn-md rounded-full bg-black'><RiDeleteBinLine/></span>
</div>



      <table className='w-full border-collapse border border-pink-200 mt-4'>
        <thead>
          <tr>
          <th className='border border-pink-200 text-center  '>#</th>
            <th className='border border-pink-200 text-center'>Customer Name</th>
            <th className='border border-pink-200 text-center'>Payed</th>
            <th className='border border-pink-200 text-center'>Total Items</th>
            <th className='border border-pink-200 text-center'>Items</th>
          </tr>
        </thead>
        <tbody>
          {checkout.length > 0 ? (
            checkout.map((payment, i) => (
              <PaymentItem key={payment._id} payment={payment} i={i}/>
            ))
          ) : (
            <tr>
              <td colSpan='4' className='text-center'>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function PaymentItem({ payment,i }) {
  const trRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => trRef.current,
  });

  return (
    <tr className='m' ref={trRef}>
      <td className='border border-pink-200 text-center no-print '>{i+1}</td>
      <td className='border border-pink-200 text-center print-flex'><span className='hidden mm'>CustomerName :</span>{payment.customerName}</td>
      <td className=' border border-pink-200 text-center print-flex'><span className='hidden mm'>Payed Price : </span>{payment.price} inr</td>
      <td className='border border-pink-200 text-center print-flex'><span className='hidden mm'>Total Item :</span>{payment.items && payment.items.length}</td>
      <td className='border border-pink-200 text-center '>
        {payment.items && payment.items.length > 0 ? (
          <ul className=''>
            <span className='hidden mm'>ItmesName : </span>
            {payment.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        ) : null}
      </td>
      <td className='border border-pink-200 text-center'>
        <button onClick={handlePrint} className='btn btn-md btn-outline rounded-xl text-2xl no-print'>
          <FaCloudDownloadAlt />
        </button>
      </td>
    </tr>
  );
}

export default Bills;
