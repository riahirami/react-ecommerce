import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import "../w3school.css"

function VenteFlash(params) {
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
    useEffect(() => {
        axios.get("http://localhost:5000/produits/venteflash", config)
            .then((res) => setData(res.data))
    }, [])

    const detailProduit = async (id) => {
        console.warn("produit N° " + id)
        navigate("/DetailProduit/" + id)
    }

    function closediv() {
        document.getElementById("flash").style.display="none";

        console.log("closediv button")
    }
    return (


        <div id="flash" className="container-flui w3-animate-zoom "
            style={{
                position: "fixed",
                top: "58%",
                left: "8px",
                zIndex: "1000",
                border: "11px ridge rgba(22,145,47,0.94)",
                borderRadius: "15px",
                boxShadow: "8px 10px 22px -3px rgba(0,0,0,0.66)",
                webkitBoxShadow: "8px 10px 22px -3px rgba(0,0,0,0.66)",
                mozBoxShadow: "8px 10px 22px -3px rgba(0,0,0,0.66)",
                backgroundColor: "white",
                width:"250px",
                height:"220px"
            }}>
            {
                <>
                    <div  className="w3-animate-fading	">
<a onClick={()=>closediv()} className="pull-right  fa fa-window-close"></a>
                        <h1 className="alert alert-success badge">Vente Flash</h1>
                        {/* <a onClick={()=>closediv()} className="pull-right  fa fa-window-close"></a> */}

                        <a href={"/DetailProduit/" + data._id} ><img style={{position:"relative"}} src={path + data.produitImage} width="200" height="135" alt={path + data.produitImage}  />
                        </a>
                        <div style={{position:"absolute",top:"30px",left:"10px"}}>
                        <h3>{data.titre} à <span className="badge badge-warning" >{data.prix}dt </span> seulement</h3>
                        </div>

                        {/* <h3 className="">encore <span className="badge badge-info">{data.quantite}</span> en stock</h3> */}
                    </div>

                </>

            }
        </div >
    )
}



export default VenteFlash