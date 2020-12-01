import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { startGame } from '../reducers/thunk';
import { game } from '../reducers/game';
import Button from '../components/Button';

const StartGame = () => {
  const [userName, setUserName] = useState("");
  const [open, setOpen] = useState("");

  const dispatch = useDispatch();
  const username = useSelector(store => store.game.userName);

  const onAddUserName = (event) => {
    event.preventDefault();
    setOpen(open === '' ? 'open' : '');
    dispatch(game.actions.setUserName(userName))
  };

  const onHandleStartGame = () => {
    dispatch(startGame(username))
    console.log("start game, isGameStarted ")
  }; 

  const toggleDialog = () => {
    setOpen(open === '' ? 'open' : '');
    console.log("toggle")
  };

  return (
    <Container>
      <section className="nes-container is-rounded is-centered">
        <p>{!userName ? "Start by adding username" : `OK ${userName}. Let's go!`}</p>
        <Button 
          button = "button"
          //button="submit"
          click = {!userName ? toggleDialog : onHandleStartGame}
          text = {!userName ? "Add username" : "start game"}
          //disabled={!username}
          className="nes-btn is-primary"
        /> 
      </section>
      <CustomDialog open={open} className="nes-dialog is-rounded">
        <h1 className="nes-text is-primary">Welcome!</h1>   
        <p className="nes-text">Let's get lost together.</p>      
        <form onSubmit={onAddUserName}>
          <div className="nes-field">  
            <label htmlFor="userName">
              <input 
                type="text"
                id="userName"
                name="userName"
                placeholder="Type username..."
                //required
                value={userName}
                onChange={event => setUserName(event.target.value)}
                className="nes-input"
              />
            </label>
          </div>
          <Menu className="dialog-menu">
            <Button 
              //button = "button"
              button="button"
              //click = {event => onHandleStartGame(event.target.value)}
              text = "cancel"
              //disabled={!userName}
              className="nes-btn"
            /> 
            <Button 
              //button = "button"
              button="submit"
              //click = {event => onHandleStartGame(event.target.value)}
              text = "continue"
              disabled={!userName}
              className={userName ? "nes-btn is-primary" : "nes-btn is-disabled"}
            /> 
          </Menu>
        </form>
      </CustomDialog>  
    </Container>
  )
}
export default StartGame;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const CustomDialog = styled.dialog`
  margin: 10px;
  margin-bottom: 250px;
`
const Menu = styled.menu`
  display: flex;
  margin-top: 20px;
`