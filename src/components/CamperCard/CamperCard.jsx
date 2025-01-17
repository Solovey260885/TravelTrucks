import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";

import css from "./CamperCard.module.css";
import CamperOptions from "../CamperOptions/CamperOptions.jsx";
import Icon from "../Icon/Icon.jsx";

const CamperCard = ({ camper }) => {
  const {
    name,
    price,
    location,
    rating,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camper;

  const options = {
    transmission,
    engine,
    AC,
    Bathroom: bathroom,
    Kitchen: kitchen,
    TV,
    Radio: radio,
    Refrigerator: refrigerator,
    Microwave: microwave,
    Gas: gas,
    Water: water,
  };

  return (
    <div className="camper-card">
      <img src={camper.gallery[0]?.thumb} alt={camper.name} />
      <h3>{camper.name}</h3>
      <p>€{camper.price.toFixed(2)}</p>
      <Icon id="icon-like" width="16" height="16" />
      <Icon id="icon-favorites" width="16" height="16" />
      {camper.rating} (`{camper.reviews.length} Reviews`)
      <Icon id="icon-Map" width="16" height="16" />
      <p>
        {(() => {
          const [country, city] = camper.location.split(", ");
          return `${city}, ${country}`;
        })()}
      </p>
      <p> {camper.description} </p>
      <CamperOptions options={options} />
      <Link to={`/catalog/${camper.id}`}>
        <Button className={css.btn} type={"button"}>
          Show More
        </Button>
      </Link>
    </div>
  );
};

export default CamperCard;
