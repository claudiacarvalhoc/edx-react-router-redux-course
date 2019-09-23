import React from "react";
// import { render } from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { About } from "./About";
import { Info } from "./Info";
import { Home } from "./Home";
import { Users } from "./Users";

const DefaultRoute = () => <div>Default Route</div>;
const AllUsers = () => {
  return (
    <div>
      Show All Users:
      <ul>
        <li>anne</li>
        <li>peter</li>
        <li>alice</li>
      </ul>
    </div>
  );
};

/*
Switch
The Switch component contains several Route components and will exclusively render the first route
that is a match. Without a Switch component, multiple Routes may be rendered if multiple matches are detected.

Default Route
It is a common practice to have the last Route within a Switch component be a route that always renders.
This way, you can display a default component if all other routes fail.
*/

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
          <Link to="/users/anne">Users: abc</Link>
        </li>
        <li>
          <Link to="/users/allUsers">Show All Users</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/about" component={Info} />
        <Route path="/users/allUsers" component={AllUsers} />
        <Route path="/users/:id" component={Users} />
        <Route component={DefaultRoute} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
