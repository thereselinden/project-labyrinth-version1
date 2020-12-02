import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { game } from '../reducers/game';
import { selectDirection } from '../reducers/thunk';
import Button from './Button';
import Loader from './Loader';
//import ImgMediaCard from '../lib/Card';
//import styled from 'styled-components';

const GamePage = () => {
  //const [isDirectionSelected, setIsDirectionSelected] = useState(false);
  const [directionIndex, setDirectionIndex] = useState('');
  const [open, setOpen] = useState('');

  const dispatch = useDispatch();

  const gameData = useSelector(store => store.game.game);
  const username = useSelector(store => store.game.username);
  const isLoading = useSelector(store => store.ui.isLoading);

  console.log(gameData);

  const onSelectDirection = direction => {
    dispatch(selectDirection(direction, username));
    console.log(username);
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
    console.log('toggle');
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
                <Button
                  button="button"
                  className="nes-btn"
                  click={onGoBack}
                  text="Go Back"
                />
              )}

              <p className="nes-text">{gameData.description}</p>
              {gameData.actions.length > 0 ? (
                <Menu className="dialog-menu">
                  <section>
                    {gameData.actions.map((item, index) => (
                      <>
                        <Button
                          button="button"
                          key={item.description}
                          text={
                            `Look ${item.direction}`
                            // directionIndex === ''
                            //   ? `Look ${item.direction}`
                            //   : `Continue ${item.direction}`
                          }
                          className="nes-btn is-primary"
                          // click={
                          //   directionIndex === ''
                          //     ? () => setDirectionIndex(index)
                          //     : () => onSelectDirection(item.direction)
                          // }
                          click={() => toggleDialog(index)}
                          //click={() => onSelectDirection(item.direction)}
                        />
                        {directionIndex === index && (
                          <dialog
                            open={open}
                            className="nes-dialog is-rounded"
                            id="dialog-rounded"
                          >
                            {/* <form method="dialog"> */}
                            <p className="title">{`Looking ${gameData.actions[directionIndex].direction}:`}</p>
                            <p>
                              {gameData.actions[directionIndex].description}
                            </p>
                            <menu className="dialog-menu">
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
                              {console.log(gameData.actions[directionIndex])}
                              {console.log(directionIndex)}
                            </menu>
                            {/* </form> */}
                          </dialog>
                        )}
                      </>
                    ))}
                  </section>
                </Menu>
              ) : (
                //  {directionIndex !== '' &&
                //   <p>{gameData.actions[directionIndex].description}</p>
                // }
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

// const Container = styled.article`
//   display: flex;
// `;

//Grid med markör för att visa vart man är beroende på vilken väg man valt
//allt en polyline baserat på coordinater.
