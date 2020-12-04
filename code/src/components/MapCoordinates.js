import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { SmallText } from '../lib/Text';

const MapCoordinates = ({ mapCoordinates }) => {
  const currentCoordinates = useSelector(store => store.game.game.coordinates);
  const previousCoordinates = useSelector(store => store.game.previousSteps);
  const gameSteps = previousCoordinates.find(step => step === mapCoordinates);

  return (
    <MapSquare
      mapCoordinates={mapCoordinates}
      currentCoordinates={currentCoordinates}
      gameSteps={gameSteps}
    >
      {mapCoordinates === currentCoordinates && (
        <section className="icon-list">
          {mapCoordinates !== '1,3' ? (
            <Icon className="nes-icon close is-medium"></Icon>
          ) : (
            <Icon className="nes-icon trophy is-medium"></Icon>
          )}
          <SmallText>You're here</SmallText>
        </section>
      )}
    </MapSquare>
  );
};
export default MapCoordinates;

const MapSquare = styled.div`
  height: 55px;
  padding: 5px 0;
  text-align: center;
  background: ${props =>
    props.mapCoordinates === props.currentCoordinates ||
    props.mapCoordinates === props.gameSteps
      ? 'rgba(255, 255, 255, 0.6)'
      : 'transparent'};
  border: ${props =>
    props.mapCoordinates === props.currentCoordinates ||
    props.mapCoordinates === props.gameSteps
      ? '3px dotted #fff;'
      : 'transparent'};
`;

const Icon = styled.i`
  margin: 0 !important;
  transform: scale(1.5) !important;
`;
