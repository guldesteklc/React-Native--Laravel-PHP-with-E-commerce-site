import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";
import Ayrıntılar from "./Ayrıntılar";

 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route index element={<ProductList />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/search" element={<SearchProduct />} />
          <Route path="/" element={<Protected Cmp={ProductList} />} />
          <Route path="/ayrıntı/:id" element={<Protected Cmp={Ayrıntılar} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
