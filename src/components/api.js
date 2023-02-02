import React, { useEffect, useState } from "react";
import '../App.css';
// class Api extends React.Component {

// 	// Constructor
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			items: [],
// 			DataisLoaded: false
// 		};
// 	}

// 	// ComponentDidMount is used to
// 	// execute the code
// 	componentDidMount() {
// 		fetch("http://localhost:5000/produits/", {
//     method: "GET",mode: 'no-cors'})
// 			.then((res) => res.json())
// 			.then((data) => {
// 				this.setState({
// 					items: data,
// 					DataisLoaded: true
// 				});
// 			})
// 	}
// 	render() {
// 		const { DataisLoaded, items } = this.state;
// 		if (!DataisLoaded) 
//         return <div>
// 			<h1> Pleses wait some time.... </h1> 
//             </div> ;

// 		return (
// 		<div className = "App">
// 			<h1> Fetch data from an api in react </h1> {
// 				items.map((item) => (
// 				<ol key = { item.id } >
// 					Produit: { item.titre },
// 					Description: { item.description },
// 					Taille: { item.taille },
//                     Couleur : {item.coleur},
//                     Prix : { item.prix}
// 					</ol>
// 				))
// 			}
// 		</div>
// 	);
// }
// }

import axios from 'axios'

const Produits = () => {
 const [data, setData] = useState ([])
 
 const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  
 useEffect( ()=> {
     axios.get("http://localhost:5000/produits",config)
     .then((res)=>setData(res.data))
 },[])

 return (
     <div>
        {data.map( (produits) => (
            <ul key={produits.titre}>
                     <h3  className="alert alert-info">
                            {produits.titre}
                    </h3>
                    <li  className="alert alert-info">
                            {produits.description}
                    </li>
                    <li  className="alert alert-warning">
                            {produits.couleur}
                    </li>
                    <li  className="alert alert-info">
                            {produits.prix}
                    </li>
                    <li  className="alert alert-danger">
                            {produits.createdAt}
                    </li>
             </ul>
))}
    </div>
 )
} 

export default Produits;
