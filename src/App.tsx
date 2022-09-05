import * as React from "react";

import { Hello } from "./components/Hello";

export class App extends React.Component {
    render(): React.ReactNode {
        return <Hello compiler="TypeScript" framework="React" />;
    }
}