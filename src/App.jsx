import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PlanetsContext } from './PlanetsContext.jsx'
import {Menu} from './Menu'
import {PlanetInfo} from './PlanetInfo'

function App() {
  const {currentPlanet, setCurrentPlanet} = useContext(PlanetsContext);

  return (
    <>
      <div id='header'>
        <h1>Solar System</h1>
        <Menu />
      </div>
      <PlanetInfo />
    </>
  )
}

export default App
