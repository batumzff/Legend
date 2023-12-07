import React, { useState } from "react";
import { data } from "../helper/data";
import Top from "../img/TOP.webp";

export const PlayerCard = ({ searchInput }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleClick = (item) => {
    if (selectedPlayer === item) {
      setSelectedPlayer(null);
    } else {
      setSelectedPlayer(item);
    }
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div className="card-container">
      <div className="card">
        {filteredData.map((item, index) => {
          return (
            <div
              className={`player-card ${
                selectedPlayer === item ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleClick(item)}
            >
              <div className="player-img">
                <img src={item.img} alt="img" style={{display: selectedPlayer === item ?"none":"block" }}/>
                <h2>{item.name}</h2>
                {selectedPlayer === item && (
                  <div className="stat">
                    <div className="stat1">
                      <img
                        src={Top}
                        alt=""
                        style={{ width: "25px", height: "25px" }}
                      />
                      <p>{item.statistics[0]}</p>
                    </div>
                    <div className="stat1">
                      <img
                        src={Top}
                        alt=""
                        style={{ width: "25px", height: "25px" }}
                      />
                      <p>{item.statistics[1]}</p>
                    </div>
                    <div className="stat1">
                      <img
                        src={Top}
                        alt=""
                        style={{ width: "25px", height: "25px" }}
                      />
                      <p>{item.statistics[2]}</p>
                    </div>
                    <div className="stat1">
                      <img
                        src={Top}
                        alt=""
                        style={{ width: "25px", height: "25px" }}
                      />
                      <p>{item.statistics[3]}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerCard;
