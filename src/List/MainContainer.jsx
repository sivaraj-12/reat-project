
import axios from "axios"
import { useEffect, useState } from "react";
const Photogallary=()=>{
    const[count,setcount]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users ")
        .then((res)=>{
            console.log(res.data)
            setcount(res.data);
        }
        )
        .catch()
        },[]);

return<>
{
    count.map((ele)=>{
        return<p>{ele.name}</p>
    })
}
<button onclick={() => setcount (count+1)}>ADD </button>
</>
}
export default  Photogallary