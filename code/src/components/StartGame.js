import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import styled from 'styled-components/macro';

import { startGame } from '../reducers/thunk';
import UserInput from './UserInput';
import Button from '../components/Button';

const StartGame = () => {
  //const [username, setUsername] = useState('');
  //const [open, setOpen] = useState('');

  const dispatch = useDispatch();
  const username = useSelector(store => store.game.username);

  // useEffect(() => {
  //   console.log('username was updated');
  //   onStartGame();
  // }, [currentUser]);

  // const onAddUsername = event => {
  //   event.preventDefault();
  //   setOpen(open === '' ? 'open' : '');
  //   dispatch(game.actions.setUsername(username));
  // };

  // const onStartGame = () => {
  //   dispatch(startGame(username));
  //   console.log('start game, isGameStarted ');
  // };

  // const toggleDialog = () => {
  //   setOpen(open === '' ? 'open' : '');
  //   console.log('toggle');
  // };

  return (
    <>
      <div className="nes-container with-title is-rounded is-centered">
        <UserInput />
        {/* {!username ? (
          <UserInput />
        ) : (
          <>
            <p>{`OK ${username}. Let's go!`}</p>
            <Button
              button="button"
              //click={onStartGame}
              text={'Start Game'}
              className="nes-btn is-primary"
            />
          </>
        )} */}
      </div>
      {/* <section className="nes-container is-rounded is-centered">
        <p>
          {!username ? 'Start by adding username' : `OK ${username}. Let's go!`}
        </p>
        <Button
          button="button"
          click={!username ? toggleDialog : onHandleStartGame}
          text={!username ? 'Add username' : 'start game'}
          className="nes-btn is-primary"
        />
      </section>
      <CustomDialog open={open} className="nes-dialog is-rounded">
        <h1 className="nes-text is-primary">Welcome!</h1>
        <p className="nes-text">Let's get lost together.</p>
        <form onSubmit={onAddUsername}>
          <div className="nes-field">
            <label htmlFor="userName">
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Type username..."
                value={username}
                onChange={event => setUsername(event.target.value)}
                className="nes-input"
              />
            </label>
          </div>
          <Menu className="dialog-menu">
            <Button button="button" text="cancel" className="nes-btn" />
            <Button
              button="submit"
              text="continue"
              disabled={!username}
              className={
                username ? 'nes-btn is-primary' : 'nes-btn is-disabled'
              }
            />
          </Menu>
        </form>
      </CustomDialog> */}
    </>
  );
};
export default StartGame;

// const Container = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `;

// const CustomDialog = styled.dialog`
//   margin: 10px;
//   //margin-bottom: 250px;
// `;
//
