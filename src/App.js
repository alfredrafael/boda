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
           <Route path="/:countryName" children={<Country />} />

         </Switch>
       {/* //////////////////////////////////////////////////////////////////////// */}
        

       </Router>
  
    
    </React.Fragment>
  );
}

export default App;
