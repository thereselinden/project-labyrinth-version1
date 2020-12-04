import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { game } from '../reducers/game';
import { startGame } from '../reducers/thunk';
import Button from './Button';
import { Title, SubTitle, Text } from '../lib/Text';

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
    <>
      <TitleContainer> 
        <Title>Welcome,</Title>
        <SubTitle>Let's get lost!</SubTitle>
      </TitleContainer>
      <Container className="nes-container with-title is-rounded is-centered">  
        <Text>Start by adding your username.</Text>
        <form onSubmit={onAddUserName}>
          <div className="nes-field">
            <label htmlFor="userName">
              <Input
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
      </Container> 
    </>
  );
};
export default StartGame;

const TitleContainer = styled.div`
  text-align: center; 
  margin-bottom: 20px;
`

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
`
const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.6);
`

const Menu = styled.menu`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

