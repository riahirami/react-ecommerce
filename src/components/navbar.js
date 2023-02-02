import React from "react";
import { BrowserRouter, Switch, Route, Link, useNavigate, useParams } from "react-router-dom"
import Apropos from './Apropos';
import { Modal, Input } from "antd"
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import axios from 'axios'
import MesCommandes from "./MesCommandes";


function Navbar() {
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
  const navigate = useNavigate()


  const [data, setData] = useState([])
  const [dataa, setDataa] = useState(["visiteur"])

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  const id = localStorage.getItem("id")
  useEffect(() => {
    axios.get("http://localhost:5000/categories", config)
      .then((res) => setData(res.data))

    checkUser(id)

  }, [])

  const logout = async () => {
    Modal.confirm({
      title: "Tu veux vraiment deconnecté ?",
      okText: "Oui",
      okType: "warning",
      cancelText: "Non",
      onOk: () => {
        localStorage.clear()
        navigate("/")
      }
    })
  //  navigate("/login")
  }

  const url = "http://localhost:5000/commandes"

  const prd = []
  items.map((item, i) => (
    prd[i] = item.titre + "-"
  ))
  let somme = cartTotal
  useEffect(() => {
    let somme = cartTotal
    console.log("sommeeee: "+somme);

  })
  const [datta, setDatta] = useState({
    userId: localStorage.getItem('id'),
    montant: somme,
    produits: prd,
    statut: "en cours",
  })

  function submit(e) {
    e.preventDefault();

    axios.post(url, {
      userId: datta.userId,
      montant: somme,
      // montant: data.montant,
      produits: prd,
      statut: datta.statut,
      // id:data.id
    })
      .then(res => {
        console.log("commandes ---> " + JSON.stringify(res.datta) + " ajouté avec succés, montant : " + cartTotal)
        console.log("array prd : " + prd)
        // ))
      })
    Modal.success({
      content: "commande " + datta.produits + ' bien valider',
    });
    emptyCart()
  }


  const checkUser = (id) => {
    if (id) {
      axios.get("http://localhost:5000/users/utilisateur/checkadmin/" + id, config)
      .then((ress) => {
        setDataa(ress.dataa)
        //console.log("data user >> "+JSON.stringify(ress))
        console.log("user de l'id " + id + " |  admin ? " + ress.data)
        localStorage.setItem("role-admin",ress.data)
      })
    } else {
      console.log("visiteur non connecté !!")
    
    axios.get("http://localhost:5000/users/utilisateur/checkadmin/" + id, config)
    .then((ress) => {
      setDataa("visiteur")
      console.log("user de l'id " + id + " |  admin ? " + ress.data)
      localStorage.setItem("role-admin",ress.data)
    })
  }
  }

  // block des clients 
  if (localStorage.getItem("role-admin") == "false"  ) {
    localStorage.setItem("user","client")

        return (
      <div>

      <nav className=" navbar-dark text-light bg-dark fixed-top " style={{ height: "35px", zIndex: "10000" }}>

        <ul style={{ marginLeft: "0px" }}>
          <li className="nav-item " className="glyphicon glyphicon-envelope">  email@gmail.com</li>
          <li className="nav-item" className="glyphicon glyphicon-earphone">  54500400</li>
        </ul>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{
        // paddingTop: "50px",
        marginTop: "25px",
        borderBottom: "solid 4px #E68E20", marginBottom: "10px"
      }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="./images/logo-ecommerce.png"
                height="15"
                alt="Logo"
                loading="logo"
                width="60" height="53"
              />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" to="/">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Allproducts">Tout les produits</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Catégories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {data.map((cat) => (
                    <a className="dropdown-item" href={"/ProduitParCategorie/" + cat._id} >{cat.titre}</a>
                  ))}
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProduitPromo">Produit en promo</Link>
              </li>
             
              <li className="nav-item">
                        <Link className="nav-link" to="/panier">Panier</Link>
                      </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/Contactez-nous">Contactez-nous</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/a-propos">A propos</Link>
              </li>
             
              {/* <li className="nav-item">
            <Link className="nav-link" to="/venteflash">Vente flash</Link>
          </li> */}

             

            </ul>



          </div>



          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </form>
          <div className="d-flex align-items-center">




            {/*  */}
                 </div>
                 
               

        </div>
        <div>  <ul className="nav navbar-nav navbar-right">
                      <li className="dropdown">
                        {" "}
      
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                          <i className="fas fa-shopping-cart"></i>
                          <span className="badge rounded-pill badge-warning">{totalItems}</span>
      
                          <span className="carte"></span></a>
                        <ul className="dropdown-menu dropdown-cart" role="menu">
                          <span>produit {totalUniqueItems} - total: {totalItems}</span>
                          {items.map((item, index) => {
                            return (
                              <li key={index}>
                                <span className="item">
                                  <span className="item-lef">
                                    <span className="item-inf col">
                                      <div className="col-md-8">
                                        <img src={/images/ + item.produitImage} height="30%" width="30%" alt="" />
                                        <span>     {item.titre} | {item.price} dinars x  {item.quantity} = <span className="badge badge-warning">{item.price * item.quantity}</span> </span>
                                      </div>
                                      <div className="col-md-2">
                                        <div className="btn-groupp">
      
                                          <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn  btn-outline-success">
                                            <span className="fa fa-plus-square"></span>
                                          </button>
                                          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn  btn-outline-dark ">
                                            <span className="fa fa-minus-square"></span>
                                          </button>
                                          <button onClick={() => removeItem(item.id)} className="btn btn-outline-danger"><span className="fa fa-trash"></span></button>
                                        </div>
                                      </div>
                                    </span>
      
                                  </span>
      
      
      
      
                                </span>
      
                                <hr></hr>
                              </li>
                            )
                          })}
                          <div className="col-auto ms-auto">
                            <h2> total : {cartTotal} TND</h2>
                          </div>
      
      
                          <li className="divider"></li>
                          <form onSubmit={(e) => submit(e)}>
      
                            <li><button className="text-center btn btn-success btn-lg btn-block" type="submit">Passer la commande</button></li>
                          </form>
                          <li><a onClick={() => emptyCart()} className="text-center btn btn-warning btn-lg btn-block" >
                            vider panier</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    </div>
      
                    {/*  */}
                    <>
                      <div class="collapse navbar-collapse" id="navbar-list-4">
                        <ul class="navbar-nav">
                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" width="30" height="30" class="rounded-circle" />
                            </a>
                            <div class="dropdown-menu" style={{left: "-125px"}} aria-labelledby="navbarDropdownMenuLink">
                              {/* <a class="dropdown-item" href="#">Dashboard</a> */}
                              <li>
                                <Link onClick={MesCommandes} to="/Mescommandes"><i className="glyphicon glyphicon-list-alt"></i>  Mes Commandes </Link>
                                <Link onClick={logout} to="/login"><span className="glyphicon glyphicon-off "></span>  Logout </Link>
                                {/* <button className="badge badge-danger"> <Link onClick={logout} to="/login">logout</Link></button> */}

                              </li>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </>
      
      </nav>



    </div>
     
    )
  }

  // block des administrateur
  else if (localStorage.getItem("role-admin") == "true") {
localStorage.setItem("user","admin")
    return (

      <div>
              <nav className=" navbar-dark text-light bg-dark fixed-top " style={{ height: "35px", zIndex: "10000" }}>
                <ul style={{ marginLeft: "0px" }}>
                  <li className="nav-item " className="glyphicon glyphicon-envelope">  email@gmail.com</li>
                  <li className="nav-item" className="glyphicon glyphicon-earphone">  54500400</li>
                </ul>
              </nav>
              <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{
                // paddingTop: "50px",
                marginTop: "25px",
                borderBottom: "solid 4px #E68E20", marginBottom: "10px"
              }}>
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
      
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                      <img
                        src="./images/logo-ecommerce.png"
                        height="15"
                        alt="MDB Logo"
                        loading="lazy"
                        width="60" height="53"
                      />
                    </a>
      
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Accueil</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Catégories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          {data.map((cat) => (
                            <a className="dropdown-item" href={"/ProduitParCategorie/" + cat._id} >{cat.titre}</a>
                          ))}
      
      
                        </div>
                      </li>
                      <li className="nav-item">
                <Link className="nav-link" to="/Allproducts">Tout les produits</Link>
              </li>
              <li className="nav-item">
                        <Link className="nav-link" to="/ProduitPromo">Produit en promo</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/venteflash">Vente flash</Link>
                    </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Contactez-nous">Contactez-nous</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/a-propos">A propos</Link>
                      </li>
                     
                      
                      
      
                    </ul>
      
                    <div className="d-flex align-items-center">
                      <div className="dropdown">
                        <button className="btn btn-outline-warning  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="glyphicon glyphicon-cog"></i>  Dashboard 
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <Link to="/Dashboard">Dashboard</Link>
                          </li>
                          <li>
                            <Link to="/Gerer-produits">Gerer les produits</Link>
                          </li>
                          <li>
                            <Link to="/Gerer-categories">Gerer les categories</Link>
                          </li>
                          <li>
                            <Link to="/Gerer-commandes">Gerer les commandes</Link>
                          </li>
                          <li>
                            <Link to="/Gerer-Administrateur">Gerer les utilisateurs</Link>
                          </li>
      
                          <li>
                            <Link to="/Ajouter-Produit">Ajouter produits</Link>
                          </li>
                          <li>
                            <Link to="/Ajouter-Categories">Ajouter Categories</Link>
                          </li>
                          <li>
                            <Link onClick={logout} to="/login">Logout</Link>
                          </li>
      
                        </div>
                      </div>
      
      
      
                    </div>
      
      
                  </div>
      
      
      
                  <form className="d-flex input-group w-auto">
                    <input
                      type="search"
                      className="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span className="input-group-text border-0" id="search-addon">
                      <i className="fas fa-search"></i>
                    </span>
                  </form>
                  <div className="d-flex align-items-center">
      
      
      
                  </div>
      
                </div>
              </nav>
      
      
      
            </div>
      
          )
  } 
    // block des visiteur

  else{
    localStorage.setItem("user","visiteur")
    return (

      <div>
              <nav className=" navbar-dark text-light bg-dark fixed-top " style={{ height: "35px", zIndex: "10000" }}>
                <ul style={{ marginLeft: "0px" }}>
                  <li className="nav-item " className="glyphicon glyphicon-envelope">  email@gmail.com</li>
                  <li className="nav-item" className="glyphicon glyphicon-earphone">  54500400</li>
                </ul>
              </nav>
              <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{
                // paddingTop: "50px",
                marginTop: "25px",
                borderBottom: "solid 4px #E68E20", marginBottom: "10px"
              }}>
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
      
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                      <img
                        src="./images/logo-ecommerce.png"
                        height="15"
                        alt="MDB Logo"
                        loading="lazy"
                        width="60" height="53"
                      />
                    </a>
      
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                      <li className="nav-item">
                        <Link className="nav-link" to="/">Accueil</Link>
                      </li>
                      <li className="nav-item">
                <Link className="nav-link" to="/Allproducts">Tout les produits</Link>
              </li>
                     
                      {/* <li className="nav-item">
                      <Link className="nav-link" to="/venteflash">Vente flash</Link>
                    </li> */}
                      
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Catégories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                          {data.map((cat) => (
                            <a className="dropdown-item" href={"/ProduitParCategorie/" + cat._id} >{cat.titre}</a>
                          ))}
      
      
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/ProduitPromo">Produit en promo</Link>
                      </li>
                    
                      <li className="nav-item">
                        <Link className="nav-link" to="/Contactez-nous">Contactez-nous</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/a-propos">A propos</Link>
                      </li>
                    </ul>
      
                  
      
                  </div>
      
      
      
                  <form className="d-flex input-group w-auto">
                    <input
                      type="search"
                      className="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span className="input-group-text border-0" id="search-addon">
                      <i className="fas fa-search"></i>
                    </span>
                  </form>
                  <div className="d-flex align-items-center">
      
      
      
                    {/*  */}
                    <>
                  
                    <div class="collapse navbar-collapse" id="navbar-list-4">
                <button className="badge badge-info"> <Link to="/inscription">Inscrivez-vous</Link></button>
                <button className="badge badge-warning"><Link to="/login">login</Link></button>
                {/* <button className="badge badge-danger"> <Link onClick={logout} to="/login">logout</Link></button> */}
              </div>

                    </>
      
                  </div>
      
                </div>
              </nav>
      
      
      
            </div>
      
          )  }
}

export default Navbar