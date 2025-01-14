import AppBar from "../AppBar/AppBar.jsx";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
};
export default Layout;
