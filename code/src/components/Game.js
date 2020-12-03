import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { game } from '../reducers/game';
import { selectDirection } from '../reducers/thunk';
import Button from './Button';
import Loader from './Loader';
//import styled from 'styled-components';

const GamePage = () => {
  const [directionIndex, setDirectionIndex] = useState('');
  const [open, setOpen] = useState('');

  const dispatch = useDispatch();

  const gameData = useSelector(store => store.game.game);
  const username = useSelector(store => store.game.username);
  const isLoading = useSelector(store => store.ui.isLoading);

  const onSelectDirection = direction => {
    dispatch(selectDirection(direction, username));
    setDirectionIndex('');
    setOpen('');
  };

  const onGoBack = () => {
    dispatch(game.actions.historyGoBack());
  };

  const restartGame = () => {
    dispatch(game.actions.restartGame(false));
  };

  const toggleDialog = index => {
    setOpen(open === '' ? 'open' : '');
    setDirectionIndex(index);
  };

  return (
    <div className="nes-container with-title is-rounded is-centered">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {gameData.description && (
            <>
              {gameData.coordinates === '0,0' ? (
                <p className="title">{`Hello ${username}`}</p>
              ) : (
                <BackButton>
                  <Button
                    button="button"
                    className="nes-btn"
                    click={onGoBack}
                    text="Go Back"
                  />
                </BackButton>
              )}

              <p className="nes-text">{gameData.description}</p>
              {gameData.actions.length > 0 ? (
                <Menu className="dialog-menu">
                    {gameData.actions.map((item, index) => (
                      <div key={index}>
                        <Button
                          button="button"
                          key={item.direction}
                          text={
                            `Look ${item.direction}`
                          }
                          className="nes-btn is-primary"
                          click={() => toggleDialog(index)}
                        />
                        {directionIndex === index && (
                          <Dialog
                            open={open}
                            className="nes-dialog is-rounded"
                            id="dialog-rounded"
                          >
                            <p className="title">{`Looking ${gameData.actions[directionIndex].direction}:`}</p>
                            <p>
                              {gameData.actions[directionIndex].description}
                            </p>
                            <Menu className="dialog-menu">
                              <Button
                                click={toggleDialog}
                                className="nes-btn"
                                text="Cancel"
                              />
                              <Button
                                className="nes-btn is-primary"
                                text={`Head ${gameData.actions[directionIndex].direction}`}
                                click={() => onSelectDirection(item.direction)}
                              />
                            </Menu>
                          </Dialog>
                        )}
                      </div>
                    ))}
                </Menu>
              ) : (
                <Button
                  button="button"
                  click={restartGame}
                  text="Play again"
                  className="nes-btn is-primary"
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
export default GamePage;

const Container = styled.div`
  height: 100%;
`;

const Menu = styled.menu`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Dialog = styled.dialog`
  max-width: 300px;
`;

const BackButton = styled.div `
  display: flex; 
  justify-content: flex-start;
  margin-bottom: 1rem;
`