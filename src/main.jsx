import React from 'react';
import ReactDOM from 'react-dom/client';


import { Delivery } from './pages/Delivery';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

//Adicionar react-router-dom - Para navegação
//Otimizar o uso do React-Hook-Form nos input existents
//Criar todo a regra de negócio e funcionalidades solicitadas.
//Resolvers e validators - YUP / ZOD

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cart/>
  </React.StrictMode>
)
