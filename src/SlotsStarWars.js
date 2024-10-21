import React from "react";
import "./SlotsStarWars.css"; // Подключите стили, если они есть
import "./SlotsStarWars/Reel.js"
import "./SlotsStarWars/Slot.js";
import "./SlotsStarWars/Symbol.js";
import "./SlotsStarWars/index.js";
import "./SlotsStarWars.css"
import "bootstrap/dist/css/bootstrap-reboot.min.css";
const SlotsStarWars = () => {
  return (
    <div id="slot">
      <div id="reels">
        <div className="reel"></div>
        <div className="reel"></div>
        <div className="reel"></div>
        <div className="reel"></div>
        <div className="reel"></div>
      </div>
      <div id="controls">
        <label className="autoplay">
          <input type="checkbox" name="autoplay" id="autoplay" />
          Autoplay
        </label>
        <button type="button" id="spin">
          SPIN
        </button>
      </div>
    </div>
  );
};

export default SlotsStarWars;
