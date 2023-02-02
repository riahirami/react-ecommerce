import React from "react"
import  { useEffect, useState } from "react";
import axios from 'axios'
import {Modal,Input } from "antd"
import {useNavigate  } from 'react-router-dom' ;



function AjouterProduit(){
  const url = "http://localhost:5000/produits"
  const navigate = useNavigate();

    const [data, setData] = useState ([])
    const [d, setD] = useState ({
       titre:"",
       description:"",
       prix:"",
       quantite:"",
       taille:"",
       couleur:"",
       produitImage : "",
       categories:"",
       idC:"",
       imgpath:"",
       promo:"",
       flash:""

    })
 
    const config = {
       headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
       }
     };
   
     useEffect( ()=> {
       axios.get("http://localhost:5000/categories",config)
       .then((res)=>setData(res.data))
      
       
   },[])

  
   function submit(e){
    e.preventDefault();
   
    axios.post(url,{
        titre:d.titre,
        description:d.description,
        prix:d.prix,
        quantite:d.quantite,
        taille:d.taille,
        couleur:d.couleur,
      categories:d.idC,
      // produitImage:d.produitImage.originalname,
      produitImage:d.imgpath,
    // imgpath:d.imgpath,
      promo:d.promo,
      flash:d.flash
       // id:data.id
      })
      .then(res=>{
        Modal.success({
          title:"Produit ajouté avec succés",
          okText:"Ok",
          okType:"success",
          onOk:()=>{
        console.log("produit"+JSON.stringify(res)+ "---> ajouté avec succés" )
        navigate("/Gerer-produits")

          }})
    })
  }
   

   function handle(e){
    const newData2={...d}
    // if (e.target.id==="produitImage") {
    //   newData2[e.target.id]= e.target.files[0]
    //   setD(newData2)
    //   console.log("handle () "+newData2)

    // }
    // else
    switch (e.target.id) {
      case "titre":
        newData2[e.target.id]= e.target.value;
        setD(newData2);
        break;
      case "description":
        newData2[e.target.id]= e.target.value;
        setD(newData2);
        break;
      case "prix":
        newData2[e.target.id]= e.target.value;
        setD(newData2);
        break;
      case "couleur":
        newData2[e.target.id]= e.target.value;
        setD(newData2);
        break;
        case "quantite":
        newData2[e.target.id]=e.target.value ;
        setD(newData2);
        break;
      case "taille":
        newData2[e.target.id]=e.target.value ;
        setD(newData2);
        break;
        case "promo":
           var oui = document.getElementById("promo");  

         if( oui.checked===true)
           {
            //  console.log("before "+oui.checked+" = true") 
             newData2["promo"]="true" 
             setD(newData2)
              console.log("true --> new data2 : "+JSON.stringify(newData2))
            }
           else{
            // console.log(oui.checked+" = false")
             newData2["promo"]="false" ;
             setD(newData2)
             console.log("false --> new data2 : "+JSON.stringify(newData2))
           }
          break;
          case "flash":
           var oui = document.getElementById("flash");  

         if( oui.checked===true)
           {
            //  console.log("before "+oui.checked+" = true") 
             newData2["flash"]="true" 
             setD(newData2)
              console.log("true --> new data2 : "+JSON.stringify(newData2))
            }
           else{
            // console.log(oui.checked+" = false")
             newData2["flash"]="false" ;
             setD(newData2)
             console.log("false --> new data2 : "+JSON.stringify(newData2))
           }
          break;  
        case "produitImage":
          const path=""
          newData2["produitImage"]=e.target.value ;
          const img= newData2["produitImage"].split("fakepath\\");
          newData2["imgpath"]=path+img[1];
          // console.log("newData2['produitImage'] "+newData2["produitImage"])
          // console.log("newData2[produitImage] =e.target.value "+e.target.value)
          // console.log("newData2[imgpath] "+newData2["imgpath"])
          // console.log( "img[1]=>"+img[1])
          // console.log("***********************")
         setD(newData2);
          break;  
      case "categorie":
        
      data.map( (cat) => (

       newData2.categorie === cat.titre?  newData2["idC"]=cat._id : "erreur"
       
          )
          ,newData2["categorie"]= e.target.value,
       setD(newData2)
          
          )
        break;
      
        default: console.log("default")
    }
}
   
    return (
        <div className="jumbotron" style={{paddingTop: "100px"}}>
            <h1> Ajouter Produit</h1>
            <form onSubmit={(e)=>submit(e)} encType="multipart/form-data">
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <label className="form-label" htmlFor="form6Example1">Titre</label>
        <input type="text" id="titre" className="form-control" onChange={(e)=> handle(e)} value={d.titre} />
      </div>
    </div>
    
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example3">couleur</label>
    <input type="text" id="couleur" className="form-control" onChange={(e)=> handle(e)} value={d.couleur}/>
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example7">Description</label>
    <textarea className="form-control" id="description" rows="4" onChange={(e)=> handle(e)} value={d.description}></textarea>
  </div>

  <div className="form-outline mb-4">
   <label htmlFor="exampleFormControlFile1">Image</label>
    <input type="file" className="form-control-file" id="produitImage" onChange={(e)=> handle(e)} value={d.produitImage}/>
  </div>
   <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example5">Prix</label>
    <input type="number" id="prix" className="form-control" onChange={(e)=> handle(e)} value={d.prix}/>
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example5">Quantite</label>
    <input type="number" id="quantite" className="form-control" onChange={(e)=> handle(e)} value={d.quantite}/>
  </div>
  <div className="form-outline mb-4">
    <label htmlFor="exampleFormControlSelect1">Categorie</label>

    <select className="form-control" id="categorie" className="form-control" onChange={(e)=> handle(e)} value={d.categorie}>
           <option id="vide" key="vide">Séléctionnez une catégorie</option>
{
      data.map( (cat) => (
      <>
          {/* {console.log(JSON.stringify(" JSON.stringify(d.categorie=>)"+d.categorie))} */}
      <option id={cat._id} key={cat.titre}>{cat.titre}</option>
        {/* <option key={cat._id}>{cat._id} </option> */}
        </>
         ))}
    </select>
  </div>

  <div className="form-outline mb-4">
    <label className="form-check-label me-2" htmlFor="form6Example8"> Mettre en promo ? </label>
    <input className="form-check-input " type="checkbox" value={d.promo} id="promo" onChange={(e)=> handle(e)} />
  </div>

  <div className="form-outline mb-4">
    <label className="form-check-label me-2" htmlFor="form6Example8"> Vente flash ? </label>
    <input className="form-check-input " type="checkbox" value={d.promo} id="flash" onChange={(e)=> handle(e)} />
  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4">Ajouter Produit</button>
</form>
        </div>
    )

}


export default AjouterProduit