import Button from "../../components/Button/Button.jsx";
import Main from "../../components/Main/Main.jsx";
import css from "./HomePage.module.css";

const Home = () => {
  return (
    <Main>
      <div className={css.hero}>
        <div className={css.hero_info}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <Button className={css.btn}>View Now</Button>
        </div>
      </div>
    </Main>
  );
};
export default Home;
