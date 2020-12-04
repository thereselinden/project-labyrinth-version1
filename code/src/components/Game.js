import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { game } from '../reducers/game';
import { selectDirection } from '../reducers/thunk';
import Button from './Button';
import Loader from './Loader';
import { SubTitle, Text } from '../lib/Text';

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
    <TitleContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {gameData.description && (
            <>
              {gameData.coordinates === '0,0' ? (
                <SubTitle className="nes-text is-primary">{`Hello ${username}`}</SubTitle>
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
              <TextContainer>
                <Text className="nes-text">{gameData.description}</Text>
              </TextContainer>
              {gameData.actions.length > 0 ? (
                <Menu className="dialog-menu">
                  {gameData.actions.map((item, index) => (
                    <div key={index}>
                      <Button
                        button="button"
                        key={item.direction}
                        text={`Look ${item.direction}`}
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
                          <p>{gameData.actions[directionIndex].description}</p>
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
                <>
                  <IconSection className="icon-list">
                    <i className="nes-icon is-medium star"></i>
                    <i className="nes-icon is-medium star"></i>
                    <i className="nes-icon is-medium star"></i>
                  </IconSection>
                  <SubTitle>GAME OVER</SubTitle>
                  <IconSection className="icon-list">
                    <i className="nes-icon is-medium star"></i>
                    <i className="nes-icon is-medium star"></i>
                    <i className="nes-icon is-medium star"></i>
                  </IconSection>
                  <Button
                    button="button"
                    click={restartGame}
                    text="Play again"
                    className="nes-btn is-primary"
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </TitleContainer>
  );
};
export default GamePage;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 25px;
`;

const Menu = styled.menu`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const Dialog = styled.dialog`
  margin-top: 20px;
  max-width: 600px;
  left: 11%;
  z-index: 1;

  @media (min-width: 1024px) {
    left: 24%;
  }
`;

const BackButton = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

const IconSection = styled.section`
  margin: 25px 0;
`;