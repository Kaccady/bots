import React from "react";

function App() {
  return (
    <div className="App">
      <div className="title-bar">
        <a className="menu-icon" />
        <a className="balance-text">
          <p>dashboard</p>
        </a>
        <a className="refresh" />
      </div>
      <div className="balance">
        <p className="balance-text">TRADING CAPITAL</p>
        <div className="balance-lower">
          <p className="balance-capital">1.00865 BTC</p>
          <div className="balance-lower-right">
            <div className="balance-lower-right-low">
              <p className="balance-text">balance:</p>
              <p className="balance-text-quantity">10 840</p>
              <div className="coin-ico" />
            </div>
            <div className="balance-lower-right-low">
              <p className="balance-text">on hold:</p>
              <p className="balance-text-quantity">24 000</p>
              <div className="coin-ico" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
