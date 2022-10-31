import React from 'react';

const BannerItem = ({slide}) => {
  const {id, image, prev, next} = slide;
  return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
          <img src={image} className="w-full" alt='' />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
          <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-[100px] top-1/2">
          <h1 className='text-6xl font-semibold text-white'>
            Affordable
            <br />
            Price for car
            <br />
            Servicing
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-[100px] top-2/3 w-2/5">
          <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-[100px] top-3/4">
          <button className="btn btn-warning mr-5 rounded-md ">See More</button>
          <button className="btn btn-outline btn-warning rounded-md ">See More</button>
        </div>
      </div>
  );
};

export default BannerItem;