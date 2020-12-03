import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import StartGame from '../components/StartGame';
import Game from '../components/Game';
import GameMap from '../components/GameMap';

const GamePage = () => {
  const currentGame = useSelector(store => store.game.game);

  return (
    <Main>
      <Div>{!currentGame.description 
          ? <StartGame /> 
          : <>
            <Game /> <GameMap/>
          </>
        }</Div>
    </Main>
  );
};
export default GamePage;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  //background-image: url('../assets/labyrinth.png');
  background-position: center;
`;

const Div = styled.div`
  max-width: 600px;
`;
