import "./style/index.scss";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
    <App />
);

if (process.env.NODE_ENV === "production") {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("service-worker.js").then(registration => {
                console.log("SW registered: ", registration);
            }).catch(registrationError => {
                console.log("SW registration failed: ", registrationError);
            });
        });
    }
}