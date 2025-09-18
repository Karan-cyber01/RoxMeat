import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-slideshow-image/dist/styles.css'
import NavBar from './customcomponents/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Home from './pages/home';
import AboutPage from './pages/AboutPage';
import ProductDetail from './pages/about';
import Cart from './pages/cart';
import Recipe from './pages/recipe';
import RecipeDetail from './pages/recipeDetail';
import Contact from './pages/contact';
import Shop from './pages/shop';
import Checkout from './pages/checkout';
import BuyNow from './pages/buynow';
import Checkout1 from './pages/checkout1';
import Pay from './customcomponents/pay';
import Thanks from './pages/thanks';



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/product/:id" component={ProductDetail} >
          <ProductDetail />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route exact path="/cart/:id" component={RecipeDetail}>
          <RecipeDetail />
        </Route>
        <Route exact path="/information" component={Checkout}>
          <Checkout />
        </Route>
        <Route path="/recipe/" exact>
          <Recipe />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/shop" exact>
          <Shop/>
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/thanks" exact>
          <Thanks />
        </Route>
        <Route path="/buynow" exact>
          <BuyNow />
        </Route>
        <Route path="/checkout1" exact>
          <Checkout1 />
        </Route>
        <Route path="/pay" exact>
          <Pay/>
        </Route>
      </Switch>

    </Router >
  );
}

export default App;
