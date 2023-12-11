import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import OrderPlaced from './pages/OrderPlaced';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/product" Component={ProductList} />
                <Route path="/product/:id" Component={ProductDetail} />
                <Route path="/product/shopping_cart" Component={ShoppingCart} />
                <Route path="/product/checkout" Component={Checkout} />
                <Route path="/product/order_placed" Component={OrderPlaced} />
            </Routes>
        </Router>
    );
};

export default App;
