import './App.css'
import Cards from './Components/Cards/Cards'
import Navbar from './Components/Navbar/Navbar'

function App() {


    return (
        <div style={
            {padding: '0 70px'}
        }>
            <Navbar/>
            <Cards/>
        </div>
    )
}

export default App
