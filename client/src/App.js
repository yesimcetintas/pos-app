import { BrowserRouter, Route, Routes } from "react-router-dom";
import BillPage from "./pages/BillPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/cart" element={<CartPage/>}/> 
        <Route path="/bills" element={<BillPage/>}/>  
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
