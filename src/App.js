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
  const [newBalance, setNewBalance] = useState(7345.36);
  const [checkYearsOld, setCheckYearsOld] = useState(() => {
    const savedcheckYearsOld = localStorage.getItem("checkYearsOld");
    return savedcheckYearsOld !== null ? JSON.parse(savedcheckYearsOld) : false;
  });

  const firstName = tg.initDataUnsafe.user.first_name;
  const UserId = tg.initDataUnsafe.user.id;
  const location = useLocation();

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

  // Проверяем, начинается ли текущий путь с /games
  const isGamesRoute = location.pathname.startsWith("/games/");
  return (
    <div className="App">
      <Router>
        {isOpen && checkYearsOld && (
          <Menu CloseMenu={CloseMenu} setIsOpen={setIsOpen} />
        )}
        {checkYearsOld && !isGamesRoute && <Header OpenMenu={OpenMenu} />}
        <Routes>
          <Route
            path="/"
            element={
              <Main
                newBalance={newBalance}
                setNewBalance={setNewBalance}
                firstName={firstName}
                UserId={UserId}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                newBalance={newBalance}
                setNewBalance={setNewBalance}
                firstName={firstName}
                UserId={UserId}
              />
            }
          />
          <Route
            path="/games"
            element={
              <Games newBalance={newBalance} setNewBalance={setNewBalance} />
            }
          />
          <Route
            path="/games/slots/star-wars"
            element={
              <SlotStarWars
                newBalance={newBalance}
                setNewBalance={setNewBalance}
                UserId={UserId}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
