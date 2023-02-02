import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import '../card.css'
import { useCart } from 'react-use-cart';
import { useEffect, useState } from "react";
import { Modal } from 'antd';

const Item = (produits) => {
  let path = "./images/"
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [data, setData] = useState([])
  const [DataUser, setDataUser] = useState([])
  const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

  // let nomoriginal=produits.props.produitImage
  // let imagenom=""
  // imagenom=nomoriginal.replace(/\s+/g, '')
  const detailProduit = async (id) => {
    navigate("/DetailProduit/" + id)
  }
  useEffect(() => {
    ajoutProduit();
    getuserById(id);
  }, [])
  const ajoutProduit = (id) => {

    setData(produits.props);
    //console.warn("setdata  : " + data.titre)

  }

  const acheter = (produits) => {
    addItem(produits)
    Modal.success({
      content: produits.titre + ' ajouter au panier avec succes',
    });
  }

  const id = localStorage.getItem("id")
  const ussr=localStorage.getItem("user")

  function getuserById(id) {
    axios.get("http://localhost:5000/users/utilisateur/"+id,config)
    .then((res)=>setDataUser(res.data))
    console.log("datauser "+ussr)
   }


if (ussr==="client")
  return (


    <div className="col-md-3">
      <div className="card">

        <div className="view overlay">
          <img className="card-img-tp" src={"/images/" + produits.produitImage} alt={produits.produitImage} height="140px" width="245px" />
          <a href="#!">
            <div className="mask rgba-white-slight badge badge-warning" >
            {produits.categories ?
             <a  href={"/ProduitParCategorie/" + produits.categories._id}>
                
                 {produits.categories.titre} </a> : <a>non séléctionnné</a>}
                
            </div>
          </a>
        </div>

        <div className="card-body">

          <h4 className="card-title">{produits.titre}</h4>
          <p className="card-text"></p>
          <h4>Prix : {produits.price} TND</h4>
          <div>
            <button onClick={() => detailProduit(produits.item._id)} className="btn-success btn-block " >Voir Detail <i className="glyphicon glyphicon-eye-open"></i></button>
         
            <button onClick={() => acheter(produits)} className="btn-warning btn-block " >Acheter <i className="glyphicon glyphicon-shopping-cart"></i></button>
          
          </div>
        </div>

      </div>
    </div>

  )
  else
  return(
    <div className="col-md-3">
    <div className="card">

      <div className="view overlay">
        <img className="card-img-tp" src={"/images/" + produits.produitImage} alt={produits.produitImage} height="140px" width="245px" />
        <a href="#!">
          <div className="mask rgba-white-slight badge badge-warning" >
            <a  href={"/ProduitParCategorie/" + produits.categories._id}>
              
              {produits.categories ? produits.categories.titre : null}
              </a>
          </div>
        </a>
      </div>

      <div className="card-body">

        <h4 className="card-title">{produits.titre}</h4>
        <p className="card-text"></p>
        <h4>Prix : {produits.price} TND</h4>
        <div>
          <button onClick={() => detailProduit(produits.item._id)} className="btn-success btn-block " >Voir Detail <i className="glyphicon glyphicon-eye-open"></i></button>
       
          {/* <button onClick={() => acheter(produits)} className="btn-warning btn-block " >Acheter <i className="glyphicon glyphicon-shopping-cart"></i></button> */}
        
        </div>
      </div>

    </div>
  </div>
  )
}


export default Item