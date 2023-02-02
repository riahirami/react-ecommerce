import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
import {useParams,Link,useNavigate  } from 'react-router-dom' ;
import {Modal } from "antd"


function Modifproduit(props) {
    const url = "http://localhost:5000/produits/"
    const navigate = useNavigate();
    const [produitList,setProduitList]=useState([])
    const [data, setData] = useState({
        titre: "",
        description: "",
        couleur: "",
        prix:"",
        quantite:"",
        produitImage:""
    })
    const {id} = useParams()

    useEffect(() => {
        // const id = props.match.params.id
        axios.get("http://localhost:5000/produits/"+ id)
            .then(res => {
                setData(res.data)
            })
    }
        , []
    )

    function submit(e) {
        e.preventDefault();
        // const id = useParams()
        axios.put("http://localhost:5000/produits/"+id, data)
            .then(res => {
              Modal.success({
                title:"Produit modifier avec succés",
                okText:"Ok",
                okType:"success",
                onOk:()=>{
                  console.log("updated" +data)
                  navigate("/Gerer-produits")
                }
              })  
            }).catch(err=>console.error(err))
    }

    function handle(e) {
        const newData = { ...data }
        switch (e.target.id) {

       

          case "flash":
            var oui = document.getElementById("flash");  
 
          if( oui.checked===true)
            {
             //  console.log("before "+oui.checked+" = true") 
              newData["flash"]="true" 
              setData(newData)
               console.log("true --> new data2 : "+JSON.stringify(newData))
             }
            else{
             // console.log(oui.checked+" = false")
              newData["flash"]="false" ;
              setData(newData)
              console.log("false --> new data2 : "+JSON.stringify(newData))
            }
           break; 
           case "promo":
            var oui = document.getElementById("promo");  
 
          if( oui.checked===true)
            {
             //  console.log("before "+oui.checked+" = true") 
              newData["promo"]="true" 
              setData(newData)
               console.log("true --> new data2 : "+JSON.stringify(newData))
             }
            else{
             // console.log(oui.checked+" = false")
              newData["promo"]="false" ;
              setData(newData)
              console.log("false --> new data2 : "+JSON.stringify(newData))
            }
           break; 
        
          default:
            newData[e.target.id] = e.target.value
            setData(newData)
            console.log("update >>  " + newData)
            break;
        }
     }

    return (
        <div className="jumbotron" style={{paddingTop: "100px"}}>
            <h1> Modifier Produit</h1>
            <form onSubmit={(e)=>submit(e)}>
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <label className="form-label" htmlFor="form6Example1">titre</label>
        <input type="text" id="titre" className="form-control" onChange={(e)=> {handle(e)}} value={data.titre} />
      </div>
    </div>
    
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example3">couleur</label>
    <input type="text" id="couleur" className="form-control" onChange={(e)=> {handle(e)}} value={data.couleur} />
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example7">Description</label>
    <textarea className="form-control" id="description" rows="4" onChange={(e)=> {handle(e)}} value={data.description} ></textarea>
  </div>

   <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example5">Prix</label>
    <input type="number" id="prix" className="form-control" onChange={(e)=> {handle(e)}} value={data.prix} />
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example5">Quantite</label>
    <input type="number" id="quantite" className="form-control" onChange={(e)=> {handle(e)}} value={data.quantite} />
  </div>

  <div className="form-outline mb-4">
   <label htmlFor="exampleFormControlFile1">Image</label>
    <input type="file" className="form-control-file" id="produitImage" onChange={(e)=> handle(e)} value={data.produitImage.value}/>
  </div>

  <div className="form-outline mb-4">
    <label className="form-check-label me-2" htmlFor="form6Example8"> Mettre en promo ? </label>
    <input className="form-check-input " type="checkbox" value={data.promo} id="promo" onChange={(e)=> handle(e)} />
  </div>

  <div className="form-outline mb-4">
    <label className="form-check-label me-2" htmlFor="form6Example8"> Vente flash ? </label>
    <input className="form-check-input " type="checkbox" value={data.flash} id="flash" onChange={(e)=> handle(e)} />
  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4">Modifier Produit</button>
  </form>
        </div>
    )
}

export default Modifproduit