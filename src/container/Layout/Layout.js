import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavHeader from "../../components/Header";
import Footer from "../../components/Footer";
import Home from "../../components/Home";
import Notfound from "../../components/Notfound";
import Contact from "../../components/Contact";
import Services from "../../components/Services";
import About from "../../components/About";
import Terms from "../../components/Terms";
import Equipment from "../../components/Equipment";

const App = () => (
  <BrowserRouter>
    <div>
      <NavHeader />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/terms" component={Terms} exact={true} />
        <Route path="/services" component={Services} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/equipment" component={Equipment} exact={true} />
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
