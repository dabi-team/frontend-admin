import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import { Route, Switch } from 'react-router-dom';
import Page1 from './Pages/page1/home';
import Page2 from './Pages/page2/home';
import Page3 from './Pages/page3/home';

function App() {
  return (
    <div className="App"> 
      <Navbar/>
       <span>
              <Switch>
                  <Route path='/' exact>
                      <Page1/>
                  </Route>
                  <Route path='/Form'>
                      <Page2/>
                  </Route>
                  <Route path='/Art'>
                      <Page3/>
                  </Route>
              </Switch>
          </span> 
    </div>
  );
}

export default App;
