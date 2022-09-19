import Navbar from './components/Navbar';
import Hub from './components/Hub';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Cart from './components/Cart';
import Customerdata from './components/Customerdata';
import Cardata from './hooks/Cardata';
import Cartdata from './hooks/Cartdata';
import Deletecart from './hooks/Deletecart';
function App() {
  const { cars } = Cardata;
  const { cartItem} = Cartdata;
  const {deleteitem}= Deletecart;
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
        <Hub cars={cars}></Hub>
        <Cart cartItem={cartItem} deleteitem={deleteitem}></Cart>
        <Customerdata />
      <Cardata cars={cars}/>
      <Cartdata cartItem={cartItem}></Cartdata>
    </div>
  );
}

export default App;
