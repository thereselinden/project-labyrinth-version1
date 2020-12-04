import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import StartGame from '../components/StartGame';
import Game from '../components/Game';
import GameMap from '../components/GameMap';

const GamePage = () => {
  const currentGame = useSelector(store => store.game.game);

  const description = currentGame.description;
  console.log(description);

  // {description ? (
  //   if (description.includes("archway")) {
  //     console.log("coordinate 0,0")
  //   } else if (description.includes("mechanical"))
  //     console.log("coordinate 0,1")
  // ) : (

  // )
  // }

  let backgroundImage = '';

  if (description) {
    if (description.includes('archway')) {
      backgroundImage = '../assets/cavern.jpg';
    } else if (description.includes('mechanical')) {
      backgroundImage = '../assets/sand_brick.png';
    } else if (description.includes('melody')) {
      console.log('0,2');
    } else if (description.includes('bookshelves')) {
      console.log('0,3');
    } else if (description.includes('ceiling')) {
      backgroundImage = '../assets/ceiling.jpg';
    } else if (description.includes('brighter')) {
      console.log('1,1');
    } else if (description.includes('calm')) {
      console.log('1,3');
    } else console.log('end of story');
  } else console.log('startPage');

  return (
    <Main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Div>
        {!currentGame.description ? (
          <StartGame />
        ) : (
          <>
            <Game /> <GameMap />
          </>
        )}
      </Div>
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

const Div = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`;
