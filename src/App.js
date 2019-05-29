import React, { useState, useEffect } from "react";
import graph from "./layers/Graph/Graph.png";
import menuIcon from "./layers/Title_bar/menu_icon.png";
import refresh from "./layers/Title_bar/refresh.png";
import coinIco from "./layers/balance/coin.png";
import robotsData from "./data.min.json";
import orange_bot from "./layers/Bots/orange.png";
import yellow_bot from "./layers/Bots/yellow.png";
import green_bot from "./layers/Bots/green.png";
import red_bot from "./layers/Bots/red.png";
import blue_bot from "./layers/Bots/blue.png";
import empty from "./layers/Bots/empty.png";

const BotSetter = name => {
  switch (name) {
    case "orange_bot":
      return { img: orange_bot, type: "ATTACK" };
    case "yellow_bot":
      return { img: yellow_bot, type: "MEGABOT" };
    case "blue_bot":
      return { img: blue_bot, type: "BALANCE" };
    case "green_bot":
      return { img: green_bot, type: "DEFENCE" };
    case "red_bot":
      return { img: red_bot, type: "ATTACK" };
    default:
      return { img: empty, type: "PLACE BOT HERE" };
  }
};

const Box = ({ bot, time }) => {
  let info = BotSetter(bot.name)
    ? BotSetter(bot.name)
    : { img: "none", type: "none" };
  let isPositive = bot[time] ? "positive" : "negative";
  console.log(isPositive);
  return (
    <div className={"box " + bot.name}>
      <img className="bot" src={info.img} alt="bot" />
      <p className={info.type + " bot-type"}>{info.type}</p>
      <p className={info.type + `non percent `+isPositive}>{bot[time] + "%"}</p>
    </div>
  );
};
function App() {
  const [data, setData] = useState(0);
  const [timeInterval, setTimeInterval] = useState("all_time");

  useEffect(() => {
    if (data === 0) {
      setData(robotsData);
    }
  });
  if (data === 0) {
    return <p className="balance-capital">Loading...</p>;
  }
  return (
    <div className="App">
      <div className="first-set">
        <div className="title-bar">
          <img src={menuIcon} alt="menu-icon" className="menu-icon" />
          <p className="head-text">dashboard</p>
          <img src={refresh} alt="refresh" className="refresh" />
        </div>
        <div className="balance">
          <p className="balance-text">TRADING CAPITAL</p>
          <div className="balance-lower">
            <p className="balance-capital">
              {data.trading_capital +
                " " +
                data.trading_capital_currency.toUpperCase()}
            </p>
            <div className="balance-lower-right">
              <div className="balance-lower-right-low">
                <p className="balance-text">balance:</p>
                <p className="balance-text-quantity">
                  {data.balance
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ")}
                </p>
                <img src={coinIco} alt="coin-ico" className="coin-ico" />
              </div>
              <div className="balance-lower-right-low">
                <p className="balance-text">on hold:</p>
                <p className="balance-text-quantity">
                  {data.on_hold
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ")}
                </p>
                <img src={coinIco} alt="coin-ico" className="coin-ico" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="graph" alt="graph" src={graph} />
      <div className="second-set">
        <div className="boxes">
          {robotsData.bots.map(item => (
            <Box key={item.name} bot={item} time={timeInterval} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
