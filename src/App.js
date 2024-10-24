import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "./Header.js";
import Menu from "./Menu.js";
import Main from "./Main.js";
import Profile from "./Profile.js";
import Games from "./Games.js";
import SlotStarWars from "./SlotStarWars.js";

function App() {
  const tg = window.Telegram.WebApp;
  const [isOpen, setIsOpen] = useState(false);
  const [checkYearsOld, setCheckYearsOld] = useState(() => {
    const savedcheckYearsOld = localStorage.getItem("checkYearsOld");
    return savedcheckYearsOld !== null ? JSON.parse(savedcheckYearsOld) : false;
  });

  const firstName = tg.initDataUnsafe.user.first_name;
  const userId = tg.initDataUnsafe.user.id;

  useEffect(() => {
    tg.expand();
  }, []);

  useEffect(() => {
    // Сохраняем значение count в localStorage при его изменении
    localStorage.setItem("checkYearsOld", checkYearsOld);
  }, [checkYearsOld]); // Зависимость от переменных, чтобы эффект срабатывал при их изменении

  const OpenMenu = () => {
    setIsOpen(true);
  };

  const CloseMenu = () => {
    setIsOpen(false);
  };

  
  return (
    <div className="App">
      <Router>
        {isOpen && checkYearsOld && (
          <Menu CloseMenu={CloseMenu} setIsOpen={setIsOpen} />
        )}
        {checkYearsOld && <Header OpenMenu={OpenMenu} />}
        <Routes>
          <Route
            path="/"
            element={
              <Main
                
                firstName={firstName}
                UserId={userId}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                
                firstName={firstName}
                UserId={userId}
              />
            }
          />
          <Route
            path="/games"
            element={
              <Games  />
            }
          />
          <Route
            path="/games/slots/star-wars"
            element={
              <SlotStarWars
                
                UserId={userId}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
