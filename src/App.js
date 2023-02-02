import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Container from './components/container'
import Footer from './components/footer';
import Contact from './components/contact';
import Slidshow from './components/slideshow'
import {BrowserRouter,Switch,Route,Routes,Link} from "react-router-dom"
import Apropos from './components/Apropos';
import AjouterProduit from './components/AjouterProduit';
import AjouterCategories from './components/AjouterCategories';
import GererProduits from './components/Gerer-produits';
import Inscription from './components/Inscription';
import Login from './components/login';
import Logout from './components/logout';
import Modifproduit from './components/Modifproduit';
import DetailProduit from './components/DetailProduit';
import ProduitParCategorie from './components/ProduitParCategorie';
import GererCategories from './components/Gerer-categories';
import Modifcategorie from './components/Modifcategorie';
import ProduitPromo from './components/produitPromo';
import VenteFlash from './components/venteflash';
import { CartProvider } from 'react-use-cart';
import ListItemPanier from './components/listItemPanier';
import GererCommandes from './components/Gerer-commandes';
import GererAdministrateur from './components/Gerer-Administrateur';
import MesCommandes from './components/MesCommandes';
import Dashboard from './components/Dashboard';
import AllProducts from './components/allproducts';

function App() {
  return (
    
    <div className="container-fluid" style={{backgroundColor:"#ccc"}}>
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Container/>} />
        <Route path="/Contactez-nous"  element={<Contact/>} />
        <Route path="/Ajouter-Produit"  element={<AjouterProduit/>} />
        <Route path="/Ajouter-Categories"  element={<AjouterCategories/>} />
        <Route path="/a-propos"  element={<Apropos/>} />
        <Route path="/Gerer-produits"  element={<GererProduits/>} />
        <Route path="/Gerer-categories"  element={<GererCategories/>} />
        <Route path="/Gerer-commandes"  element={<GererCommandes/>} />
        <Route path="/inscription"  element={<Inscription/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/Modifproduit/:id"  element={<Modifproduit/>} />
        <Route path="/DetailProduit/:id"  element={<DetailProduit/>} />
        <Route path="/ProduitParCategorie/:id"  element={<ProduitParCategorie/>} />
        <Route path="/Modifcategorie/:id"  element={<Modifcategorie/>} />
        <Route path="/ProduitPromo/"  element={<ProduitPromo/>} />
        <Route path="/venteflash/"  element={<VenteFlash/>} />
        <Route path="/panier/"  element={<ListItemPanier/>} />
        <Route path="/Gerer-Administrateur/"  element={<GererAdministrateur/>} />
        <Route path="/MesCommandes/"  element={<MesCommandes/>} />
        <Route path="/Dashboard/"  element={<Dashboard/>} />
        <Route path="/Allproducts/"  element={<AllProducts/>} />
        
      </Routes>
      {/* <Container /> */}
      <Footer />
    </CartProvider>
    </div>

  );
}

export default App;
