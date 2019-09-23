import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { BrowserRouter, Route } from "react-router-dom";

import { About } from "./About";
import { Info } from "./Info";
import { Home } from "./Home";
import { Users } from "./Users";

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users/abc">Users: abc</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
      <Route path="/info" component={Info} />
    </div>
  </BrowserRouter>
);


export default App;
