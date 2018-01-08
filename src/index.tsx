import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import AlminReactContainer from "almin-react-container";
import { context } from "./AlminContext";

const AppContainer = AlminReactContainer.create(App, context);
ReactDOM.render(<AppContainer />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
