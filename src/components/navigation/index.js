import React from "react"

class Navigation extends React.Component {
  render() {
    return (
      <div id="develuga-sticky-navigation" className="dvg-sticky-navigation">
        <a href="#develuga-visual" className="dvg-sticky-navigation__anchor">Home</a>
        <a href="#develuga" className="dvg-sticky-navigation__anchor">About Me</a>
        <a href="#develuga" className="dvg-sticky-navigation__anchor">Portfolio</a>
        <a href="#develuga" className="dvg-sticky-navigation__anchor">Contact</a>
      </div>
    )
  }
}

export default Navigation;