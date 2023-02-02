import React from "react"
import "antd/dist/antd.css";
import  { useEffect, useState } from "react";
import {useParams,Link,useNavigate  } from 'react-router-dom' ;
import axios from 'axios'
import {Modal,Input } from "antd"


function MesCommandes(){
  const [titre,setTitre] = React.useState("")
    const [description,setDescription] = React.useState("")
    
    const params=useParams()

    const navigate = useNavigate();


    const [data, setData] = useState ([])
    let path="./images/"
    //const {id} = useParams();
    const config = {
       headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
       }
     };
   
     useEffect( ()=> {
        const i=localStorage.getItem('id')

        getMyCommandes(i)
    }
   ,[]
   )

   

   const getMyCommandes = async(id) =>{
    let resultat = await    axios.get(`http://localhost:5000/commandes/user/${id}`,config)
    .then((res)=>setData(res.data)
  )
    resultat = await resultat.json()
    console.warn(resultat)
    // setTitre(resultat.titre)
    // setDescription(resultat.description)
    
}






  const detailcommande = async (id) => {
    console.warn("produit N° " + id)
    navigate("/DetailProduit/" + id)
}
    return (
        <div className="jumbotron" style={{paddingTop: "100px"}}>
            <h1> Mes commandes</h1>
<h2>Hello {       
//  localStorage.getItem('token')&&
       localStorage.getItem('email')
        // &&     console.log( " user : "+JSON.stringify(localStorage.getItem('token')))


}</h2>

            <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Reference commande</th>
      <th scope="col">liste des produits </th>
      <th scope="col">montant total </th>    
      <th scope="col">date de commande</th>
      <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
  {data.map( (commande) => (

      <tr key={commande._id}>
      <th scope="row">{commande._id}</th>
      <th scope="row">{commande.produits}</th>
      <th scope="row">{commande.montant}</th>
      <th scope="row">{commande.createdAt}</th>
      <th scope="row" ><span className="badge badge-primary">{commande.statut}</span></th>
    </tr>
  ))}
   
  </tbody>
</table>
        </div>

        
    )

}


export default  MesCommandes