import { getElementById } from 'domutils'
import React from 'react'
//import "./headerscript.js"
function Header () {
    
return (
<div id="header">
   
    
    
    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
      <br></br>
      <br></br>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="mask flex-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 col-12 order-md-1 order-2">
                  <h4>Nos smartphone</h4>
                  <p>Une gamme riche avec des prix imbattables et un service service aprés vente disponible 7/7 </p>
                  <a href="http://localhost:3000/ProduitParCategorie/62672690fffadbd137d9d3f8">Voir plus</a> </div>
                <div className="col-md-5 col-12 order-md-2 order-1"><img src="./images/iPhone-12-PNG-HD.png" className="mx-auto" alt="slide"/></div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="mask flex-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 col-12 order-md-1 order-2">
                  <h4>Accessoires les plus demandés</h4>
                  <p>Tout type d'accessoires, les modéles les plus technologiques </p>
                  <a href="http://localhost:3000/ProduitParCategorie/627a8f58db6ef0bcf5ddcb10">Voir plus</a> </div>
                <div className="col-md-5 col-12 order-md-2 order-1"><img src="./images/apple-watch-se-frandroid-2020.png" className="mx-auto" alt="slide" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="mask flex-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 col-12 order-md-1 order-2">
                  <h4>Tablette pour tous !</h4>
                  <p>Les différents type, gamme, marques des tablette sont disponible pour tout type d'utilisations</p>
                  <a href="http://localhost:3000/ProduitParCategorie/627a90cfdb6ef0bcf5ddcb12">Voir plus</a> </div>
                <div className="col-md-5 col-12 order-md-2 order-1"><img src="./images/ipad-2017.png" className="mx-auto" alt="slide"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a> </div>

</div>
)
}


export default Header