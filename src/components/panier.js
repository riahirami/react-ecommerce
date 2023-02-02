import React from "react";
import { useCart } from "react-use-cart";
import { useState, useEffect } from "react"
import axios from 'axios'
import '../panier.css'
import {Modal } from "antd"

const Panier = () => {
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
 prd[i]=item.titre+"-"
  ))
  let somme=cartTotal
  useEffect(()=>{
     let somme= cartTotal
     console.log("sommeeee: "+somme);
  })
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
        montant:somme,
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

  return (
    <>

      <section className="container" >
        <div className="row jistufy-content-center" >
          {/* <div className="col-12" >
            <button className="btn btn-warning btn-lg btn-block " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa fa-shopping-cart"></i></button> */}
            <div className="col-12" >
            <button className="btn btn-warning  " 
            style={{    position: "fixed",
              top: "50%",
              right: "-42px",
              zIndex: "1000",
              transform: "rotate(270deg)"}}
            type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa fa-shopping-cart"></i></button>
                  
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: "550px",overflowY: "scroll" }}>
                <div className="offcanvas-header" >
                  <br></br>
                  <br></br>
                  <br></br>
                  <h5 id="offcanvasRightLabel">Panier</h5>
                  
                  <button  type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-bod">
                  <h5>
                    {" "}
                    Produits distincts ({totalUniqueItems}) | total des produits :({totalItems})
                  </h5>
                  <table className="table table-light m-0">
                    <tbody>

                      {items.map((item, index) => {
                        return (
                          <>

                            <tr key={index}>
                              <td>

                                <img src={/images/ + item.produitImage} style={{ height: "10rem" }} />
                              </td>

                              <td>{item.titre}</td>

                              <td>{item.price}</td>

                              <td>{item.quantity} Piéces  </td>

                              <ul className="list-group" style={{ listStyle: "none" }}>
                                <li><button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="list-group-item list-group-item-success"><span className="fa fa-minus-square"></span></button>
                                </li>
                                <li> <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="list-group-item list-group-item-success"><span className="fa fa-plus-square"></span></button>
                                </li>
                                <li><button onClick={() => removeItem(item.id)} className="list-group-item list-group-item-danger"><span className="fa fa-trash"></span></button>
                                </li>
                              </ul>
                            </tr>



                          </>
                        );
                      })}

                    </tbody>
                  </table>
                  <div className="col-auto ms-auto">
                    <h2> total : {cartTotal} TND</h2>
                  </div>
                </div>
                <div className="col-auto  mb-2">
                  <button onClick={() => emptyCart()} className="btn btn-danger  ms-2">
                    Vider panier
                  </button>

                  <form onSubmit={(e) => submit(e)}>

                  <button type="submit" className="btn btn-primary  ms-2">
                    Commander
                  </button>
            </form>
                </div>
              </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Panier;
