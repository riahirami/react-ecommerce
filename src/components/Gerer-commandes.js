import React from "react"
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Modal, Input } from "antd"


function GererCommandes() {
    const [titre, setTitre] = React.useState("")
    const [description, setDescription] = React.useState("")

    const params = useParams()

    const navigate = useNavigate();


    const [data, setData] = useState([])
    let path = "./images/"
    //const {id} = useParams();
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };

    useEffect(() => {
        getCommandes()
        getCommandesById()
    }
        , []
    )

    function getCommandes() {
        axios.get("http://localhost:5000/commandes", config)
            .then((res) => setData(res.data))
    }

    const getCommandesById = async (id) => {
        let resultat = await axios.get(`http://localhost:5000/commandes/${id}`, config)
            .then((res) => setData(res.data)
            )
        resultat = await resultat.json()
        console.warn(resultat)
        // setTitre(resultat.titre)
        // setDescription(resultat.description)

    }


    const validerCommande = async (id) => {

        Modal.confirm({
            title: "Tu veux vraiment valider cette commandes ?",
            okText: "Oui",
            okType: "danger",
            cancelText: "Non",
            onOk: () => {
                axios.put(`http://localhost:5000/commandes/valider/${id}`)
                // .then((res)=>setData(res.data))
                console.log("valider la commandes de l'id :  " + id)
                getCommandes()
                navigate("/Gerer-commandes/")

            }
        })

    }



    function annulerCommande(id) {
        Modal.confirm({
            title: "Tu veux vraiment annuler cette commandes ?",
            okText: "Oui",
            okType: "danger",
            cancelText: "Non",
            onOk: () => {
                axios.put(`http://localhost:5000/commandes/annuler/${id}`)
                // .then((res)=>setData(res.data))
                console.log("annuler la commandes de l'id :  " + id)
                getCommandes()
                navigate("/Gerer-commandes/")
            }
        })

    }

    const detailcommande = async (id) => {
        console.warn("produit N° " + id)
        navigate("/DetailProduit/" + id)
    }
    return (
        <div className="jumbotron" style={{ paddingTop: "100px" }}>
            <h1> Gerer les commandes</h1>
            <h2>Hello {
                //  localStorage.getItem('token')&&
                localStorage.getItem('email')
                // &&     console.log( " user : "+JSON.stringify(localStorage.getItem('token')))


            }</h2>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">liste des produits </th>
                        <th scope="col">Client</th>
                        <th scope="col">montant total </th>
                        <th scope="col">status</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((commande) => (

                        <tr key={commande._id}>
                            <th scope="row">{commande._id}</th>
                            <th scope="row">{commande.produits}</th>
                            <th scope="row">{commande.userId}</th>
                            <th scope="row">{commande.montant}</th>

                            <th scope="row">{commande.statut}</th>


                            <td>
                                <button className="btn btn-success text-light" onClick={() => validerCommande(commande._id)}><span class="fa fa-check-square" ></span></button>
                                <button className="btn btn-danger text-light" onClick={() => annulerCommande(commande._id)}><span className="fa fa-window-close"></span></button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>


    )

}


export default GererCommandes