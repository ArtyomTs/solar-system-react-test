import React, { useContext } from 'react';
import { PlanetsContext } from './PlanetsContext';

export const PlanetInfo = () => {
  const { solarSystem, currentPlanet } = useContext(PlanetsContext);
  let moons;
  if (solarSystem[currentPlanet].moons.length > 0) {
    moons = <p>Moons: {solarSystem[currentPlanet].moons.map((name) => (
      <span key={name} className='moon'>{name} </span>
    ))}</p>
  } else {
    moons = <p>No moons</p>
  }

  let imgWidth = 2560 / 3;
  let width = 1440 / 3;
  let height = 1440 / 3;
  let posx = (currentPlanet - 1) % 3 * -imgWidth - 180;
  let posy = Math.floor((currentPlanet - 1) / 3) * -height;

  let planetPicture = <img src="solar-system.jpg" alt="" style={
    { width: width+'px',
      height: height+'px',
      objectFit: 'none',
      objectPosition: `${posx}px ${posy}px`}}/>

  if (currentPlanet == 0) {
    planetPicture = <img src="sun.jpg" alt="" style={
      { width: width+'px',
        height: height+'px',
        objectFit: 'contain'}}/>
  }

  return (
    <div id='planet-info'>
      {planetPicture}
      <div className='planet-details'>
        <h2>{solarSystem[currentPlanet].name}</h2>
        <p>{solarSystem[currentPlanet].description}</p>
        <p>Distance from the Sun: {solarSystem[currentPlanet].distance}</p>
        <p>Radius: {solarSystem[currentPlanet].radius}</p>
        <p>Gravity: {solarSystem[currentPlanet].weight}</p>
        {moons}
      </div>
    </div>
  );
}