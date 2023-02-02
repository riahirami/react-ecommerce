import React from 'react';
import { BrowserRouter, Switch, Route, Link, useNavigate, useParams } from "react-router-dom"

const Dashboard = () => {
    return (
     
<div className="container-fluid">
    <div className="jumbotron">
            <div class="container my-5">


  <section class="dark-grey-text text-center">

    <h3 class="font-weight-bold black-text mb-4 pb-2"></h3>
    <h6 class="font-weight-normal text-uppercase font-small grey-text mb-4">Hello : {localStorage.getItem("email")}</h6>
    <hr class="w-header"></hr>
    <p class="lead text-muted mx-auto mt-4 pt-2 mb-5">Les Différents rubriques de gestion de votre espace </p>

    <div class="row">

      <div class="col-md-3 mb-4">

        <a href="#!" class="card hoverable">
          
          <div class="card-body my-4">
<Link to="/Gerer-produits">
          	<p><i class="fas fa-tablet-alt fa-2x text-muted "></i></p>
            <h5 class="black-text mb-0">    
                                    Gerer les produits
</h5>
</Link>    
          </div>

        </a>

      </div>
 
      <div class="col-md-3 mb-4">

        <a href="#!" class="card hoverable">
          
          <div class="card-body my-4">
          <Link to="/Gerer-categories">
          	<p><i class="glyphicon glyphicon-tags fa-2x text-muted"></i></p>
            <h5 class="black-text mb-0">
            Gerer les categories

            </h5>
            </Link>
          </div>

        </a>

      </div>
    
      <div class="col-md-3 mb-4">

        <a href="#!" class="card hoverable">
          
          <div class="card-body my-4">
          <Link to="/Gerer-commandes">
          	<p><i class="glyphicon glyphicon-shopping-cart fa-2x text-muted"></i></p>
            <h5 class="black-text mb-0">
            Gerer les commandes

            </h5>
            </Link>
          </div>

        </a>

      </div>
     
      <div class="col-md-3 mb-4">

        <a href="#!" class="card hoverable">
          
          <div class="card-body my-4">
          <Link to="/Gerer-Administrateur">
          	<p><i class="glyphicon glyphicon-user fa-2x text-muted"></i></p>
            <h5 class="black-text mb-0">
          Gerer les utilisateurs

            </h5>
            </Link>
          </div>

        </a>

      </div>

    </div>

	</section>
            
</div>
</div>
  
</div>
    );
};

export default Dashboard;