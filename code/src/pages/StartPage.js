import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import StartGame from '../components/StartGame';
import Game from '../components/Game';

const StartPage = () => {
  const isGameStarted = useSelector(store => store.game.isGameStarted);
  console.log(isGameStarted);

  return <Main>{!isGameStarted ? <StartGame /> : <Game />}</Main>;
};
export default StartPage;

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  //background-image: url('../assets/labyrinth.png');
  background-position: center;
`;
