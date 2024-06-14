import { useState } from 'react';
import './App.css'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar/Navbar'
import img1 from './assets/images/image-product-1.jpg';
import img2 from './assets/images/image-product-2.jpg';
import img3 from './assets/images/image-product-3.jpg';
import img4 from './assets/images/image-product-4.jpg';



function App() {


    //! fake data for the cards

    const product =[

        {
            name :'Fall Limited Edition Sneakers',
            description : 'These lowprofile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they ll withstand everything the weather can offer.',
            price : 125.00,
            oldPrice : 250.00,
            promotion: 50,
            image : [img1, img2, img3, img4],
        }
    ]



    const [counter, setCounter] = useState(0)
    const [order ,setOrder]= useState([])

    //get the selected order from the card component + quntity + increment the counter

    const handleOrder = (o) => {
        setOrder([...order, o]);
        setCounter(counter + 1);


    }



   
  

    return (
        <div style={{padding: '0 70px'}}>
            <Navbar counter={counter} order={order}  />
            <Cards data={product}  newOrder={handleOrder}/>
        </div>
    )
}

export default App
