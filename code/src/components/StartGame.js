import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { game } from '../reducers/game';
import { startGame } from '../reducers/thunk';
import Button from './Button';

const StartGame = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(store => store.game.username);

  useEffect(() => {
    if (user) {
      dispatch(startGame());
    }
  }, [user]);

  const onAddUserName = event => {
    event.preventDefault();
    dispatch(game.actions.setUsername(username));
    setUsername('');
  };

  return (
    <div className="nes-container with-title is-rounded is-centered">
      <p className="title">Welcome!</p>
      <p>Let's get lost! Start by adding your username.</p>
      <form onSubmit={onAddUserName}>
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
          <Button
            button="submit"
            text="Play game"
            disabled={!username}
            className={username ? 'nes-btn is-primary' : 'nes-btn is-disabled'}
          />
        </Menu>
      </form>
    </div> 
  );
};
export default StartGame;

const Menu = styled.menu`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;