import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/cart" element={<CartPage/>}/>  
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
