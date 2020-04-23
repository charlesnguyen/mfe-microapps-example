import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import root from "./root.component.js";
import aispReducer from "./aisp.reducer";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: root,
  //loadRootComponent: () =>
  //  import(/* webpackChunkName: "aisp-app" */ "./root.component.js").then(
  //    property("default")
  //  ),
  domElementGetter
});

export function bootstrap(props) {
  const store = props.store;
  store.injectReducer("aisp", aispReducer); //inject Reducer dynamically
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props);
}

export const unmount = [reactLifecycles.unmount];

export const unload = [reactLifecycles.unload];

function domElementGetter() {
  let el = document.getElementById("aisp");
  if (!el) {
    el = document.createElement("div");
    el.id = "aisp";
    const contentDiv = document.getElementById("content");
    if (contentDiv) {
      contentDiv.appendChild(el);
    } else {
      document.body.appendChild(el);
    }
  }

  return el;
}
