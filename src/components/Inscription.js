import React, { useState,useEffect } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import "../login.css"
import { Modal } from 'antd';


function Inscription(){
   const url = "http://localhost:5000/users"
   const navigate=useNavigate()
   const [data,setData] = useState({
       username:"",
       email:"",
       password:"",
       telephone:"",
       isAdmin:"false"
    //   id:""
   })
  
   useEffect(()=>{
    if (localStorage.getItem('token')) {
      navigate("/Gerer-produits")
    }
  },[])

   
   function submit(e){
    e.preventDefault();
    axios.post(url,{
        username:data.username,
        email:data.email,
        password:data.password,
        telephone:data.telephone,
        isAdmin:data.isAdmin
       // id:data.id
    })
    .then(res=>{
        console.log("user ---> "+res.username+" ajouté avec succés" )
        Modal.success({
          content: ' Votre compte a été créer avec succée',
        });
        navigate("/login")
      })
   }

   function handle(e){
       const newData={...data}
       var admin = document.getElementById("isAdmin");  
    if (e.target.id=="isAdmin") {
        if( admin.checked)
           {
            //  console.log("before "+oui.checked+" = true") 
             newData["isAdmin"]="true" 
             setData(newData)
              console.log("true --> new data2 : "+JSON.stringify(newData))
            }
           else{
            // console.log(oui.checked+" = false")
             newData["isAdmin"]="false" ;
             setData(newData)
             console.log("false --> new data2 : "+JSON.stringify(newData))
           }
    } else {
        
    
         
       newData[e.target.id]= e.target.value
       setData(newData)
       console.log("==> () "+JSON.stringify(newData))
   }}
    return (
        <div id="jumbotron" className="jumbotron">
            {/* <h1> inscription</h1>
            <form onSubmit={(e)=>submit(e)}>
 

  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example3">username</label>
    <input type="text"  className="form-control" id="username" onChange={(e)=> handle(e)} value={data.username} />
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example4">email</label>
    <textarea className="form-control" rows="3" id="email" onChange={(e)=> handle(e)} value={data.email}></textarea>
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example3">Telephone</label>
    <input type="text" id="telephone" className="form-control" onChange={(e)=> handle(e)} value={data.telephone} />
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example4">password</label>
    <textarea className="form-control" rows="3" id="password" onChange={(e)=> handle(e)} value={data.password}></textarea>
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example4">isAdmin ?</label>
    <input type="checkbox"   id="isAdmin" onChange={(e)=> handle(e)} value={data.isAdmin}/>
  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4">inscrit</button>
</form> */}


{/* ici */}





<br></br>
<br></br>
<br></br>
<br></br>

<div className="card bg-light ">
<div className="card-bod mx-aut " style={{maxWidth: "800px"}}>
	<h4 className="card-title mt-3 text-center">As-tu un compte ?</h4>
  <Link to="/login" className="btn btn-primary btn-block">s'authentifier </Link>
	<p className="divider-text">
        <span className="bg-light">Ou</span>
    </p>
    <h4 className="card-title mt-3 text-center">Creer Compte</h4>

	<form onSubmit={(e)=>submit(e)}>
	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
        <input className="form-control" placeholder="nom utilisateur" type="text" id="username" onChange={(e)=> handle(e)} value={data.username} />
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input className="form-control" placeholder="Email " type="email"  id="email" onChange={(e)=> handle(e)} value={data.email}/>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
		</div>
		<select className="custom-select" style={{maxWidth: "120px"}}>
		    <option value="">+216</option>
		 
		</select>
    	<input className="form-control" placeholder="téléphone" type="text" id="telephone" onChange={(e)=> handle(e)} value={data.telephone} />
    </div>
    
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-address-book"></i> </span>
		</div>
        <input className="form-control" placeholder="adresse" type="text"/>
    </div>
    
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="mot de passe" type="password"/>
    </div>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="confirmer mot de passe" type="password"  id="password" onChange={(e)=> handle(e)} value={data.password}/>
    </div>        
    {/* <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form6Example4">isAdmin ?</label>
    <input type="checkbox"   id="isAdmin" onChange={(e)=> handle(e)} value={data.isAdmin}/>
  </div> */}

    <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block"> Creer compte  </button>
        
    </div>     
    

    <Link to="/login" className=" text-center text-info">T'as déja un compte ? login </Link>
                                <br></br>                             
                                <br></br>                             
</form>
</div>
</div> 

</div> 


    )

}


export default Inscription