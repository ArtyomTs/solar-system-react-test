import { createContext, useState } from "react";
import solarSystem from "./assets/solar-system.json";

export const PlanetsContext = createContext({
  ...solarSystem,
  currentPlanet: 'Sun',
  setCurrentPlanet: null});

export const PlanetsProvider = ({ children }) => {
  const [currentPlanet, setCurrentPlanet] = useState(0)

  return (
    <PlanetsContext.Provider
      value={{
        ...solarSystem,
        currentPlanet,
        setCurrentPlanet
        }}>
      {children}
    </PlanetsContext.Provider>
  );
}