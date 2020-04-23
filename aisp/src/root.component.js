import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Aisp from "./aisp.component";
import AispAdd from "./aispAdd.component";
import AispList from "./aispList.component";
import { Provider } from "react-redux";

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <BrowserRouter basename="apps/aisp">
      <Switch>
          <Route exact path="/add" component={AispAdd} />
          <Route exact path="/list" component={AispList} />
          <Route path="/" component={Aisp} />
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}
