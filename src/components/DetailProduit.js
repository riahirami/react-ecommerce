import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { Modal, Input } from "antd"
import '../card.css'
import Ecommerce from "./ecommerce";


function DetailProduit(props) {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    const { addItem } = useCart();

    const url = "http://localhost:5000/produits/"
    const navigate = useNavigate();
    const [produitList, setProduitList] = useState([])
    const [data, setData] = useState({
        titre: "",
        description: "",
        couleur: "",
        prix: "",
        produitImage: "",
        id:""
    })
    let path = "./images/"
    const { id } = useParams()
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    const ussr=localStorage.getItem("user")

    useEffect(() => {
        // const id = props.match.params.id
        axios.get("http://localhost:5000/produits/" + id)
            .then(res => {
                setData(res.data)
            })
            const ussr=localStorage.getItem("user")

    }
        , []
    )


    const updateProduct = async (id) => {
        console.warn("id= " + id)
        navigate('/Modifproduit/' + id)
    }

    function getProduit() {
        axios.get("http://localhost:5000/produits", config)
            .then((res) => setData(res.data))
    }

    function supprimerProduits(id) {
        Modal.confirm({
            title: "Tu veux vraiment supprimer ce produit ?",
            okText: "Oui",
            okType: "danger",
            cancelText: "Non",
            onOk: () => {
                axios.delete(`http://localhost:5000/produits/${id}`)
                // .then((res)=>setData(res.data))
                console.log("supprimer l'article de l'id :  " + id)
                getProduit()
                navigate("/Gerer-produits")
            }
        })

    }

    if (ussr==="admin")

    return (
        <div className="jumbotron">
<br></br>
<br></br>
<br></br>
            <div className="container-fluid bg-trasparent" key={data._id}>
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                    <div className="col">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={"/images/" + data.produitImage} width="100%" height="350px" alt={data.produitImage} className="card-img-to" />
                                </div>
                                <div className="col-md-8">
                                    <div className="">
                                        <h2 className="float-end badge badge-primary">New</h2><br />
                                    </div>
                                    <h3 className="" key={data._id}>{data.titre} </h3>

                                    <p className="card-titl">{data.description}</p>
                                    <p className="card-titl">Couleur :{data.couleur}</p>
                                    <br /><br /> <br />
                                    <p className=" badge rounded-pill bg-primary">prix : {data.prix} </p>
                                    <br /> <br />  <br />
                                    <div className="text-center my-4">
                                        <button className="btn btn-primary" onClick={() => updateProduct(data._id)}>Modifier</button>
                                        <button className="btn btn-dark" onClick={() => supprimerProduits(data._id)}>Supprimer</button>
                                        <button className="btn btn-info" onClick={() => addItem(data._id)}>ajoute au panier</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h2 className="heading-1"><span>Des produits recommander pour vous </span></h2>

<Ecommerce/>

        </div>
    )

    else if (ussr=="client")
    return (
        <div className="jumbotron">
<br></br>
<br></br>
<br></br>
            <div className="container-fluid bg-trasparent" key={data._id}>
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                    <div className="col">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={"/images/" + data.produitImage} width="100%" height="350px" alt={data.produitImage} className="card-img-to" />
                                </div>
                                <div className="col-md-8">
                                    <div className="">
                                        <h2 className="float-end badge badge-primary">New</h2><br />
                                    </div>
                                    <h3 className="" key={data._id}>{data.titre} </h3>

                                    <p className="card-titl">{data.description}</p>
                                    <p className="card-titl">Couleur :{data.couleur}</p>
                                    <br /><br /> <br />
                                    <p className=" badge rounded-pill bg-primary">prix : {data.prix} </p>
                                    <br /> <br />  <br />
                                    <div className="text-center my-4">
                                        {/* <button className="btn btn-primary" onClick={() => updateProduct(data._id)}>Modifier</button> */}
                                        {/* <button className="btn btn-dark" onClick={() => supprimerProduits(data._id)}>Supprimer</button> */}
                                        <button className="btn btn-info" onClick={() => addItem(data)}>ajoute au panier</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h2 className="heading-1"><span>Des produits recommander pour vous </span></h2>

<Ecommerce/>

        </div>
    )

    return (
        <div className="jumbotron">
<br></br>
<br></br>
<br></br>
            <div className="container-fluid bg-trasparent" key={data._id}>
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                    <div className="col">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={"/images/" + data.produitImage} width="100%" height="350px" alt={data.produitImage} className="card-img-to" />
                                </div>
                                <div className="col-md-8">
                                    <div className="">
                                        <h2 className="float-end badge badge-primary">New</h2><br />
                                    </div>
                                    <h3 className="">{data.titre} </h3>

                                    <p className="card-titl">{data.description}</p>
                                    <p className="card-titl">Couleur :{data.couleur}</p>
                                    <br /><br /> <br />
                                    <p className=" badge rounded-pill bg-primary">prix : {data.prix} </p>
                                    <br /> <br />  <br />
                                    <div className="text-center my-4">
                                        {/* <button className="btn btn-primary" onClick={() => updateProduct(data._id)}>Modifier</button> */}
                                        {/* <button className="btn btn-dark" onClick={() => supprimerProduits(data._id)}>Supprimer</button> */}
                                        {/* <button className="btn btn-info" onClick={() => addItem(data)}>ajoute au panier</button> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h2 className="heading-1"><span>Des produits recommander pour vous </span></h2>

<Ecommerce/>

        </div>
    )
}

export default DetailProduit