import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import Coordinate from './Coordinate';

const GameMap = () => {
  const coordinates = useSelector((store => store.game.coordinates));
  //console.log(coordinates);

  return (
    <MapContainer className="nes-container with-title is-rounded">
      <Map>
        {coordinates.map(coordinate => (
          <Coordinate key={coordinate} coordinate={coordinate}/>
        ))}
      </Map>
    </MapContainer>  
  )
};
export default GameMap;

const MapContainer = styled.div`
  padding: 0 !important;
`

const Map = styled.section`
  display: grid; 
  grid-template-columns: 1fr 1fr;
  border: 1px solid #000;
`;




