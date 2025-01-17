import Icon from "../Icon/Icon.jsx";

const OPTION_ICONS = {
  transmission: "icon-diagram",
  engine: "icon-fuel-pump",
  AC: "icon-wind",
  Bathroom: "icon-ph_shower",
  Kitchen: "icon-cup-hot",
  TV: "icon-tv",
  Radio: "icon-ui-radios",
  Refrigerator: "icon-solar_fridge-outline",
  Microwave: "icon-lucide_microwave",
  Gas: "icon-hugeicons_gas-stove",
  Water: "icon-ion_water-outline",
};

const CamperOptions = ({ options }) => {
  const SHOW_VALUE_KEYS = ["transmission", "engine"];

  return (
    <ul className="camper-options">
      {Object.entries(options).map(([key, value]) =>
        value ? (
          <li key={key} className="camper-option-item">
            <Icon
              id={OPTION_ICONS[key]}
              width={32}
              height={32}
              className="option-icon"
            />
            <span className="">
              {SHOW_VALUE_KEYS.includes(key) ? value : key}
            </span>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default CamperOptions;
