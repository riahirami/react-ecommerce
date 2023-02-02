import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom';
import {Modal,Input } from "antd"


function GererAdministrateur() {
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };

    useEffect(() => {
        getUser()


    }, [])

    function getUser() {
        axios.get("http://localhost:5000/users/utilisateur", config)
            .then((res) => setData(res.data))
            navigate('/Gerer-Administrateur/')
    }

    function setAdmin(id) {
        Modal.confirm({
            title:"Tu veux vraiment donne rendre cet utilisateur administrateur ?",
            okText:"Oui",
            okType:"danger",
            cancelText:"Non",
            onOk:()=>{
             axios.put(`http://localhost:5000/users/superadmin/${id}`)
             // .then((res)=>setData(res.data))
             console.log("administrateur avec l'id :  " +id)
             getUser()
            }
          })
    }

    function unsetAdmin(id) {
        Modal.confirm({
            title:"Tu veux vraiment supprimer cet administrateur ?",
            okText:"Oui",
            okType:"danger",
            cancelText:"Non",
            onOk:()=>{
             axios.put(`http://localhost:5000/users/revokesuperadmin/${id}`)
             // .then((res)=>setData(res.data))
             console.log("administrateur avec l'id :  " +id)
             getUser()
            }
          })
    }

    return (
<div className="jumbotron" style={{paddingTop: "100px"}}>
            <h1> Gerer les Administrateur</h1>
        <table className="table ">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom d'utilisateur</th>
                    <th scope="col">Email</th>
                    <th scope="col">Administrateur ?</th>
                    <th scope="col">Rendre Super Admin</th>
                </tr>
            </thead>
            <tbody>
                {data.map((usr) => (

                    <tr id={usr._id} key={usr.titre}>
                        <td>{usr._id}</td>
                        <td>{usr.username}</td>
                        <td>{usr.email}</td>
                        <td>{usr.isAdmin}</td>
                        <td>
                             <button onClick={()=>setAdmin(usr._id)} className="btn btn-info " > <span className="fa fa-user-circle"></span></button>
                             <button onClick={()=>unsetAdmin(usr._id)} className="btn btn-danger " > <span className="fa fa-window-close"></span></button>
                        
                        </td>

                    </tr>
                ))}
            </tbody>

        </table>
        </div>
    )
}



export default GererAdministrateur