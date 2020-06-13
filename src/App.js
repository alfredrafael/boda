import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { GlobalStyle } from './AppGlobalStyle';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/AppFooter/AppFooter';
import FetchingCountries from './components/FetchingCountries';
import Country from './components/Country';
import WeddingDay from './components/WeddingDay';
import Chile from './components/Chile';
import India from './components/India';


const App = () => {
  return (
    <React.Fragment>
       <Router>
       
        <Navbar/>      
       

       {/* //////////////////////////////////////////////////////////////////////// */}
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/wedding-day" component={WeddingDay}/>
           <Route path="/countries" component={FetchingCountries}/>
           <Route path="/chile" component={Chile} />
           <Route path="/india" component={India} />
         </Switch>
       {/* //////////////////////////////////////////////////////////////////////// */}
        

       </Router>
  
    
    </React.Fragment>
  );
}

export default App;
