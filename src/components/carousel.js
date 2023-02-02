import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Test() {
  document.getElementById('myCarousel').carousel({
    interval: 3000,
  })
}


function Carousel() {
  const [data, setData] = useState([])
  let path="/images/"
  const navigate = useNavigate();

  const detailProduit = async (id) => {
  
    navigate("/DetailProduit/" + id)
  }
  
  const config = {
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
  };
  useEffect(() => {
    axios.get("http://localhost:5000/produits/promo", config)
        .then((res) => setData(res.data))
}, [])

  return (
    <>
    
    <div className="jumbotron cta-100 ">
    
      <div className="container">
        <div className="row blog">
          <div className="col-md-12">
            <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#blogCarousel" data-slide-to="1"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                 { 
                 data.map((prod, index) => 
                 { if (index<6) {
                      return (
                    <div className="col-md-4" key={prod._id} >
                      <div className="item-box-blog">
                        <div className="item-box-blog-image">
                          <div className="item-box-blog-date bg-warning white"> <span className="mon">{prod.prix} dt</span> </div>
                             <img alt={ path + prod.produitImage}  src={ path + prod.produitImage} height="250px" width="280px" /> 
                        </div>
                        <div className="item-box-blog-body">
                          <div className="item-box-blog-heading">
                            <a href="#" tabIndex="0">
                              <h2>{prod.titre}</h2>
                            </a>
                          </div>                            
                          <div className="item-box-blog-data" style={{ padding: "px 15px" }}>
                            <p><i className="badge badge-success">Quantite restante : {prod.quantite} en stock </i> </p>
                          </div>
                          <div className="item-box-blog-text">
                            <p>{prod.description}</p>
                          </div>
                          <div className=""> <a onClick={() => detailProduit(prod._id)}  tabIndex="0" className="btn btn-outline-dark">Voir détail</a> </div>
                        </div>
                      </div>
                    </div>
              
                      )
                   }
                   else {
                     return (
                      <h1> </h1>
                     )
                   }
                   }
                 )}
                      
                    
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                  { data.map((prod) => (
                    <div className="col-md-4" key={prod._id}>
                      <div className="item-box-blog">
                        <div className="item-box-blog-image">
                          <div className="item-box-blog-date bg-warning white"> <span className="mon">{prod.prix} dt</span> </div>
                          <figure> <img alt={ path + prod.produitImage}  src={ path + prod.produitImage}  /> </figure>
                        </div>
                        <div className="item-box-blog-body">
                          <div className="item-box-blog-heading">
                            <a href="#" tabIndex="0">
                              <h5>{prod.titre}</h5>
                            </a>
                          </div>                            <div className="item-box-blog-data" style={{ padding: "px 15px" }}>
                          <p><i className="badge badge-success">Quantite restante : {prod.quantite} en stock </i> </p>
                          </div>
                          <div className="item-box-blog-text">
                            <p>{prod.description}</p>
                          </div>
                          <div className="mt"> <a onClick={() => detailProduit(prod._id)} tabIndex="0" className="btn btn-outline-dark">Voir détail</a> </div>
                        </div>
                      </div>
                    </div>
                  
                  
                 ))}
                  
                
                  </div>
               
               {/* end row */}
                </div>
              
              {/* end carousel-item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


</>
  )
}


export default Carousel