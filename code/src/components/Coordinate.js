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
      {coordinate === currentCoordinates && 
        <section className="icon-list">
          <Icon className="nes-icon close is-medium"></Icon>
        </section>}
      {/* {coordinate} {currentCoordinates} */}
    </MapCoordinate>
  );
};
export default Coordinate;

const MapCoordinate = styled.div`
  height: 50px;
  padding: 5px 0;
  text-align: center;
  background: ${props =>
    props.coordinate === props.currentCoordinates ||
    props.coordinate === props.gameSteps
      ? 'transparent'
      : 'transparent'};
  border: ${props =>
    props.coordinate === props.currentCoordinates ||
    props.coordinate === props.gameSteps
      ? '1px dotted #fff;'
      : 'transparent'};
`;

const Icon = styled.i`
  margin: 0 !important;
  transform: scale(1.5) !important;
`;