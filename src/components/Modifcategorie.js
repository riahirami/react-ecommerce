import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
import {useParams,Link,useNavigate  } from 'react-router-dom' ;
import {Modal } from "antd"


function Modifcategorie(props) {
    const url = "http://localhost:5000/categories/"
    const navigate = useNavigate();
    const [categoriesList,setCategoriesList]=useState([])
    const [data, setData] = useState({
        titre: "",
        description: "",
      
    })
    const {id} = useParams()

    useEffect(() => {
        // const id = props.match.params.id
        axios.get("http://localhost:5000/categories/"+ id)
            .then(res => {
                setData(res.data)
            })
    }
        , []
    )

    function submit(e) {
        e.preventDefault();
        // const id = useParams()
        axios.put("http://localhost:5000/categories/"+id, data)
            .then(res => {
              Modal.success({
                title:"Categorie modifier avec succés",
                okText:"Ok",
                okType:"success",
                onOk:()=>{
                  console.log("updated" +data)
                  navigate("/Gerer-categories")
                }
              })  
            }).catch(err=>console.error(err))
    }

    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log("update >>  " + newData)
    }

    return (
        <div className="jumbotron" style={{paddingTop: "100px"}}>
            <h1> modifier categorie</h1>
            <form onSubmit={(e)=>submit(e)}>
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <label className="form-label" htmlFor="form6Example1">titre</label>
        <input type="text" id="titre" className="form-control" onChange={(e)=> {handle(e)}} value={data.titre} />
      </div>
    </div>
    
  </div>


  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example7">Description</label>
    <textarea className="form-control" id="description" rows="4" onChange={(e)=> {handle(e)}} value={data.description} ></textarea>
  </div>



  <button type="submit" className="btn btn-primary btn-block mb-4">Modifier Categorie</button>
  </form>
        </div>
    )
}

export default Modifcategorie