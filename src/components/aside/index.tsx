import * as React from "react";

export interface AsideProps { }

export class Aside extends React.Component<AsideProps, {}> {
    render(): React.ReactNode {
        return (
            <aside className="bd-sidebar">
                <div className="offcanvas-lg offcanvas-start show" tabIndex={-1} id="bdSidebar" aria-labelledby="bdSidebarOffcanvasLabel" aria-modal="true" role="dialog">
                    <div className="offcanvas-header border-bottom">
                        <h5 className="offcanvas-title" id="bdSidebarOffcanvasLabel">Browse docs</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdSidebar"></button>
                    </div>
                    <div className="offcanvas-header">
                        <div className="text-center px-3 bd-links w-100">
                            <a href="/" className="aside-avatar">
                                <img src="img/favicon@512x512.png" />
                            </a>
                            <p className="font-weight-bold mt-3">Kirin My Hub</p>
                            <p className="small">分かっているよ。ありがとう。感謝してるそして。いつの日か、また会えたらいいなと思う。</p>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}