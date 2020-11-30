import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDirection } from '../reducers/thunk';

import { game } from '../reducers/game';
import Button from '../components/Button';
import Loader from '../components/Loader';
import ImgMediaCard from '../lib/Card';
import styled from 'styled-components';


const GamePage = () => {
  const dispatch = useDispatch();

  const gameMove = useSelector(store => store.game.game)
  //console.log(game)

  const gamePlay = useSelector(store => store.game.game)
  console.log(gamePlay.actions)

  const onSelectDirection = (directionValue) => {
    dispatch(selectDirection(directionValue))
    console.log("next move click")
  }

  const onGoBack = () => {
    dispatch(game.actions.historyGoBack())
  }

  return (
    <div>
      <Loader />
      <Button 
        button = "button"
        click = {onGoBack}
        text = "go back"
      /> 

      {gamePlay.description && 
        <> 
        <ImgMediaCard 
          secondaryText ={gameMove.description}
          maxWidth="375px"
        />
       <Container>
       {gamePlay.actions.map(item => (
        <>
          <ImgMediaCard 
            title={item.direction}
            subTitle={item.description}

            //coverImage 
            imageAlt={item.direction}
            title={`Go ${item.direction}`}
            secondaryText={item.description}
            buttonText={`Go ${item.direction}`}
            onClick={() => onSelectDirection(item.direction)}
            maxWidth="170px"
          />
        </>
      ))}
       </Container>        
      </>
      }
    </div>
  )
}
export default GamePage;

const Container = styled.article`
  display: flex;
`