import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../reducers/thunk';

import { Link } from 'react-router-dom';
import Button from '../components/Button';

const StartPage = () => {
  const dispatch = useDispatch();

  const onHandleStartGame = () => {
    dispatch(startGame())
    console.log("start click")
  }

  return (
    <>
      <Link to={"/play"}>
        <Button 
        button = "button"
        click = {onHandleStartGame}
        text = "start game"
        /> 
      </Link>
    </>
  )
}
export default StartPage;