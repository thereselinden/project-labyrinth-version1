import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDirection } from '../reducers/thunk';

import { game } from '../reducers/game';
import Button from './Button';
import Loader from './Loader';
import ImgMediaCard from '../lib/Card';
import styled from 'styled-components';


const GamePage = () => {
  const [isDirectionSelected, setIsDirectionSelected] = useState(false)
  console.log(isDirectionSelected)
  const [directionIndex, setDirectionIndex] = useState();
  console.log(directionIndex)

  const dispatch = useDispatch();

  const gameData = useSelector(store => store.game.game);
  console.log(gameData)
  
  const onSelectDirection = (directionValue) => {
    dispatch(selectDirection(directionValue));
    console.log("next move click")
  };

  const onGoBack = () => {
    dispatch(game.actions.historyGoBack());
  };

  return (
    <div>
      <Loader />
      {gameData.description && 
      <>
        <Button 
          button = "button"
          click = {onGoBack}
          text = "go back"
        /> 
        
        <div className="nes-container with-title is-centered">
          <p className="nes-text">{gameData.description}</p>  

          <menu className="dialog-menu">
            {gameData.actions.map((item, index) => ( 
              <>
                <Button 
                  key={item.direction}
                  button="button"
                  text = {`Go ${item.direction}`}
                  className="nes-btn is-primary"
                  click={() => setDirectionIndex(index)}
                />
              </>
            ))}
          </menu>
          {directionIndex && 
            console.log("hej")
          }
        </div> 
      </>
      }
    </div>
  );
};
export default GamePage;

const Container = styled.article`
  display: flex;
`;

//Grid med markör för att visa vart man är beroende på vilken väg man valt
//allt en polyline baserat på coordinater. 