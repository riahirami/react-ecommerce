import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom';


function ProduitPromo(params) {
    const [data, setData] = useState([])
    let path = "/images/"

    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    const navigate = useNavigate()
    const { id } = useParams()
    console.log("id > " + id)
    useEffect(() => {
        axios.get("http://localhost:5000/produits/promo", config)
            .then((res) => setData(res.data))
    }, [])

    const detailProduit = async (id) => {
        console.warn("produit N° " + id)
        navigate("/DetailProduit/" + id)
    }
    return (
        <div className="container-fluid" >
           <div className="jumbotron" style={{height:"1200px",paddingTop:"80px"}}>
           <h2 className="heading-1"><span>Liste des produits </span></h2>

            {
                data.map((prod) => (
                    <div className="col-md-3" style={{maxHeight:"480px",paddingTop:"50px"}}>
                        <div className="card h-100" style={{marginTop:"20px",height:"500px",width:"322px",  overflow: "hidden"}}>
                            <div className='card-body'>

                                <img src={path + prod.produitImage} width="100%" height="200" alt={path + prod.produitImage} />
                                <p className="card-title" key={prod.titre}><a href={"/ProduitParCategorie/" + prod._id} className="alert alert-primary">{prod.titre}</a></p>
                                <p className="card-text" key={prod.description}><a href={"/ProduitParCategorie/" + prod._id} className="text-center" >{prod.description}</a></p>
                                <p key={prod.prix}><a href={"/ProduitParCategorie/" + prod._id} className="badge badge-warning"> {prod.prix} dinars </a></p>
                            </div>
                            <div className="card-footer">
                                <button onClick={() => detailProduit(prod._id)} className="btn btn-info btn-block">Detail</button>
                            </div>
                        </div>

                    </div>
                ))
            }
            </div>
        </div >
    )
}



export default ProduitPromo