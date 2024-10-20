import "./App.css";

function Header({OpenMenu}) {
    
  return (
    <div className="Header">
          <div className="header">
              <div className="logo">Scrooge Casino</div>
              <div className="header-box" onClick={OpenMenu}><div className="header-box-menu"></div></div>
          </div>
    </div>
  );
}

export default Header;
