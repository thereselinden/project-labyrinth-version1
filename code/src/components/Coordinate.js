import React from 'react';
import { useSelector } from 'react-redux'; 
import styled from 'styled-components';

const Coordinate = ({ coordinate }) => {
  const currentCoordinate = useSelector(store => (store.game.game.coordinates));
  console.log(currentCoordinate);

  return (
    <MapCoordinate coordinate={coordinate} currentCoordinate={currentCoordinate}> 
      {coordinate} {currentCoordinate}
    </MapCoordinate>
  )
}
export default Coordinate;

const MapCoordinate = styled.div`
  border: 1px solid red;
  background: ${props => props.coordinate === props.currentCoordinate ? "papayawhip" : "white"} 
`

const Map = styled.section `
  display: grid; 
  grid-template-columns: 1fr 1fr;
  border: 1px solid #000;
`;