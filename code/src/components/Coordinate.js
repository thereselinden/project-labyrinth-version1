import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Coordinate = ({ coordinate }) => {
  const currentCoordinates = useSelector(store => store.game.game.coordinates);
  const previousCoordinates = useSelector(store => store.game.previousStep);
  //console.log(previousCoordinates);
  //console.log(currentCoordinates);
  //console.log(typeof coordinate, previousCoordinates);

  const gameSteps = previousCoordinates.find(step => step === coordinate);
  //console.log(gameSteps)

  return (
    <MapCoordinate
      coordinate={coordinate}
      currentCoordinates={currentCoordinates}
      gameSteps={gameSteps}
    >
      {coordinate} {currentCoordinates}
    </MapCoordinate>
  );
};
export default Coordinate;

const MapCoordinate = styled.div`
  border: 1px solid red;
  background: ${props =>
    props.coordinate === props.currentCoordinates ||
    props.coordinate === props.gameSteps
      ? 'papayawhip'
      : 'white'};
`;

const Map = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #000;
`;