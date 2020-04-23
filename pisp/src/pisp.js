import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import root from "./root.component.js";
import pispReducer from "./pisp.reducer";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: root,
  domElementGetter
});


export function bootstrap(props) {
  const store = props.store;
  store.injectReducer("pisp", pispReducer); //inject Reducer dynamically
  return reactLifecycles.bootstrap(props);
}

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

export const unload = [reactLifecycles.unload];

function domElementGetter() {
  let el = document.getElementById("pisp");
  if (!el) {
    el = document.createElement("div");
    el.id = "pisp";
    const contentDiv = document.getElementById("content");
    if (contentDiv) {
      contentDiv.appendChild(el);
    } else {
      document.body.appendChild(el);
    }
  }

  return el;
}
