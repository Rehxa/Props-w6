/** @format */
import React from "react";
function Card({ title, desciption, image: { src, alt } }) {
  return (
    <div className='card'>
      <img src={src} alt={alt} />
      <div className='des'>
        <h3>{title}</h3>
        <p>{desciption}</p>
      </div>
    </div>
  );
}

export default Card;
