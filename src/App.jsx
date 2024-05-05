import Cart from "./components/Cart/Cart";
import Provider from "./components/Context/Provider";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";



function App() {
  return (

    <Provider>  
      <Header />
      <Products /> 
      <Cart />
    </Provider>
  );
}

export default App;
