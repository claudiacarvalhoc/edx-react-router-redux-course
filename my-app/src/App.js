import React from "react";
// import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { About } from "./About";
import { Info } from "./Info";
import { Home } from "./Home";
import { Users } from "./Users";

const App = () => (
  <div>
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
      <Route path="/info" component={Info} />
    </div>
  </BrowserRouter>
  </div>
);


export default App;
