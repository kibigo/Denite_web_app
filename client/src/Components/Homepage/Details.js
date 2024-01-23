import React from 'react';
import { Button } from 'react-bootstrap';

export default function Details(props) {

  const handleAddToCart = () => {
    const newproduct ={
      id:props.id,
      name: props.name,
      price:props.price,
      imageurl:props.imageurl

    }
    props.handleAddToCart(newproduct)
  }
  return (
    <div>
      <section className="vegetables-fruits">
        <div className="vegetables-fruits-frame"></div>
      </section>
      <div className="card">
        <img className="product--image" src={props.url} alt="" />
        <h4>{props.name}</h4>
        {props.weight && <p>Weight: {props.weight}</p>}
        {props.price && <p className="price">Price: {props.price}</p>}
        <Button className="cta" variant="outline-primary" onClick={handleAddToCart}>
          ADD
        </Button>
        <p>{props.description}</p>
        <div className="frame-child9" />
        <div className="offer">
          <b className="off">20% OFF</b>
        </div>
      </div>
    </div>
  );
}


export { Details };
