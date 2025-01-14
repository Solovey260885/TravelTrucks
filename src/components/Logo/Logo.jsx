import { Link } from "react-router-dom";
import Icon from "../Icon/Icon.jsx";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <Icon
          id="icon-TravelTrucksLogo"
          width="136"
          height="16"
          className={css.logo}
        ></Icon>
      </Link>
    </div>
  );
};

export default Logo;
