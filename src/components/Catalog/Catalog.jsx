import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/slice.js";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";

// import css from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {items.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default Catalog;
