import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
  return (
    <div className='w-10/12 mx-auto'>
      <div>
        <p className="text-xl font-semibold text-orange-600">Service</p>
        <h2 className='text-5xl font-semibold'>Our Service Area</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {
          services.map(service => <ServiceCard 
            key={service._id} 
            service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;