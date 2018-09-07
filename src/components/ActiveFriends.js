import React from 'react';


function ActiveFriends(props) {
    return (
        <ul>
            {
                props.list.map((friend) => (

                    <li key={friend.name}>
                        <span>{friend.name}</span>
                        <button onClick={() => props.onRemoveFriend(friend.name)}>Remove</button>
                        <button onClick={() => props.toggleFriend(friend.name)}>Deactivate</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default ActiveFriends;