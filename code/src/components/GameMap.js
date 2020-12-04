import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import Coordinate from './MapCoordinates';

const GameMap = () => {
  const coordinates = useSelector(store => store.game.coordinates);

  return (
    <Map>
      {coordinates.map(coordinate => (
        <Coordinate key={coordinate} coordinate={coordinate} />
      ))}
    </Map>
  );
};
export default GameMap;

const Map = styled.section`
  max-width: 400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
