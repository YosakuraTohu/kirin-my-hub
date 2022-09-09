import * as React from "react";

export interface HeaderProps { }

export class Header extends React.Component<HeaderProps, {}> {
    render(): React.ReactNode {
        return (
            <header className="lazy loaded" id="header" data-ll-status="loaded">
                <div className="header-text d-flex justify-content-center align-items-center flex-column">
                    <p id="heading" className="mt-5 h1 text-white">Kirin My Hub</p>
                    <p id="subheading" className="mt-3 h5 text-white d-flex"> 分かっているよ。ありがとう。感謝してるそして。いつの日か、また会えたらいいなと思う。 </p>
                    </div>
            </header>
        );
    }
}