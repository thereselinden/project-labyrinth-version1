import { game } from './game';
import { ui } from './ui';

export const startGame = (username) => {
  console.log(username)
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true)); 
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username }),  
    }) 
    .then((data) => data.json())
    .then((json) => {
      dispatch(game.actions.setGame(json)); 
      dispatch(game.actions.startGame(true));
      dispatch(ui.actions.setLoading(false)); 
    });
  };
};

export const selectDirection = (directionValue, username) => {
  console.log(username);
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true)); 
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username, 
        type: "move", 
        direction: directionValue,
      }),  
    }) 
    .then((data) => data.json())
    .then((json) => {
      dispatch(game.actions.setDirection(json)); 
      dispatch(ui.actions.setLoading(false)); 
    });
  };
};

//____POSTMAN TEST____//
/*
**Response**

The response you receive will contain:

{
    "coordinates": "0,3",
    "description": "The mouth of the chest swings open. The papers spring from the chest, whirling around your head.  You shield your face, but an instant later all is calm.  The papers, books and scrolls from the chest are now neatly arranged on the bookshelves around the room.",
    "actions": [
        {
            "type": "move",
            "direction": "South",
            "description": "A calm, faint melody flows into the room from the archway to the South.  Colors bounce calmly through the threshold. "
        },
        {
            "type": "move",
            "direction": "East",
            "description": "You see a bright light through an opening in the wall to the east. "
        }
    ]
}*/

/*


## Continue the game

When the user clicks/chooses any action, you should send a POST request to

`https://wk16-backend.herokuapp.com/action`
This POST request needs a JSON body (like the /start request) 
containing the same **username** you started the game with.

In addition your JSON body will specify what action was done by the player:
**type -** the type of action (currently only move)
**direction** - the direction to move

{
  "username": "Player", 
  type: "move", 
  direction: "East"
}

//____POSTMAN RESPONSE___///
{
    "coordinates": "0,2",
    "description": "As you move through the room, the walls change colors with every step you take. The buzzing and clicking from before now seem to form one harmonious melody.  They respond to your every movement.",
    "actions": [
        {
            "type": "move",
            "direction": "South",
            "description": "Through the door you see that the gizmos, previously scattered on the floor, have formed one complete, whirring machine.  "
        },
        {
            "type": "move",
            "direction": "North",
            "description": "Looking to the North, you see an arch leading to room containing a large chest.  Papers and scrolls are stuck in the mouth of the ornate container, as if someone store them in a hurry. Empty bookshelves line the room"
        }
    ]
}

 You will receive a response with a new description and the next set of actions to show to the player.  

*/