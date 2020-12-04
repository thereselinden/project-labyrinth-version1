import { game } from './game';
import { ui } from './ui';

export const startGame = () => {
  return (dispatch, getStore) => {
    dispatch(ui.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getStore().game.username }),
    })
      .then(data => data.json())
      .then(json => {
        localStorage.setItem('game', JSON.stringify(json));
        localStorage.setItem(
          'username',
          JSON.stringify(getStore().game.username)
        );
        dispatch(game.actions.setGame(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export const selectDirection = (direction, username) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        type: 'move',
        direction: direction,
      }),
    })
      .then(data => data.json())
      .then(json => {
        localStorage.setItem('game', JSON.stringify(json));
        dispatch(game.actions.setDirection(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
