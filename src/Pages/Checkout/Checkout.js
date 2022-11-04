import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = event => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'unregistered';
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message
    }

    // if(phone.length > 10){
    //   alert('Phone number should be 10 digit or longer');
    // }

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          alert('Order placed Successfully');
          form.reset();
        }
      })
      .catch(err => console.log(err))

  }

  return (
    <div className=' w-10/12 mx-auto'>
      <form onSubmit={handlePlaceOrder}>
        <h2 className='text-3xl'>{title}</h2>
        <h4 className='text-xl'>Total : ${price}</h4>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <input name='firstName' type="text" placeholder="First name" className="input input-bordered w-full" />
          <input name='lastName' type="text" placeholder="Last name" className="input input-bordered w-full" />
          <input name='phone' type="number" placeholder="Your phone" className="input input-bordered w-full" required />
          <input name='email' type="email" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
        </div>
        <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>
        <input className='btn' type="submit" value="Place Your Order" />
      </form>
    </div>
  );
};

export default Checkout;