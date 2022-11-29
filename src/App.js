import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { GlobalStyle } from './AppGlobalStyle';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/AppFooter/AppFooter';
import WeddingDay from './components/WeddingDay';
import Chile from './components/Chile';
import India from './components/India';
import Mexico from './components/Mexico';
import Aruba from './components/Aruba';



const App = () => {
  return (
    <React.Fragment>
       <Router>
       
        <Navbar/>      
       

       {/* //////////////////////////////////////////////////////////////////////// */}
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/wedding-day" component={WeddingDay}/>
           <Route path="/chile" component={Chile} />
           <Route path="/india" component={India} />
           <Route path="/mexico" component={Mexico} />
           <Route path="/aruba" component={Aruba} />
         </Switch>
       {/* //////////////////////////////////////////////////////////////////////// */}
        

       </Router>
  
    
    </React.Fragment>
  );
}

export default App;
