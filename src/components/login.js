import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import "../login.css"
import jwt_decode from "jwt-decode";
import { Modal } from 'antd';

function Login() {
  const [error, setError] = useState("")
  const [data, setData] = useState({

    id: "",
    email: "",
    password: "",
    isAdmin: ""
  })
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate("/")
    }
  }, [])
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };


  async function submit(e) {
    e.preventDefault();
    try {
      const { data: res } = await axios.post("http://localhost:5000/auth", data)
      const valeurId = jwt_decode(res)
      localStorage.setItem('token', res)
      localStorage.setItem('email', data.email)
     // localStorage.setItem('role', data.isAdmin)
      localStorage.setItem('id', valeurId._id)
      console.log("token " + res)
      console.log("data " + JSON.stringify(data))

      if (res) {
        console.log("res " + JSON.stringify(jwt_decode(res)))
        // alert("hello "+data.email)
        // window.location="/Gerer-produits"
        // navigate("/")
        window.location.reload();
        
      }
    } catch (error) {
      if (error.response ||
        error.response.status >= 400 ||
        error.response.status <= 500) {
        setError(error.response.data.message)
        console.warn(error.response.data.message)
       

        Modal.error({
          title: 'Erreur',
          content: error.response.data.message,
        });
      }


    }
  }
  function handle(e) {
    setData({ ...data, [e.target.id]: e.target.value })
  }
  return (
    <div id="login">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" onSubmit={(e) => submit(e)}>
                <h3 className="text-center text-info">S'authentifier</h3>
                <div className="form-group">
                  <label for="username" className="text-info">nom d'utilisateur:</label><br />
                  <input type="text" name="username" id="username" className="form-control" id="email" onChange={(e) => handle(e)} value={data.email} />
                </div>
                <div className="form-group">
                  <label for="password" className="text-info">mot de passe:</label><br />
                  <input type="password" name="password" id="password" className="form-control" id="password" onChange={(e) => handle(e)} value={data.password} />
                </div>
                <div className="form-group">
                  <label for="remember-me" className="text-info"><span>Souvenir de moi ?</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                  <button className="btn btn-primary" name="submit" className="btn btn-info btn-md"> Se connecter </button>
                </div>
                <div id="register-link" className="text-right">
                  <br></br>
                  {/* <br></br> */}
                  <Link to="/inscription" className=" btn btn-primary">Creer compte </Link>
                </div>
              </form>
            </div>

          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>

      </div>
    </div>
  )


}

export default Login