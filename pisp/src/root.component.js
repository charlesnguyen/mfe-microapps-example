import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Pisp from "./pisp.component";
import { Provider } from "react-redux";

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <BrowserRouter basename="apps/pisp">
        <Route path="/" component={Pisp} />
      </BrowserRouter>
    </Provider>
  );
}
