import React from "react";
import store from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StoryList from "components/StoryList";
import Pages from "components/Pages";
import Search from "components/Search";
import StoryDetail from "components/StoryDetail";
import Author from "components/Author";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Search />
        <Switch>
          <Route exact path="/" component={StoryList} />
          <Route exact path="/detail" component={StoryDetail} />
          <Route exact path="/author" component={Author} />
        </Switch>
        <Pages />
      </Router>
    </Provider>
  );
};

export default App;
