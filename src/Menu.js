import "./App.css";
import { useNavigate } from "react-router-dom";

function Menu({ CloseMenu, setIsOpen }) {
  //const tg = window.Telegram.WebApp;
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setIsOpen(false);
    navigate("/");
  };

  const handleProfileClick = () => {
    setIsOpen(false);
    navigate("/profile");
  };

  const handleGamesClick = () => {
    setIsOpen(false);
    navigate("/games");
  };

  return (
    <div className="Menu">
      <div className="menu">
        <div className="close" onClick={CloseMenu}></div>
        <div className="menu-catalog">
          <div className="menu-catalog-item" onClick={handleHomeClick}>
            <div className="menu-catalog-text">
              <span className="menu-catalog-icon main-icon">.....</span>Главная
            </div>
          </div>
          <div className="menu-catalog-item" onClick={handleProfileClick}>
            <div className="menu-catalog-text">
              <span className="menu-catalog-icon profile-icon">.....</span>
              Профиль
            </div>
          </div>
          <div className="menu-catalog-item" onClick={handleGamesClick}>
            <div className="menu-catalog-text">
              <span className="menu-catalog-icon games-icon">.....</span>Игры
            </div>
          </div>
          <div className="menu-catalog-item">
            <div className="menu-catalog-text">
              <span className="menu-catalog-icon info-icon">.....</span>
              Информация
            </div>
          </div>
          <div className="menu-catalog-item">
            <div className="menu-catalog-text">
              <span className="menu-catalog-icon news-icon">.....</span>
              Новости
            </div>
          </div>
          <div className="menu-catalog-item">
            <div className="menu-catalog-text">
              <span className="menu-catalog-icon techhelp-icon">.....</span>
              Техподдержка
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
