import React from "react";
import store from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Author, StoryList,Story} from "pages";
import PagedList from "components/PagedList";
import {Heading} from "components";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
          <Heading />
          <Switch>
            <Route exact path="/" component={StoryList} />
            <Route exact path="/detail/:id" component={Story} />
            <Route exact path="/author/:name" component={Author} />
          </Switch>
          <PagedList />
      </Router>
    </Provider>
  );
};

export default App;
