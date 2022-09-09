import * as React from "react";

export interface MainProps { }

export class Main extends React.Component<MainProps, {}> {
    render(): React.ReactNode {
        return (
            <main className="bg-light mb-4 container clearfix">
            </main>
        );
    }
}