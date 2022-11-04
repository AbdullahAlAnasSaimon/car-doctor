import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete, handleStatusUpdate}) => {
  const {_id, customer, serviceName, price, email, phone, service, status} = order;
  const [orderServices, setOrderServices] = useState({});

  useEffect(() =>{
    fetch(`http://localhost:5000/services/${service}`)
    .then(res => res.json())
    .then(data => setOrderServices(data))
  },[service])


  return (
    <tr>
        <th>
          <label>
            <button onClick={() => handleDelete(_id)} className='btn bg-red-600 font-bold text-lg text-white border-0'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded-lg w-24 h-24">
                { orderServices?.img &&
                  <img src={orderServices?.img} alt="Avatar Tailwind CSS Component" />
                  }
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button onClick={() => handleStatusUpdate(_id)} className={`btn btn-xs text-gray-700 border-0 ${status ? "bg-green-300" : "bg-red-300"}`}>{status ? status : 'Pendingpm'}</button>
        </th>
      </tr>
  );
};

export default OrderRow;