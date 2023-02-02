import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Ecommerce() {

    const [data, setData] = useState([])
    const [dataphone, setDataphone] = useState([])
    const [dataacc, setDataacc] = useState([])
    const navigate = useNavigate();

  const detailProduit = async (id) => {
  
    navigate("/DetailProduit/" + id)
  }

    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    function getProducts() {
        axios.get("http://localhost:5000/produits", config)
            .then((res) => setData(res.data))

    }

    function getSmartphone(id) {
        axios.get("http://localhost:5000/produits/cat/" + id, config)
            .then((ress) => {
                setDataphone(ress.data)
            })
    }
    function getAccessoires(id) {
        axios.get("http://localhost:5000/produits/cat/" + id, config)
            .then((res) => {
                setDataacc(res.data)
            })
    }

    const idSmartphone = "62672690fffadbd137d9d3f8"
    const idAccessoires = "627a8f58db6ef0bcf5ddcb10"

    useEffect(() => {
        getProducts()
        getSmartphone(idSmartphone)
        getAccessoires(idAccessoires)
        // getChaussures(idChaussures)
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="container my-5">

                    <section>

                        <div className="row">

                            <div className="col-lg-4 col-md-12">

                                <h4 className="text-center font-weight-bold dark-grey-text mb-5">
                                    <strong>Nouveauté</strong>
                                </h4>
                                {
                                    Array.from(data).map((item, index) => {
                                        if (index < 3) {
                                            return (
                                                <div className="card hoverable mb-4" key={index}>
                                                    <div className="card-body">
                                                        <div className="row align-items-center" >
                                                            <div className="col-6 px-0">
                                                                <a href={"/DetailProduit/"+item._id}>
                                                                    <img src={/images/ + item.produitImage}
                                                                        className="img-fluid"  style={{height:"80px"}}/>
                                                                </a>
                                                            </div>
                                                            <div className="col-6">
                                                                <a href={"/DetailProduit/"+item._id}>
                                                                    <strong>{item.titre} </strong>
                                                                </a>

                                                                <h6 className="h6-responsive font-weight-bold dark-grey-text">
                                                                    <strong>{item.prix}</strong>
                                                                    <span className="grey-text">
                                                                        <small>
                                                                            <s className="badge badge-danger">{item.prix + 50}</s>
                                                                        </small>
                                                                    </span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    }
                                    )}


                            </div>

                            <div className="col-lg-4 col-md-12">

                                <h4 className="text-center font-weight-bold dark-grey-text mb-5">
                                    <strong>Smartphone</strong>
                                </h4>
                                {
                                    Array.from(dataphone).map((item, index) => {
                                        if (index < 3) {
                                            return (

                                                <div className="card hoverable mb-4">
                                                    <div className="card-body">
                                                        <div className="row align-items-center">
                                                            <div className="col-6 px-0">
                                                                <a href={"/DetailProduit/"+item._id}>
                                                                    <img src={"/images/" + item.produitImage}
                                                                        className="img-fluid" style={{height:"80px"}}/>
                                                                </a>
                                                            </div>
                                                            <div className="col-6">
                                                                <a href={"/DetailProduit/"+item._id}>
                                                                    <strong>{item.titre}</strong>
                                                                </a>

                                                                <h6 className="h6-responsive font-weight-bold dark-grey-text">
                                                                    <strong>{item.prix}dt</strong>
                                                                    <span className="grey-text">
                                                                        <small>
                                                                            <s className="badge badge-danger">{item.prix + 50}</s>
                                                                        </small>
                                                                    </span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        }
                                    }
                                    )}
                            </div>

                            {/* end */}
                            <div className="col-lg-4 col-md-12">

                                <h4 className="text-center font-weight-bold dark-grey-text mb-5">
                                    <strong>Accessoires</strong>
                                </h4>
                                {
                                    Array.from(dataacc).map((item, index) => {
                                        if (index < 3) {
                                            return (

                                                <div className="card hoverable mb-4">
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        <div className="col-6 px-0" >
                                                            <a href={"/DetailProduit/"+item._id}>
                                                                <img src={"/images/" + item.produitImage}
                                                                    className="img-fluid" style={{height:"80px"}} />
                                                            </a>
                                                        </div>
                                                        <div className="col-6">
                                                            <a href={"/DetailProduit/"+item._id}>
                                                                <strong>{item.titre}</strong>
                                                            </a>

                                                            <h6 className="h6-responsive font-weight-bold dark-grey-text">
                                                                <strong>{item.prix}dt</strong>
                                                                <span className="grey-text">
                                                                    <small>
                                                                        <s className="badge badge-danger">{item.prix + 50}</s>
                                                                    </small>
                                                                </span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

)
}
}
)}
</div>

                        </div>

                    </section>
                    
                </div>

            </div>
        </>
    )
}


export default Ecommerce