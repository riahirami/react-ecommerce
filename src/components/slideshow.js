import React from "react";
import  { useEffect, useState } from "react";
import axios from 'axios'

function Slideshow (){
  const [data, setData] = useState ([])
 
  const config = {
     headers: {
       "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
     }
   };
 
   useEffect( ()=> {
     axios.get("http://localhost:5000/produits/promo",config)
     .then((res)=>setData(res.data))
 },[])
 
    return(
        <div className="row" >

       
        <div id="demo" className="carousel slide "  data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <div className="carousel-inner center" style={{width:"100%",height:"100%"}}>
    <div className="carousel-item active">
      <img src="/images/superpromo.jpg" alt="Los Angeles" className="d-block" style={{maxWidth:"100%",maxHeight:"100%"}}/>
      <div className="carousel-caption">
        <h3>Nos promotion </h3>
        <p>Des promotion irresistible pour des produits inprévisible !</p>
      </div>
    </div>

{Array.from(data).map((item, index) => (
    <div className="carousel-item">
      <a href={"/DetailProduit/"+item._id}>

      <img src={"/images/" + item.produitImage} alt={item.produitImage} className="d-block" style={{maxWidth:"100%",maxHeight:"100%"}}/>
      </a>
      <div className="carousel-caption">
        <h3 className="alert alert-info">{item.titre} <h3 className="badge badge-warning">{item.prix} TND</h3></h3>
        
      </div> 
    </div>
))
}
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
</div>
    )
}

export default Slideshow