import React, { useState } from 'react';
import './Cards.css';
import img1 from '../../assets/images/image-product-1.jpg';
import img2 from '../../assets/images/image-product-2.jpg';
import img3 from '../../assets/images/image-product-3.jpg';
import img4 from '../../assets/images/image-product-4.jpg';
import { LuPlus } from "react-icons/lu";
import { TiMinus } from "react-icons/ti";

function Cards() {
  const [selectedImage, setSelectedImage] = useState(img1);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='big_container'>
      <div className="container_cards">
        <div className="big-img">
          <img src={selectedImage} alt="" className="SelectedImage" />
        </div>
        <div className="small-img">
          <img src={img1} alt="" onClick={() => setSelectedImage(img1)} />
          <img src={img2} alt="" onClick={() => setSelectedImage(img2)} />
          <img src={img3} alt="" onClick={() => setSelectedImage(img3)} />
          <img src={img4} alt="" onClick={() => setSelectedImage(img4)} />
        </div>
      </div>
      <div className="container_infos">
        <h3>Sneaker Company</h3>
        <h1 id="titre_produit">Fall Limited Edition Sneakers</h1>
        <b>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</b>
        <div className="prix">
          <div className="left1 prix-desktop">
            $<b id="price_product">125.00</b>
            <div className="promotion">
              <b>50%</b>
            </div>
          </div>
          <div className="right2">
            <b>$250.00</b>
          </div>
        </div>
        <div className="boxs">
          <div className="button1">
            <button id="plus-btn" onClick={increaseQuantity}>
              <LuPlus />
            </button>
            <div className="number" id="quantity">{quantity}</div>
            <button id="minus-btn" onClick={decreaseQuantity}>
              <TiMinus />
            </button>
          </div>
          <button className="btn1" id="add-to-cart-btn">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fill-rule="nonzero"/>
            </svg>
            <h2>add to cart</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
