import logo from './logo.svg';
import '../src/Components/Css/navbar.css';
import React from 'react';
import NavbarBlog from './Components/navBar';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Footer from './Components/footer';
import ContactUS from './Components/contactus';
import Home from './Components/home';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>

        <NavbarBlog/>
        <Switch>
          <Route exact path="/products">
          </Route>
          <Route path="/home" component={Home}/>
          <Route path="/technology"/>
          <Route path="/lifestyle"/>
          <Route path="/food" />
          <Route path="/features" />
          <Route path="/tag-archive" />
          <Route path="/aboutus"/>
          <Route path="/products/:id"/>
          <Route path="/contactus" component={ContactUS} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
