import React, {useState} from 'react';
import './Cards.css';

import {LuPlus} from "react-icons/lu";
import {TiMinus} from "react-icons/ti";

import {FaCircleChevronLeft} from "react-icons/fa6";
import {FaChevronCircleRight} from "react-icons/fa";
function Cards({newOrder, data}) {

  
    const [selectedImage, setSelectedImage] = useState(data[0].image[0]);
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };


    // function to select order

    const handleOrder = () => {

        const newArr = data.map((i) => {
            return [i.name, i.price, quantity, selectedImage];
        });

        newOrder(newArr[0]);


    }

    // function for slides

    const [index, setIndex] = useState([
        data[0].image[0],
        data[0].image[1],
        data[0].image[2],
        data[0].image[3]

    ]);

    const nextSlide = () => {
        const newIndex = index.map((i, e) => {
            if (e === 0) {
                return index[3];
            } else {
                return index[e - 1];
            }
        });

        setIndex(newIndex);


    }

    const prevSlide = () => {
        const newIndex = index.map((i, e) => {
            if (e === 3) {
                return index[0];
            } else {
                return index[e + 1];
            }
        });

        setIndex(newIndex);
    }


    return (
        <div className='big_container'>
            <div className="container_cards">
                <div className="big-img">
                    <img src={selectedImage}
                        alt=""
                        className="SelectedImage"/>
                </div>
                <div className="small-img">
                    {
                    data[0].image.map((i, e) => (
                        <img src={i}
                            alt=""
                            key={e}
                            onClick={
                                () => setSelectedImage(i)
                            }/>
                    ))
                } </div>
            </div>
            <div className="container_infos">
                <h3>Sneaker Company</h3>
                <h1 id="titre_produit">
                    {
                    data[0].name
                }</h1>
                <b>{
                    data[0].description
                }</b>
                <div className="prix">
                    <div className="left1 prix-desktop">
                        $<b id="price_product">
                            {
                            data[0].price
                        }</b>
                        <div className="promotion">
                            <b>50%</b>
                        </div>
                    </div>
                    <div className="right2">
                        <b>${
                            data[0].oldPrice
                        }</b>
                    </div>
                </div>
                <div className="boxs">
                    <div className="button1">
                        <button id="plus-btn"
                            onClick={increaseQuantity}>
                            <LuPlus/>
                        </button>
                        <div className="number" id="quantity">
                            {quantity}</div>
                        <button id="minus-btn"
                            onClick={
                                () => {
                                    setQuantity(quantity > 1 ? quantity - 1 : 1);
                                }
                        }>
                            <TiMinus/>
                        </button>
                    </div>
                    <button className="btn1" id="add-to-cart-btn"
                        onClick={handleOrder}>
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fill-rule="nonzero"/>
                        </svg>
                        <h2>add to cart</h2>
                    </button>
                </div>
            </div>

            {/* <div className="slides">
                <div className="">

                    <div className="big_img">
                        <FaCircleChevronLeft size={40}
                            onClick={nextSlide}/>
                        <img src={
                                index[0]
                            }
                            alt=""
                            className="SelectedImage"/>
                        <FaChevronCircleRight size={40}
                            onClick={prevSlide}/>
                    </div>
                    <div className="small-img">
                        {
                        data[0].image.map((i, e) => (
                            <img src={i}
                                alt=""
                                key={e}
                                onClick={
                                    () => setSelectedImage(i)
                                }/>
                        ))
                    } </div>
                </div>

            </div> */}
        </div>
    );
}

export default Cards;
