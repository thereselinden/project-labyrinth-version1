import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import Coordinate from './Coordinate';

const GameMap = () => {
  const coordinates = useSelector((store => store.game.coordinates));
  //console.log(coordinates);

  return (
      <Map>
        {coordinates.map(coordinate => (
          <Coordinate key={coordinate} coordinate={coordinate}/>
        ))}
      </Map>
  )
};
export default GameMap;

const MapContainer = styled.div`
  padding: 0 !important;
`

const Map = styled.section`
  width: 400px;
  display: grid; 
  grid-template-columns: 1fr 1fr;
`;




