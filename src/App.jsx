import { useState } from 'react';
import './App.css'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar/Navbar'

import { Outlet } from 'react-router-dom';



function App() {


   


    const [counter, setCounter] = useState(0)
    const [order ,setOrder]= useState([])

   



   
  

    return (
        <div style={{padding: '0 70px'}}>
            <Navbar counter={counter} order={order}  />

            <Outlet/>
            
        </div>
    )
}

export default App
