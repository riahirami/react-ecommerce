import React,{useEffect} from ("react");
import { useParams } from "react-router-dom";
import { json } from "body-parser";
import { result } from "lodash";

const modifierProduit= () => {

    const [titre,setTitre] = React.useState("")
    const [description,setDescription] = React.useState("")
    const [prix,setPrix] = React.useState("")
    const [couleur,setCouleur] = React.useState("")
    const [promo,setPromo] = React.useState("")
    const [flash,setFlash] = React.useState("")
    const params=useParams()
    // const [taille,setTaille] = React.useState("")

    useEffect(()=>{
        getProduit()
    },[])

    const getProduitById = async() =>{
        console.warn(params)
        let resultat = await fetch(`localhost:5000/produits/${params.id}`)
        resultat = await resultat.json()
        console.warn(resultat)
        setTitre(resultat.titre)
        setDescription(resultat.description)
        setPrix(resultat.prix)
        setCouleur(resultat.couleur)
        setFlash(resultat.flash)
        setPromo(resultat.promo)
        // setTaille(resultat.taille)
        
    }

    const updateProduct= async () => {
        console.warn(titre,description,prix)
        let resultat= await fetch(`localhost:5000/produits/${params.id}`,{
            method: 'Put',
            body:json.stringify({titre,description,prix,couleur,flash,promo}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        result=await resultat.json()
        console.warn(result)
    }

    return (
        <div className="jumbotron" style={{paddingTop: "100px"}}>
            <h1> modifier Produit</h1>
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <label className="form-label" htmlFor="form6Example1">titre</label>
        <input type="text" id="titre" className="form-control" onChange={(e)=> {setTitre(e.target.value)}} />
      </div>
    </div>
    
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example3">couleur</label>
    <input type="text" id="couleur" className="form-control" onChange={(e)=> {setCouleur(e.target.value)}}/>
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example7">Description</label>
    <textarea className="form-control" id="description" rows="4" onChange={(e)=> {setDescription(e.target.value)}}></textarea>
  </div>

   <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example5">Prix</label>
    <input type="number" id="prix" className="form-control" onChange={(e)=> {setPrix(e.target.value)}}/>
  </div>
  <div className="form-outline mb-4">
    <label className="form-check-label me-2" htmlFor="form6Example8"> Mettre en promo ? </label>
    <input className="form-check-input " type="checkbox"  id="promo" onChange={(e)=> {setPromo(e.target.value)}}/>
  </div>

  <div className="form-outline mb-4">
    <label className="form-check-label me-2" htmlFor="form6Example8"> Vente flash ? </label>
    <input className="form-check-input " type="checkbox" id="flash" onChange={(e)=> {setFlash(e.target.value)}} />
  </div>


  <button type="submit" onClick={updateProduct} className="btn btn-primary btn-block mb-4">modifier Produit</button>
        </div>
    )

}