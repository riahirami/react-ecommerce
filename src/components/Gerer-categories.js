import React from "react"
import "antd/dist/antd.css";
import  { useEffect, useState } from "react";
import {useParams,Link,useNavigate  } from 'react-router-dom' ;
import axios from 'axios'
import {Modal,Input } from "antd"


function GererCategories(){
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
      getCategories()
      getCategorieById()
    }
   ,[]
   )

   function getCategories() {
    axios.get("http://localhost:5000/categories",config)
    .then((res)=>setData(res.data))
   }

   const getCategorieById = async(id) =>{
    let resultat = await    axios.get(`localhost:5000/categories/${id}`,config)
    .then((res)=>setData(res.data)
  )
    resultat = await resultat.json()
    // console.warn(resultat)
    setTitre(resultat.titre)
    setDescription(resultat.description)
    
}


   const updateCategorie= async (id) => {
        console.warn("id= "+id)
      
        navigate('/Modifcategorie/'+id)
        
    }



   function supprimerCategorie(id) {
     Modal.confirm({
       title:"Tu veux vraiment supprimer cette categories ?",
       okText:"Oui",
       okType:"danger",
       cancelText:"Non",
       onOk:()=>{
        axios.delete(`http://localhost:5000/categories/${id}`)
        // .then((res)=>setData(res.data))
        console.log("supprimer la categorie de l'id :  " +id)
        getCategories()
       }
     })
    
  }

  const detailProduit = async (id) => {
    console.warn("produit N° " + id)
    navigate("/DetailProduit/" + id)
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
      <th scope="col">Nom Produit</th>
      <th scope="col">Description</th>    
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
  {data.map( (categorie) => (

    <tr key={categorie._id}>
      <th scope="row">{categorie._id}</th>
      
      <td><a onClick={()=>detailProduit(categorie._id)}>{categorie.titre}</a></td>
      <td>{categorie.description}</td>
            

   
    
      <td>
          <button className="btn btn-success text-light" onClick={()=>updateCategorie(categorie._id)}>Modifier</button>
          <button className="btn btn-danger text-light" onClick={()=>supprimerCategorie(categorie._id)}>Supprimer</button>
      </td>
    </tr>
  ))}
   
  </tbody>
</table>
        </div>

        
    )

}


export default  GererCategories