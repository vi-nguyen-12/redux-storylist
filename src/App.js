import React, {useEffect} from "react";
import store from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {AuthorPage, HomePage,StoryPage,AboutPage, ContactPage,LoginPage, ProfilePage} from "pages";
import {Heading} from "components";
import { GlobalStyle } from "./GlobalStyle";
import firebase from 'firebase';


// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
};
firebase.initializeApp(config);


const App = () => {
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      if(!user){
        //user logs out, handle sth here
        console.log('User is not logged in')
        return
      }
      console.log('Logged in user:', user.displayName);
      const token=await user.getIdToken();
      console.log("Logged in user:", token)
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
          <Heading />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search/:query" component={HomePage} />
            <Route exact path="/page/:page" component={HomePage} />
            <Route exact path="/search/:query/page/:page" component={HomePage} />
  
            <Route exact path="/story/:id" component={StoryPage} />
            <Route exact path="/author/:name" component={AuthorPage} />

            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/profile" component={ProfilePage} />

          </Switch>
      </Router>
    </Provider>
  );
};

export default App;
