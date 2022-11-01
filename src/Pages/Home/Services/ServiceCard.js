import React from 'react';

const ServiceCard = ({service}) => {
  const {img, price, title} = service;
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure><img className='w-auto h-[226px]' src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className='text-xl text-orange-600 font-semibold'>${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;