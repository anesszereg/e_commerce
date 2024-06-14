import './App.css'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar/Navbar'
import img1 from './assets/images/image-product-1.jpg';
import img2 from './assets/images/image-product-2.jpg';
import img3 from './assets/images/image-product-3.jpg';
import img4 from './assets/images/image-product-4.jpg';



function App() {


    return (
        <div style={{padding: '0 70px'}}>
            <Navbar />
            <Cards />
        </div>
    )
}

export default App
