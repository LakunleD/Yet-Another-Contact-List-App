import React from 'react';


function FriendsList(props) {
    return (
        <ul>
            {
                props.list.map((friend) => (

                    <li key={friend.name}>
                        <span>{friend.name}</span>
                        <button onClick={() => props.onRemoveFriend(friend.name)}>Remove</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default FriendsList;