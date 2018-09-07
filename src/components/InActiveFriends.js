import React from 'react';


function InActiveFriends(props) {
    return (
        <ul>
            {
                props.list.map((friend) => (

                    <li key={friend.name}>
                        <span>{friend.name}</span>
                        <button onClick={() => props.toggleFriend(friend.name)}>Activate</button>
                    </li>
                ))
            }
        </ul>
    )
}

export default InActiveFriends;