import React from "react"

class Navigation extends React.Component {
    render() {
        return (
            <div id="develuga-navi" className="dvg-navi">
                <div className="dvg-navi__wrap">
                    <div className="dvg-navi__dimmed"></div>
                    <div className="dvg-navi__container">
                        <a href="#develuga-visual" className="dvg-navi__anchor">Home</a>
                        <a href="#develuga" className="dvg-navi__anchor">About Me</a>
                        <a href="#develuga" className="dvg-navi__anchor">Portfolio</a>
                        <a href="#develuga" className="dvg-navi__anchor">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;