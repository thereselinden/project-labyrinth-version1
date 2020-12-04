import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import StartGame from '../components/StartGame';
import Game from '../components/Game';
import GameMap from '../components/GameMap';

const GamePage = () => {
  const currentGame = useSelector(store => store.game.game);
  const description = currentGame.description;
  let backgroundImage = '';

  if (description) {
    if (description.includes('archway')) {
      backgroundImage = '../assets/vine_bricks.png';
    } else if (description.includes('mechanical')) {
      backgroundImage = '../assets/sand_brick.png';
    } else if (description.includes('melody')) {
      backgroundImage = '../assets/green_bricks.png';
    } else if (description.includes('bookshelves')) {
      backgroundImage = '../assets/castle_bricks.png';
    } else if (description.includes('ceiling')) {
      backgroundImage = '../assets/dark_bricks.png';
    } else if (description.includes('brighter')) {
      backgroundImage = '../assets/long_bricks.png';
    } else if (description.includes('calm')) {
      backgroundImage = '';
    }
  } else backgroundImage = '';

  return (
    <Main style={{ backgroundImage: `url(${backgroundImage})` }}>
      {!currentGame.description ? (
        <StartWrapper>
          <StartGame />
        </StartWrapper>
      ) : (
        <GameWrapper>
          <Game /> <GameMap />
        </GameWrapper>
      )}
    </Main>
  );
};
export default GamePage;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background: #000;
`;

const StartWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GameWrapper = styled(StartWrapper)`
  justify-content: space-around;
`;
