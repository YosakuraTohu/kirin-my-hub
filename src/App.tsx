import * as React from "react";

import { Main } from "./components/main";
import { Nav } from "./components/Nav";
import { Aside } from "./components/aside";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export class App extends React.Component {
    render(): React.ReactNode {
        return(
            <>
                <Nav />
                <Aside />
                <Header />
                <Main />
                <Footer />
            </>
        );
    }
}