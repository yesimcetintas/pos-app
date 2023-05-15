import { BrowserRouter, Route, Routes } from "react-router-dom";
import BillPage from "./pages/BillPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CustomerPage from "./pages/CustomerPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import StatisticPage from "./pages/StatisticPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/cart" element={<CartPage/>}/> 
        <Route path="/bills" element={<BillPage/>}/>  
        <Route path="/customers" element={<CustomerPage/>}/>  
        <Route path="/statistic" element={<StatisticPage/>}/>  
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
