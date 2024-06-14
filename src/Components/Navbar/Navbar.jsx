import logo from '../../assets/images/logo.svg'
import './Navbar.css'
import shop from '../../assets/images/icon-cart.svg'
import avatar from '../../assets/images/image-avatar.png'
import {useState} from 'react';
import {MdDelete} from "react-icons/md";
import url from '../../assets/images/image-product-1.jpg'

function Navbar({counter}) {
    const [quantity, setQuantity] = useState(1)
    const [show , setShow] = useState(false)

    return (
        <div className='container'>
            <div className="left">

                <img src={logo}
                    alt=""
                    className='logo'/>
                <ul className='menu'>
                    <li>collection
                    </li>
                    <li>
                        Men</li>
                    <li>Women
                    </li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='right'>
                <img src={shop}
                    alt="" onClick={()=>setShow(!show)}/>


                <div id="box">


                    <div class="number_of_orders">
                        {counter}</div>

                        {
                          show?
                          <div class="cart_container">

                      
                        <div className="header_cart">
                            <p>Cart</p>
                        </div>
                        <div className="info">
                            <img src={url} alt="Product Image"/>
                            <div className="info_text">
                                <p>Fall Limited Edition Sneakers</p>
                                <div className="price">
                                    <p>$125.00 x
                                    </p>
                                    <p>1 =
                                    </p>
                                    <p>$125.00</p>
                                </div>
                            </div>
                            <MdDelete size={30}/>
                        </div>
                        <button className="checkout">Checkout</button>

                    </div>:
                    null
                        }
                    

                </div>

                <img src={avatar}
                    alt=""/>

            </div>
        </div>
    )
}

export default Navbar
