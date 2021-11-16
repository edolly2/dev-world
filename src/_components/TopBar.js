import { AiOutlineSearch } from "react-icons/ai";
const TopBar = (props) => {
  return (
    <div className="topbar-container">
      <nav>
        <ul>
          <li>Newest</li>
          <li>Popular</li>
          <li>Activity</li>
          <li>Favorited</li>
          <div className="search-icon-container">
            <div className="icon-container">
              <AiOutlineSearch
                className="icons"
                onMouseEnter={props.searchHover}
                onMouseLeave={props.searchNotHover}
                onClick={props.searchClick}
              />
              <span className="tooltip" style={props.searchTool}>
                Search
              </span>
            </div>
            <input
              className="search-input"
              type="text"
              id="search-input"
              style={props.inputStyle}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default TopBar;
