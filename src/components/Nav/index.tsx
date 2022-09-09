import * as React from "react";

export interface NavProps { }

export class Nav extends React.Component<NavProps, {}> {

    constructor(state: any) {
        super(state);
    }

    private ToggleBotton = (
        <button className="navbar-toggler p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdSidebar" aria-controls="bdSidebar" aria-label="Toggle docs navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bi" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
            </svg>
            <span className="d-none fs-6 pe-1">Browse</span>
        </button>
    )

    private Head = (
        <a className="navbar-brand p-0 me-0 me-lg-2" href="/" aria-label="Bootstrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-block my-1" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
        </a>
    )

    render(): React.ReactNode {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top nav-bar">
                {this.ToggleBotton}
                {this.Head}
                {this.ToggleBotton}
                <div className="offcanvas-lg offcanvas-end flex-grow-1" tabIndex={-1} id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel" data-bs-scroll="true">
                    <div className="offcanvas-header px-4 pb-0">
                        <h5 className="offcanvas-title text-white" id="bdNavbarOffcanvasLabel">Bootstrap</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
                    </div>
                    <div className="offcanvas-body p-4 pt-0 p-lg-0">
                        <hr className="d-lg-none text-white-50" />
                        <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav">
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2 active" aria-current="true" href="/docs/5.2/getting-started/introduction/">Docs</a>
                            </li>
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2" href="/docs/5.2/examples/">Examples</a>
                            </li>
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2" href="https://icons.getbootstrap.com/">Icons</a>
                            </li>
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2" href="https://themes.getbootstrap.com/" target="_blank" rel="noopener">Themes</a>
                            </li>
                            <li className="nav-item col-6 col-lg-auto">
                                <a className="nav-link py-2 px-0 px-lg-2" href="https://blog.getbootstrap.com/" target="_blank" rel="noopener">Blog</a>
                            </li>
                        </ul>
                        <hr className="d-lg-none text-white-50" />
                    </div>
                </div>
            </nav>
        );
    }
}