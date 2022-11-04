import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Order = () => {
  const {user} = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setOrders(data))
  },[user?.email])

  const handleDelete = id =>{
    const proced = window.confirm('Are you sure you want to delete');
    if(proced){
      fetch(`http://localhost:5000/orders/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount){
          alert('Deleted Successfully');
          const remaining = orders.filter(odr => odr._id !== id)
          setOrders(remaining);
        }
      })
    }
  }

  const handleStatusUpdate = id =>{
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status: 'Approved'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0){
        const remainig = orders.filter(odr => odr._id !== id)
        const approving = orders.find(odr => odr._id === id)
        approving.status = "Approved";
        const newOrders = [approving, ...remainig];
        setOrders(newOrders);
      }
    })
  }

  return (
    <div className='w-10/12 mx-auto'>
      <h2>You Have : {orders.length} Orders</h2>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map(order => <OrderRow
        key={order._id}
        order={order}
        handleDelete={handleDelete}
        handleStatusUpdate={handleStatusUpdate}
        ></OrderRow>)
      }
    </tbody>
    
  </table>
</div>
    </div>
  );
};

export default Order;