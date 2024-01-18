import React from 'react';
import { Button } from 'react-bootstrap';

export default function Details(props) {
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
        <Button className="cta" variant="outline-primary">
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