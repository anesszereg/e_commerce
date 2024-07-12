import logo from '../../assets/images/logo.svg'
import './Navbar.css'
import shop from '../../assets/images/icon-cart.svg'
import avatar from '../../assets/images/image-avatar.png'
import {useState} from 'react';
import {MdDelete} from "react-icons/md";
import url from '../../assets/images/image-product-1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar({ order}) {


    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    const catchCounter = useSelector((state) => state.Counter.value)

    console.log('====================================');
    console.log(catchCounter);



    
    return (
        <div className='container'>
            <div className="left">

                <img src={logo}
                    alt=""
                    className='logo'/>
                <ul className='menu'>
                    
                    <li>
                        
                        <Link to='app/Home'>
                        collection
                        </Link>
                    </li>
                    <li>
                        <Link to={'app/Men'}>
                        
                        Men
                        </Link>
                        </li>
                    <li>
                        <Link to={'app/women'}>
                        Women
                        </Link>
                    </li>
                    <li>About</li>
                    <li>Contact</li>

                    <button 
                    
                    onClick={()=> navigate('Settings')}
                    
                    
                    
                    style={{
                        border:'1px solid #cccc',
                        backgroundColor:'#e9e9e9',
                        padding:' 0 5px'
                    }}>
                        go to settings
                    </button>
                </ul>
            </div>
            <div className='right'>
                <img src={shop}
                    alt=""
                    onClick={
                        () => setShow(!show)
                    }/>


                <div id="box">


                    <div class="number_of_orders">
                        {catchCounter}</div>

                    {
                    show ? <div class="cart_container">


                        <div className="header_cart">
                            <p>Cart</p>
                        </div>

                        {
                        order.map((o, i) => (
                            <div className="info"
                                key={i}>
                                    <img src={
                                            o[3]
                                        }
                                        alt="Product Image"/>
                                <div className="info_text">
                                    <p>{
                                        o[0]
                                    }</p>
                                    <div className="price">
                                        <p>${
                                            o[1]
                                        }.00 x</p>
                                        <p>{
                                            o[2]
                                        }
                                            =</p>
                                        <p>${
                                            o[1] * o[2]
                                        }.00</p>
                                    </div>
                                </div>
                                    <MdDelete size={30}/>
                            </div>
                        ))
                    }


                        <button className="checkout">Checkout</button>

                    </div> : null
                } </div>

                <img src={avatar}
                    alt=""/>

            </div>
        </div>
    )
}

export default Navbar
