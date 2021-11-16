import { AiFillHeart } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../_assets/dev-world-logo-1.png";
const Header = (props) => {
  return (
    <header>
      <div className="site-brand">
        <img className="site-brand-logo" src={Logo} alt="Dev-World Logo" />
      </div>
      <div className="header-icons">
        <div className="icon-container">
          <AiFillHeart
            className="icons"
            onMouseEnter={props.favoritesHover}
            onMouseLeave={props.favoritesNotHover}
          />
          <span className="tooltip" style={props.favoritesTool}>
            Favorites
          </span>
        </div>
        <div className="icon-container">
          <BsFillGearFill
            className="icons"
            onMouseEnter={props.settingsHover}
            onMouseLeave={props.settingsNotHover}
          />
          <span className="tooltip" style={props.settingsTool}>
            Settings
          </span>
        </div>
        <div className="icon-container">
          <FaUserCircle
            className="icons"
            onMouseEnter={props.accountHover}
            onMouseLeave={props.accountNotHover}
            onClick={props.accountClick}
          />
          <span className="tooltip" style={props.accountTool}>
            Account
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
