import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from "react";
import { useCart } from 'react-use-cart';
import '../commande.css'
import {Modal } from "antd"

const ListItemPanier = (props)=>{
 const {addItem}= useCart();
 const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  const url = "http://localhost:5000/commandes"

  const prd = [] 
items.map( (item,i) => (
 prd[i]=item.titre+" "
  ))
  let somme=cartTotal
  useEffect(()=>{
     let somme= cartTotal
     console.log(somme);
  },[])
  const [data,setData] = useState({
    userId:localStorage.getItem('id'),
    montant:somme,
    produits:prd,
    statut:"en cours",
})

  function submit(e){
    e.preventDefault();
    axios.post(url,{
        userId:data.userId,
        montant:data.montant,
        produits:prd,
        statut:data.statut,
       // id:data.id
    })
    .then(res=>{
       console.log("commandes ---> "+JSON.stringify(res.data)+" ajouté avec succés, montant : " +data.montant)
       // console.log("array prd : "+prd)
        // ))
      })
      Modal.success({
        content: "commande "+data.produits+' bien valider',
      });
      emptyCart()
   }

    return(
        
        <div >
        
<br/>
<br/>
<br/>
<br/>

        <section className="h-100 gradient-custom">

  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
           
<div className="d-grid gap-2 d-md-flex justify-content-md-end">

<button onClick={() => emptyCart()} className="btn btn-danger btn-sm me-md-2">
              vider panier
            </button>
</div>

          </div>
          <div className="card-body">

          {items.map((item, index) => {
                  return (
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0" key={index}>
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={/images/ + item.produitImage} 
                    className="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>{item.titre}</strong></p>
                <br></br>
                <br></br>
                <button type="button" className="btn btn-danger btn-sm me-1 mb-2" onClick={() => removeItem(item.id)} data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i className="fas fa-trash"></i>
                </button>
               
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex mb-4" style={{maxwidth: "300px"}}>
                  <button className="btn btn-primary  px-3 me-2"
                    onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }>
                    <i className="fas fa-minus"></i>
                  </button>

                  <div className="form-outline">
                    <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control" />
                    <label className="form-label text-center" for="form1">Quantite: {item.quantity}</label>
                  </div>

                  <button className="btn btn-primary px-3 ms-2"
                    onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>

                <p className="text-start text-md-center">
                  <strong id="montant">{item.price} x {item.quantity} = {item.price * item.quantity} TND</strong>
                </p>
              </div>
            </div>
 );
})}
            <hr className="my-4" />
</div>
        </div>


        <div className="card mb-4">
          <div className="card-body">
            <p><strong>Date de Livraison prevue : </strong></p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p><strong>methode de paiement supporter :</strong></p>
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal acceptance mark" />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h1 className="">                nombre de produit distinct {totalUniqueItems} / nombre total :{totalItems}
</h1>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Produits
                <span>{cartTotal}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Livraison
                <span>Gratuis</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Montant Total</strong>
                  <strong>
                    <p className="mb-0">(+ TVA)</p>
                  </strong>
                </div>
                <span><strong>{cartTotal}</strong></span>
              </li>
            </ul>
            <form onSubmit={(e)=>submit(e)}>

            <button type="submit" className="btn btn-primary btn-block ms-2">
              commander
            </button>
        </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
        </div>
    )
}

export default ListItemPanier