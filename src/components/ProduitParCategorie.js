import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom';


function ProduitParCategorie(params) {
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
        axios.get("http://localhost:5000/produits/cat/" + id, config)
            .then((res) => setData(res.data))
    }, [])

    const detailProduit = async (id) => {
        console.warn("produit N° " + id)
        navigate("/DetailProduit/" + id)
    }
    return (
        <div className="container-fluid">
            <br></br>
            <br></br>
            <br></br>

            <h2 className="heading-1"><span>Liste des produits </span></h2>

            {
                 console.log("data > "+JSON.stringify(data)),
                data.map((prod) => (
                    <div className="col-md-4" style={{float:"left",height:"650px"}}>
                        <div className="card h-100" style={{marginTop:"20px"}}>
                            <div className="card-header">
                                <h2 className="card-title" key={prod.titre}><a href={"/ProduitParCategorie/" + prod._id} >
                                    {prod.titre}</a>
                                    </h2>
                                    <p key={prod.prix} className="badge badge-info "> Prix : {prod.prix} dinars</p>
                              

                            </div>
                            <div className='card-body'>

                                <img src={path + prod.produitImage} width="100%" height="350" alt={path + prod.produitImage} />
                                <br></br>
                                <br></br>
                                <p>{prod.description}</p>
                            </div>
                            <div className="card-footer">
                                <button onClick={() => detailProduit(prod._id)} className="btn btn-info btn-block" ><i className="glyphicon glyphicon-eye-open"></i></button>
                            </div>
                        </div>

                    </div>
                ))
            }

        </div >
    )
}



export default ProduitParCategorie