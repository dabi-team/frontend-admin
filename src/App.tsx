import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import { Route, Switch } from 'react-router-dom';
import Page1 from './Pages/Discover/home';
import Page2 from './Pages/Categories/home';
import Page3 from './Pages/page3/home';

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <div className='m-24'></div>
       <span>
              <Switch> 
                  <Route path='/' exact>
                      <Page1/>
                  </Route>
                  <Route path='/Categories'>
                      <Page2/>
                  </Route>
                  <Route path='/Art'>
                      <Page3/>
                  </Route>
                  <Route path='/Cart'>
                      <Page3/>
                  </Route>
                  <Route path='/Account'>
                      <Page3/>
                  </Route>
              </Switch>
          </span> 
    </div>
  );
}

export default App;
