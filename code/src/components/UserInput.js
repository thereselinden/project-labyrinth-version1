import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { game } from '../reducers/game';
import { startGame } from '../reducers/thunk';
import Button from '../components/Button';

const UserInput = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(store => store.game.username);
  console.log(user);

  useEffect(() => {
    dispatch(startGame(username));
    console.log('username was updated');
  }, [user]);

  const onAddUserName = event => {
    event.preventDefault();
    dispatch(game.actions.setUsername(username));
    console.log('start click');
    setUsername('');
  };

  return (
    <>
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
          {/* <Button button="button" text="cancel" className="nes-btn" /> */}
          <Button
            button="submit"
            text="Play game"
            disabled={!username}
            className={username ? 'nes-btn is-primary' : 'nes-btn is-disabled'}
          />
        </Menu>
      </form>
    </>
  );
};
export default UserInput;

const Menu = styled.menu`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import { game } from '../reducers/game';
// import Button from '../components/Button';

// const UserInput = () => {
//   const [userName, setUserName] = useState('');
//   const [open, setOpen] = useState('');
//   const dispatch = useDispatch();

//   const onAddUserName = event => {
//     event.preventDefault();
//     dispatch(game.actions.setUserName(userName));
//     console.log('start click');
//   };

//   const toggleDialog = () => {
//     setOpen(open === '' ? 'open' : '');
//   };

//   return (
//     <dialog open={open} class="nes-dialog">
//       <form onSubmit={onAddUserName}>
//         <div class="nes-field">
//           <label htmlFor="userName">
//             <input
//               type="text"
//               id="userName"
//               name="userName"
//               placeholder="Type your username..."
//               //required
//               value={userName}
//               onChange={event => setUserName(event.target.value)}
//               className="nes-input"
//             />
//           </label>
//         </div>
//         <Button
//           //button = "button"
//           button="submit"
//           //click = {event => onHandleStartGame(event.target.value)}
//           text="add username"
//           disabled={!userName}
//           className="nes-btn"
//         />
//       </form>
//     </dialog>
//   );
// };
// export default UserInput;
