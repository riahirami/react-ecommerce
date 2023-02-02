import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom';


function ListeCategorie() {
    const [data, setData] = useState([])

    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };

    useEffect(() => {
        axios.get("http://localhost:5000/categories", config)
            .then((res) => setData(res.data))


    }, [])

    return (
        <ul className="list-group list-group-horizontal">
       {data.map((cat) => (
        <li  className="list-group-item " id={cat._id} key={cat.titre}><a href={"/ProduitParCategorie/" + cat._id} >{cat.titre}</a></li>
        ))}
    </ul>

    )
}



export default ListeCategorie