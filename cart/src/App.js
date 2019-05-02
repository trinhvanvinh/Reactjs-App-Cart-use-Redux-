import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Message from './components/Message';

class App extends Component  {
  render(){
    return (
      <div>
        <Header/>
        <main id="mainContainer" >
          <div className='container' >
              <Products/>
              <Message/>
              <Cart/>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App;
