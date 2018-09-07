import React from 'react';


function FriendList(props) {
    return (
        <ul>
            {
                props.list.map((name) => (
                    <li key={name}>{name}</li>
                ))
            }
        </ul>
    )
}

export default FriendList;