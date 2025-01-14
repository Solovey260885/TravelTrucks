import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Logo />
      <div className={css.header_nav}>
        <Navigation />
      </div>
    </header>
  );
};
export default AppBar;
