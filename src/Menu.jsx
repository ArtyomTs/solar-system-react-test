// component to show the menu.
// items should be taken from conetext object named PlanetsContext
// it should take names of planets and show in a list.

import React, { useContext } from 'react';
import { PlanetsContext } from './PlanetsContext';

export const Menu = () => {
  const { solarSystem, currentPlanet, setCurrentPlanet } = useContext(PlanetsContext);

  return (
    <ul className='menu'>
      {solarSystem.map((planet, index) => (
        <li key={index}>
          <button onClick={() => setCurrentPlanet(index)}>{planet.name}</button>
        </li>
      ))}
    </ul>
  );
}
