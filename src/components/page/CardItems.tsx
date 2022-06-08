import React from "react";

const CardItems = ({ ...item }) => {
  return (
    <>
      <div className="card_item">
        <span>{item.id}</span>
        <h5>Name:{item.name}</h5>
        <p>Email:{item.email}</p>
        <p>City:{item.address.city}</p>
      </div>
    </>
  );
};

export default CardItems;
