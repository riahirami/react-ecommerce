import React, { useState } from "react"
import axios from 'axios'
import {Modal,Input } from "antd"
import {useNavigate  } from 'react-router-dom' ;


function AjouterCategories(){
   const url = "http://localhost:5000/categories"
   const [data,setData] = useState({
       titre:"",
       description:"",
    //   id:""
   })
   const navigate = useNavigate();

   function submit(e){
    e.preventDefault();
    axios.post(url,{
        titre:data.titre,
        description:data.description,
       // id:data.id
    })
    .then(res=>{
        Modal.success({
          title:"Catégories ajouté avec succés",
          okText:"Ok",
          okType:"success",
          onOk:()=>{
            console.log("catégorie ---> "+res.data.titre+" ajouté avec succés" )
            navigate("/Gerer-categories")

          }})


    })
   }

   function handle(e){
       const newData={...data}
       newData[e.target.id]= e.target.value
       setData(newData)
       console.log("handle () "+newData)
   }
    return (
        <div id="jumbotron" className="jumbotron" style={{paddingTop: "100px"}}>
         
            <h1> Ajouter Categorie</h1>
            <form onSubmit={(e)=>submit(e)}>
 

  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example3">Categorie</label>
    <input type="text" id="titre" className="form-control" onChange={(e)=> handle(e)} value={data.titre} />
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example4">Description</label>
    <textarea className="form-control" rows="3" id="description" onChange={(e)=> handle(e)} value={data.description}></textarea>
  </div>

   <div className="form-outline mb-4">
   <label htmlFor="exampleFormControlFile1">Image</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4">Ajouter Categorie</button>
</form>
        </div>
    )

}


export default AjouterCategories