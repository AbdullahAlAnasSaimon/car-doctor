import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = event =>{
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'unregistered';
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
    }
  }

  return (
    <div className=' w-10/12 mx-auto'>
      <form onSubmit={handlePlaceOrder}>
      <h2 className='text-3xl'>{title}</h2>
      <h4 className='text-xl'>Total : ${price}</h4>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <input name='firstName' type="text" placeholder="First name" className="input input-bordered w-full" />
          <input name='lastName' type="text" placeholder="Last name" className="input input-bordered w-full" />
          <input name='phone' type="number" placeholder="Your phone" className="input input-bordered w-full" />
          <input name='email' type="email" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
        </div>
        <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>
      </form>
      <input className='btn' type="submit" value="Place Your Order" />
    </div>
  );
};

export default Checkout;