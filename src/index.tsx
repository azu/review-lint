import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import "./index.css";
import AlminReactContainer from "almin-react-container";
import { context } from "./AlminContext";
import registerServiceWorker from "./registerServiceWorker";

const AppContainer = AlminReactContainer.create(App, context);
ReactDOM.render(<AppContainer />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
