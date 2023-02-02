import React from "react"
import "antd/dist/antd.css";
import  { useEffect, useState } from "react";
import {useParams,Link,useNavigate  } from 'react-router-dom' ;
import axios from 'axios'
import {Modal,Input } from "antd"


function GererProduits(){
  const [titre,setTitre] = React.useState("")
    const [description,setDescription] = React.useState("")
    const [prix,setPrix] = React.useState("")
    const [couleur,setCouleur] = React.useState("")
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
      getProduit()
      getProduitById()
    }
   ,[]
   )

   function getProduit() {
    axios.get("http://localhost:5000/produits",config)
    .then((res)=>setData(res.data))
   }

   const getProduitById = async(id) =>{
    let resultat = await    axios.get(`localhost:5000/produits/${id}`,config)
    .then((res)=>setData(res.data)
  )
    resultat = await resultat.json()
    // console.warn(resultat)
    setTitre(resultat.titre)
    setDescription(resultat.description)
    setPrix(resultat.prix)
    setCouleur(resultat.couleur)
    // setTaille(resultat.taille)
    
}
const detailProduit =async(id)=>{
  console.warn("produit N° "+id)
  navigate("/DetailProduit/"+id)
}

   const updateProduct= async (id) => {
        console.warn("id= "+id)
      
        navigate('/Modifproduit/'+id)
        
    }



   function supprimerProduits(id) {
     Modal.confirm({
       title:"Tu veux vraiment supprimer ce produit ?",
       okText:"Oui",
       okType:"danger",
       cancelText:"Non",
       onOk:()=>{
        axios.delete(`http://localhost:5000/produits/${id}`)
        // .then((res)=>setData(res.data))
        console.log("supprimer l'article de l'id :  " +id)
        getProduit()
       }
     })
    
  }
    return (
        <div className="jumbotron" style={{paddingTop: "100px"}}>
            <h1> Gerer les Produits</h1>
<h2>Hello {       
//  localStorage.getItem('token')&&
       localStorage.getItem('email')
        // &&     console.log( " user : "+JSON.stringify(localStorage.getItem('token')))


}</h2>
<button onClick={()=>navigate('/Ajouter-Produit')} className="btn btn-outline-info">Ajouter Produit</button>
<button onClick={()=>navigate('/Ajouter-Categories')} className="btn btn-outline-info text-dark">Ajouter Categorie</button>
            <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">image</th>
      <th scope="col">Nom Produit</th>
      <th scope="col">Description</th>
      <th scope="col">catégorie</th>
      <th scope="col">Prix</th>
      <th scope="col">quantite</th>
      <th scope="col">taille</th>
      <th scope="col">promo</th>
      <th scope="col">flash</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
  {data.map( (produits) => (

    <tr key={produits._id}>
      <th scope="row">{produits._id}</th>
      <td><img src={ path + produits.produitImage} width="200" height="150" alt={path + produits.produitImage}/></td>
      {/* {console.log("path + produits.produitImage => "+JSON.stringify(produits.produitImage))} */}
      <td><a onClick={()=>detailProduit(produits._id)}>{produits.titre}</a></td>
      <td>{produits.description}</td>
            

      {
       (produits.categories) ? <td>{produits.categories['titre']}</td> : <td>non sélectionné </td> 
}

      <td>{produits.prix}</td>
      <td>{produits.quantite}</td>
      <td>{produits.taille}</td>
      <td>{produits.promo}</td>
      <td>{produits.flash}</td>
      <td>
          <button className="btn btn-info" onClick={()=>updateProduct(produits._id)}>Modifier</button>
          <button className="btn btn-light" onClick={()=>supprimerProduits(produits._id)}>Supprimer</button>
      </td>
    </tr>
  ))}
   
  </tbody>
</table>
        </div>

        
    )

}


export default GererProduits