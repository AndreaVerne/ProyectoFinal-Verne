//import { useState } from 'react'
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import "./App.scss";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import CheckoutHook from "./components/CheckoutHook";
import Contact from "./components/Contact";



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer saludo="Nuestros productos" />
            }
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer saludo="Estás en la categoría: " />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutHook />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={<ErrorPage message="Lo siento, esa página no existe!" />}
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
