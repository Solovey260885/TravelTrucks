import Catalog from "../../components/Catalog/Catalog.jsx";
import Main from "../../components/Main/Main.jsx";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <Main className={css.catalog_page}>
      <aside>
        <h2>aside</h2>
      </aside>
      <section>
        <Catalog />
      </section>
    </Main>
  );
};
export default CatalogPage;
