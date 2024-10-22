import React, { useState } from "react";

function SlotStarWars({ UserId }) {
    const [link, setLink] = useState(`https://casino-slot-star-wars-game.vercel.app/index.html?userid=${UserId}`)
  return (
    <div className="SlotStarWars">
      <iframe
        className="iframe-page"
        src={link}
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default SlotStarWars;
