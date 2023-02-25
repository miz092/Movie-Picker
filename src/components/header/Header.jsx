import "./Header.css";
import Logo from "../../assets/logo.png";
function Header() {
  return (
    <div className="moviePicker__header">
      <div className="moviePicker__header-links_logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
