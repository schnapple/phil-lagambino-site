import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./containers/Home/Home";
import AOS from "aos";
import * as fetchData from "./store/actions/fetchData";
import * as auth from "./store/actions/auth";
import "aos/dist/aos.css";

const App = () => {
  AOS.init();
  const dispatch = useDispatch();
  const root = document.documentElement;
  const [isLoading, setIsLoading] = useState(false);
  root.style.setProperty("--primary", "#293241");
  root.style.setProperty("--secondary", "#ee6c4d");
  root.style.setProperty("--traid", "#293241");
  root.style.setProperty("--alternate", "#97C9D8");
  root.style.setProperty("--backgroundTwo", "#3d5a80");

  useEffect(() => {
    setIsLoading(true);
    dispatch(auth.login()).then(() => {
      dispatch(fetchData.fetchAllData()).then(() => {
        setIsLoading(false);
      });
    });
  }, [dispatch]);

  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

export default App;
