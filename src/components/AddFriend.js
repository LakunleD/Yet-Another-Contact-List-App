import React from 'react';

function AddFriend(props) {
    return(
        <div>
            <input type="text" placeholder="new friend" value={props.name} onChange={props.updateName} name="name"/>
            <button onClick={props.onAddFriend}>submit</button>
            <button onClick={props.clearInput}>clear</button>
            <br/>
            <button onClick={props.clearFriends}>Clear All Friends</button>
        </div>
    )
}

export default AddFriend;