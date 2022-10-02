import { Routes, Route } from 'react-router-dom'

import { Delivery } from './pages/Delivery';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

export function Router() {
    return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
      </Routes>
    )
  }