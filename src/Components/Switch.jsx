import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const Switch = ({ id, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const location = useLocation();

  useEffect(() => {
    // Actualiza el estado de myState a false cada vez que cambia la ruta
    setIsChecked(checked);
   }, [location.pathname]);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div className="switch-container">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleSwitchChange}
      />
      <label htmlFor={id} className="switch-label"></label>
    </div>
  );
};

export default Switch;

