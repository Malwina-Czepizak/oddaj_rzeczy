import React from 'react';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from "react-router-dom";

import Home from "./layouts/Home";
import Form from "./layouts/Form";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import Logout from "./layouts/Logout";
import NotFound from "./layouts/NotFound";

function App() {
  return (
      <HashRouter>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/oddaj-rzeczy' component={Form} />
              <Route path='/logowanie' component={Login} />
              <Route path='/rejestracja' component={Register} />
              <Route path='/wylogowano' component={Logout} />
              <Route component={NotFound} />
          </Switch>
      </HashRouter>
  );
}

export default App;