import React from 'react'
import Item from './item'
import axios from 'axios'
import { useEffect, useState } from "react";
import AjouterProduit from './AjouterProduit';
import dataa from "./data";

function Products() {
  const [data, setData] = useState([])

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/produits", config)
      .then((res) => setData(res.data))
  }, [])

  const addProduit = (item) => {
    console.log("item " + item);
  }

  return (

    <div className="container-fluid" >
      <div className="row" style={{marginTop:"40px"}}>
          {Array.from(data).map((item, index) => {
            if (index<8) {
              return(
              <Item
              id={index}
              produitImage={item.produitImage}
              titre={item.titre}
              description={item.description}
              price={item.prix}
              categories={item.categories}
              quantity={item.quantite}
              item={item}
              key={index} />)
            }
            
})}
      </div>
    </div>
  )
}

export default Products