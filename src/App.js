import React from 'react';

import FriendsList from './FriendsList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: ['Awal', 'Tk', 'Fapo']
        }
    }

    handleAddFriend = () => {

    }

    handleRemoveFriend = (name) => {
        this.setState((currentState) => {
            return {
                friends: currentState.friends.filter((friend) => friend !== name)
            }
        })
    }

    render() {
        return (
            <div>
                <FriendsList list={this.state.friends} onRemoveFriend={this.handleRemoveFriend}/>
            </div>

        );
    }
}

export default App;
