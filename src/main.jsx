import React from 'react';
import ReactDOM from 'react-dom/client';

import { Delivery } from './pages/Delivery';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

/*
- Listagem de produtos (cafés) disponíveis para compra [X]
- Adicionar uma quantidade específicas de itens no carrinho [X]
- Aumentar ou remover a quantidade de itens no carrinho
- Formulário para o usuário preencher o seu endereço
- Exibir o total de itens no carrinho no Header
- Exibir o valor total da soma de itens no carrinho multiplicados pelo valor

- Fazer o BodyShape com margins, para quando reduzir a tela não fica tudo zoado
- olhar descrição do coffee card, está quebrando o card [X]
- Adicionar react-router-dom - Para navegação
- Otimizar o uso do React-Hook-Form nos input existents
- Criar todo a regra de negócio e funcionalidades solicitadas.
- Resolvers e validators - YUP / ZOD 
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
)
