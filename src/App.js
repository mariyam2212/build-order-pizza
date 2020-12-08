import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import PizzaBuilder from './PizzaBuilder/PizzaBuilder/PizzaBuilder';
import back from './assets/pizzaImg.jpg';
import Styled from 'styled-components';
import {Route} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

const Appdiv = Styled.div`
    text-align: center;
    background-position: center;
    background-size: cover;
    width:100%;
    height:100%;
    position:fixed;
    background-image:url(${back})
    `;

function App() {
  return (
    <Appdiv>
      <Layout>
        <Route path="/" exact component={PizzaBuilder}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/checkout" component={Checkout}/>
      </Layout>
    </Appdiv>
  );
}

export default App;
