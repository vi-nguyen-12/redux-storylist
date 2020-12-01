import React from "react";
import store from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StoryList from "components/StoryList";
import Pages from "components/Pages";
import Heading from "components/Heading";
import StoryDetail from "components/StoryDetail";
import Author from "components/Author";
import { GlobalStyle } from "./Styles/GlobalStyle";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Heading />
        <Switch>
          <Route exact path="/" component={StoryList} />
          <Route exact path="/detail/:id" component={StoryDetail} />
          <Route exact path="/author/:name" component={Author} />
        </Switch>
        <Pages />
      </Router>
    </Provider>
  );
};

export default App;
