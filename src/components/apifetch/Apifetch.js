import { useEffect, useState } from "react"
import ContentLoad from "./ContentLoad"

export default function Apifetch({ newdata }){
    const [dataLoadingApi , setDataLoadingApi] = useState([]);
    

    function loadingData(){

        fetch('https://fakestoreapi.com/products').then((e)=> e.json()).then((data)=> {
            setDataLoadingApi(data)
            
        });
    
         
    } 
    useEffect(()=>{
        loadingData();

    },[]   
    )
    return (
        <div>
            <div>Here we are loading the data for the educational purpose only for reducer and buttonLoading</div>
            <ContentLoad newdata={dataLoadingApi}/>
          

        </div>
    )
}