import React from "react";

function Header() {
  let rightNav = undefined;
  if (window.innerWidth > 992) {
    rightNav = (
      <ul id="rightHeader">
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
        <li>ABOUT</li>
        <li>TEAM</li>
        <li>CONTACT</li>
      </ul>
    );
  } else {
    rightNav = <button>MENU</button>;
  }
  return (
    <nav className="App-header">
      <div id="leftHeader">Start Bootstrap</div>
      {rightNav}
    </nav>
  );
}

export default Header;
