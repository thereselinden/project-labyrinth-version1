import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import MapCoordinates from './MapCoordinates';

const GameMap = () => {
  const coordinates = useSelector(store => store.game.coordinates);

  return (
    <Map>
      {coordinates.map(mapCoordinates => (
        <MapCoordinates key={mapCoordinates} mapCoordinates={mapCoordinates} />
      ))}
    </Map>
  );
};
export default GameMap;

const Map = styled.section`
  max-width: 400px;
  padding: 5px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
