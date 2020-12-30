import React from "react";
import store from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Author, Home,Story} from "pages";
import {Heading} from "components";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
          <Heading />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/story/:id" component={Story} />
            <Route exact path="/author/:name" component={Author} />
          </Switch>
      </Router>
    </Provider>
  );
};

export default App;
