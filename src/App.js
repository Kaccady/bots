import React from "react";
import graph from "./layers/Graph/Graph.png";
import menuIcon from './layers/Title_bar/menu_icon.png';
import refresh from './layers/Title_bar/refresh.png';
import coinIco from './layers/balance/coin.png';

function App() {
  return (
    <div className="App">
      <div className="first-set">
        <div className="title-bar">
          <img src={menuIcon} alt='menu-icon' className="menu-icon" />
          <a className="head-text">
            <p>dashboard</p>
          </a>
          <img src={refresh} alt='refresh' className="refresh" />
        </div>
        <div className="balance">
          <p className="balance-text">TRADING CAPITAL</p>
          <div className="balance-lower">
            <p className="balance-capital">1.00865 BTC</p>
            <div className="balance-lower-right">
              <div className="balance-lower-right-low">
                <p className="balance-text">balance:</p>
                <p className="balance-text-quantity">10 840</p>
                <img src={coinIco} className="coin-ico" />
              </div>
              <div className="balance-lower-right-low">
                <p className="balance-text">on hold:</p>
                <p className="balance-text-quantity">24 000</p>
                <img src={coinIco} className="coin-ico" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="graph" alt='graph' src={graph} />
    </div>
  );
}

export default App;
