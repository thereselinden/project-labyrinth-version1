import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startGame, selectDirection } from '../reducers/thunk';
import { game } from '../reducers/game';
import Button from '../components/Button';
import Loader from '../components/Loader';


const StartPage = () => {
  const dispatch = useDispatch();

  const gamePlay = useSelector(store => store.game.game)
  console.log(gamePlay.actions)
  //const action = game.actions
  //console.log(action)

  const onHandleStartGame = () => {
    dispatch(startGame())
    console.log("start click")
  }

  const onSelectDirection = (directionValue) => {
    dispatch(selectDirection(directionValue))
    console.log("next move click")
  }

  const onGoBack = () => {
    dispatch(game.actions.historyGoBack())
  }

  return (
    <>
      <Loader />
      <Button 
      button = "button"
      click = {onHandleStartGame}
      text = "start game"
      /> 

      <Button 
      button = "button"
      click = {onGoBack}
      text = "go back"
      /> 

      {gamePlay.description &&  
        gamePlay.actions.map(item => (
      <>
        <Button 
          key={item.direction} 
          text={item.direction} 
          click={() => onSelectDirection(item.direction)}
        />
        <p>{item.description}</p>
      </>
      ))}
    </>
  )
}
export default StartPage;

//import our reducers
//combine our 2 reducers game and ui
//create store 
//import needed packages
//store our store within a provider 


//what components do we need? 
///Loader? 
///LocalStorage?
///