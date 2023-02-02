import React from "react";
import Products from "./products";
import Promo from "./promo";
import Carousel from "./carousel";
import Slideshow from "./slideshow";
import Header from "./header";
import Carousel2 from "./carousel2";
import ListeCategorie from "./ListeCategorie";
import Api from "./api";
import "../container.css"
import VenteFlash from "./venteflash";
import Panier from "./panier";
import Ecommerce from "./ecommerce";
function Container() {

    return (
        <div id="containerComponents" style={{ paddingTop: "70px" }}>

            <div className="row">
                <div className="col-md-12">
                    <Header />
                </div>
            </div>

            <div className="row">
                <div className="col-md-3" style={{ backgroundColor: "#fff" }}>

                    {/* <h1 className="heading-1"><span>Panier</span></h1> */}
                    <Panier />



                    <h1 className="heading-1"><span>Nos catégories</span></h1>

                    <ListeCategorie />
                    <h1 className="heading-1"><span>En promo </span></h1>

                    <Slideshow />

                    {/* <h1 className="heading-1"><span>Vente flash</span></h1> */}

                    <VenteFlash />
                </div>
                <div className="col-md-9 " style={{ backgroundColor: "#fff" }}>




                    {/* <Carousel2/> */}
                    <h1 className="heading-1"><span>Nos produits</span></h1>

                    <Products />
<br></br>
                    <img src="./images/gamer.webp" width="100%" />

                </div>
                <div className="row">
                    <div className="col-md-12 ">
                        <h1 className="heading-1"><span>En promo</span></h1>

                        <Carousel />
                    </div>
                </div>
                <img src="./images/loisirs.webp" />
                <div className="col-md-3">

                </div>
                <div  className="col-md-12" style={{backgroundColor:"#fff"}}>
                <h1 className="heading-1"><span>Recommander pour vous </span></h1>

                    <Ecommerce />
                    
                    </div>



            </div>

            <div className="row">

               
               
            </div>
        </div>
    )
}


export default Container