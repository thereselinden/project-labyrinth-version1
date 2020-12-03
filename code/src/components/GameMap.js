import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Coordinate from './Coordinate';
import Container from '../lib/Container';

const GameMap = () => {
  const coordinates = useSelector((store => store.game.coordinates));
  console.log(coordinates);

  return (
    <div className="nes-container with-title is-rounded">
      <Map>
        {coordinates.map(coordinate => (
          <Coordinate key={coordinate} coordinate={coordinate}/>
        ))}
      </Map>
    </div>  
  )
}
export default GameMap;

const Map = styled.section`
  display: grid; 
  grid-template-columns: 1fr 1fr;
  border: 1px solid #000;
`;



