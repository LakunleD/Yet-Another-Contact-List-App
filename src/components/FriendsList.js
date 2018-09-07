import React from 'react';
import ActiveFriends from './ActiveFriends';
import InActiveFriends from './InActiveFriends';


function FriendsList(props) {
    return (
        <div>
            <h1>Active Friends</h1>
            <ActiveFriends list={props.list.filter((friend) => friend.status === true)}
                           toggleFriend={props.toggleFriend} onRemoveFriend={props.onRemoveFriend}/>

            <h1>Inactive Friends</h1>
            <InActiveFriends list={props.list.filter((friend) => friend.status === false)}
                             toggleFriend={props.toggleFriend}/>
        </div>
    )
}

export default FriendsList;