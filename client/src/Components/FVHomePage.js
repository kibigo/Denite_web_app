import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

import { Details } from "./Details";

const FruitsVegPage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const fruitsData = [
    { id: 1, name: 'Apple', category: 'Fruits', weight: '250g', price: 'KES. 1.99', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_27f437949aa7ff723dcd79d49f33923782d863f53439c2f06ed6acf40188f677.png?w=1024&h=1024' },
    { id: 2, name: 'Carrot', category: 'Vegetables',weight: '250g',  price: 'KES. 0.99', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_1c53fa7ea665a3ae324e9bf9a2b53744b3d8201d800147b84d2a336561c29548.png?w=1024&h=1024' },
    { id: 3, name: 'Banana', category: 'Fruits', weight: '250g', price: 'KES. 0.75', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_cbf23631d5c48d885a437266163f3654474858c647c4b54a11c8b63c95973460.png?w=1024&h=1024' },
    { id: 4, name: 'Grapes', category: 'Fruits', weight: '250g', price: 'KES. 2.49', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_da218e2b1d438758b4f64ab4b77da9826c43342d75b6075aa3e9446fa89dd667.png?w=1024&h=1024' },
    { id: 5, name: 'Strawberry', category: 'Fruits', weight: '250g', price: 'KES. 1.79', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_523c1556d0274a14d44ca9e70ab8c88b920bfca5ffb78a1f73543a31a650ca3c.png?w=1024&h=1024' },
    { id: 6, name: 'Cucumber', category: 'Vegetables', weight: '250g', price: 'KES. 0.69', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_da9e584c75ca8dd0ecefef754b36751a0d9b17a93cdfdb370b8746461e80ae5d.png?w=1024&h=1024' },
    { id: 7, name: 'Pineapple', category: 'Fruits', weight: '250g', price: 'KES.2.99', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_01aeaa982b4648323a50e996e27b57fcd9fc626459afaebbd1a4d7721041b54f.png?w=1024&h=1024' },
    { id: 8, name: 'Tomato', category: 'Vegetables', weight: '250g', price: 'KES.0.89', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_e723f623853feec4b2f1073cfd08395cfa35460631bfa2981c10d2882d0dc072.png?w=1024&h=1024' },
    { id: 9, name: 'Mango', category: 'Fruits', weight: '250g', price: 'KES.1.99', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_06acb7ca59481e754e20bb0a00afd985ee72de1c6a4fe79ccc6eb4335fe02690.png?w=1024&h=1024' },
    { id: 10, name: 'Broccoli', category: 'Vegetables', weight: '250g', price: 'KES. 1.49', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_aef2196463e2855ca11ebe2664d85198dc6e5f11696fc2c0bfde6134197b0e57.png?w=1024&h=1024' },
    { id: 11, name: 'Potato', category: 'Vegetables', weight: '250g', price: 'KES. 0.49', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_a75c1e41b3edfcf8291173100c37bb51a9375fd3f3897fccbb003d9814d300f9.png?w=1024&h=1024' },
    { id: 12, name: 'Watermelon', category: 'Fruits', weight: '250g', price: 'KES. 3.99', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_8fcd2ee67aed0f72239189121b54b2b83e984da6c5774737779f56f2cc53cfb7.png?w=1024&h=1024' },
    { id: 13, name: 'Bell Pepper', category: 'Vegetables',weight: '250g', price: 'KES. 1.29', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_245f3c90e62f34ff7c326ce580d792539746f3b1b6d42b1cc5871647e8f7a422.png?w=1024&h=1024' },
    { id: 14, name: 'Blueberries', category: 'Fruits', weight: '250g', price: 'KES. 2.99', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_5a662f9c1a16a5f0082f60ba0ea65424acda7b77fc124d7da0b2244438fbb408.png?w=1024&h=1024' },
    { id: 15, name: 'Zucchini', category: 'Vegetables', weight: '250g',  price: 'KES. 1.19', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_10bfdba91641bb3c6bb9dfe14b8b8a14e278a3bb7b9ee22148518d71c6c4fd2a.png?w=1024&h=1024' },
    { id: 16, name: 'Orange', category: 'Fruits', weight: '250g', price: 'KES. 1.25', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_48dc593109e98207c470d9a9929fe8a3ab9a8172b648f4cc155e51e757286c29.png?w=1024&h=1024' },
    { id: 17, name: 'Asparagus', category: 'Vegetables', weight: '250g', price: 'KES. 2.49', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_985d9cd75eb658404d96faa47252cde16eeb6a608aafa0ba2fdaaf640e721c35.png?w=1024&h=1024' },
    { id: 18, name: 'Pear', category: 'Fruits', weight: '250g', price: 'KES. 1.79', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_3e8cec81d098009281d150897496f9aed81fbe87b013c6a56273e945e34e263c.png?w=1024&h=1024' },
    { id: 19, name: 'Cabbage', category: 'Vegetables', weight: '250g', price: 'KES. 0.99', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_8a161d392a64f7b9deec8f153abfe453d11d2747c11603ebbcb496ca09d49855.png?w=1024&h=1024' },
    { id: 20, name: 'Avocado', category: 'Fruits', weight: '250g', price: 'KES. 2.49', imageurl: 'https://qph.cf2.poecdn.net/main-sdxl_2f6ce9d37605eef2dc9d4ed77dd9efca236a065361853e2795e732957fdddc35.png?w=1024&h=1024' },
    // Add more products as needed
  ];


  const details = fruitsData.map((item) => (
    <Details
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
      weight={item.weight}
    />
  ));


  return (
    <div className="HomePage">
      <div className="shop-from-top-categories">
        <div className="top-categories-frame">
          <div className="title">
            <div className="shop-from-top-categories-parent">
              <div className="heading-wrapper">
                <h1 className="shop-from-top-container">
                  <span>{`Fruits and  `}</span>
                  <span className="top-categories">Vegetables</span>
                </h1>
              </div>
              <div className="line-div" />
            </div>
            <div className="title-child" />
          </div>
        </div>
        <Carousel responsive={responsive}>{details}</Carousel>
      </div>
    </div>
  );
};

export default FruitsVegPage;