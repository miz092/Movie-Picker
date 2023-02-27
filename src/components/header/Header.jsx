import "./Header.css";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <div className="moviePicker__header">
      <div className="moviePicker__header-links_logo">
        <img onClick={handleClick} src={Logo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
