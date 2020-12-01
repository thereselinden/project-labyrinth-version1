import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { game } from '../reducers/game';
import Button from '../components/Button';

const UserInput = () => {
  const [userName, setUserName] = useState("");
  const [open, setOpen] = useState('');
  const dispatch = useDispatch();

  const onAddUserName = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUserName(userName))
    console.log("start click")
  } 

  const toggleDialog = () => {
    setOpen(open === '' ? 'open' : '');
  };

  return (
    <dialog open={open} class="nes-dialog">
        <form onSubmit={onAddUserName}>
        <div class="nes-field">  
          <label htmlFor="userName">
            <input 
              type="text"
              id="userName"
              name="userName"
              placeholder="Type your username..."
              //required
              value={userName}
              onChange={event => setUserName(event.target.value)}
              className="nes-input"
            />
          </label>
        </div>
          <Button 
            //button = "button"
            button="submit"
            //click = {event => onHandleStartGame(event.target.value)}
            text = "add username"
            disabled={!userName}
            className="nes-btn"
          /> 
      </form>
    </dialog>
  )
}
export default UserInput