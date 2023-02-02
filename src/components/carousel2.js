import React from 'react'
import '../carousel.css'

function Carousel2(){

    return(

        <div>

            <div className="container content"> 
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel"> 
                <ol className="carousel-indicators"> 
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li> 
                <li data-target="#carousel-example-generic" data-slide-to="2"></li> 
                </ol> 
                <div className="carousel-inner"> 
                <div className="item active"> 
                <div className="row"> 
                <div className="col-xs-12"> 
                <div className="thumbnail adjust1"> 
                <div className="col-md-2 col-sm-2 col-xs-12"> 
                <img className="media-object img-rounded img-responsive" src="http://placehold.it/100"/> 
                </div> 
                <div className="col-md-10 col-sm-10 col-xs-12"> 
                <div className="caption"> 
                <p className="text-info lead adjust2">I can't wait to test this out.</p> 
                <p><span className="glyphicon glyphicon-thumbs-up"></span> This is a testimonial window. Feedback of user can be displayed here.</p> 
                <blockquote className="adjust2"> 
                <p>Abhijit Goswami</p> 
                <small><cite title="Source Title"><i className="glyphicon glyphicon-globe"></i> www.example1.com</cite></small>
                 </blockquote> 
                 </div> 
                 </div> 
                 </div> 
                 </div> 
                 </div> </div> 
                 <div className="item"> 
                 <div className="row"> 
                 <div className="col-xs-12"> <div className="thumbnail adjust1"> <div className="col-md-2 col-sm-2 col-xs-12"> <img className="media-object img-rounded img-responsive" src="http://placehold.it/100"/> </div> <div className="col-md-10 col-sm-10 col-xs-12"> <div className="caption"> <p className="text-info lead adjust2">I can't wait to test this out.</p> <p><span className="glyphicon glyphicon-thumbs-up"></span> This is a testimonial window. Feedback of user can be displayed here.</p> <blockquote className="adjust2"> <p>Abhijit Goswami</p> <small><cite title="Source Title"><i className="glyphicon glyphicon-globe"></i> www.example2.com</cite></small> </blockquote> </div> </div> </div> </div> </div> </div> <div className="item"> <div className="row"> <div className="col-xs-12"> <div className="thumbnail adjust1"> <div className="col-md-2 col-sm-2 col-xs-12"> <img className="media-object img-rounded img-responsive" src="http://placehold.it/100"/> </div> <div className="col-md-10 col-sm-10 col-xs-12"> <div className="caption"> <p className="text-info lead adjust2">I can't wait to test this out.</p> <p><span className="glyphicon glyphicon-thumbs-up"></span> This is a testimonial window. Feedback of user can be displayed here.</p> <blockquote className="adjust2"> <p>Abhijit Goswami</p> <small><cite title="Source Title"><i className="glyphicon glyphicon-globe"></i> www.example3.com</cite></small> </blockquote> </div> </div> </div> </div> </div> </div> </div> <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left"></span> </a> <a className="right carousel-control" href="#carousel-example-generic" data-slide="next"> <span className="glyphicon glyphicon-chevron-right"></span> </a> </div> </div>



        </div>


    )
}

export default Carousel2