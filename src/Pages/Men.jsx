import axios from 'axios'
import React, { useEffect, useState } from 'react'





function Men() {


  const [actor, setActor] = useState([])


    useEffect(() => {
        const getData = async()=>{
        try {
          const res = await fetch('https://hp-api.onrender.com/api/characters')
          console.log('====================================');
          console.log(res);
          console.log('====================================');
          const result = await res.json();
          console.log('====================================');
          console.log(result);
          console.log('====================================');

          setActor(result)
          
        } catch (error) {

          console.log('====================================');
          console.log(error);
          console.log('====================================');
          
        }

        }



        getData()



    
    }, [])


    useEffect(() => {
        const getData = async()=>{
        try {
          const res = await axios.put('https://hp-api.onrender.com/api/characters')
         
          console.log('====================================');
          console.log(res);
          console.log('====================================');

          setActor(res.data)
          
        } catch (error) {

          console.log('====================================');
          console.log(error);
          console.log('====================================');
          
        }

        }



        getData()



    
    }, [])




  return (


    <div>

        h{
          actor.map((i,index)=>(

            <div className="" key={i.id}>
              <h1>{i.actor}</h1>
            </div>
          ))
        }
        


    </div>




  )
}




export default Men