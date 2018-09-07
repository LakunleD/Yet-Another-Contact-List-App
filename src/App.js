import React from 'react';

import FriendsList from './FriendsList';
import AddFriend from './AddFriend';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: ['Awal', 'Tk', 'Fapo'],
            name: ''
        }
    }

    handleAddFriend = () => {
        this.setState((currentState) => {
            return {
                friends: currentState.friends.concat(this.state.name),
                name: ""
            }
        })
    }

    handleRemoveFriend = (name) => {
        this.setState((currentState) => {
            return {
                friends: currentState.friends.filter((friend) => friend !== name)
            }
        })
    }

    handleInput = (event) => {
        const target = event.target;
        const value = (target.type === "checkbox") ? target.checked : target.value;
        const inputName = target.name;

        this.setState({
            [inputName]:value
        })
    }

    render() {
        return (
            <div>
                <AddFriend name={this.state.name} updateName={this.handleInput} onAddFriend={this.handleAddFriend}/>
                <FriendsList list={this.state.friends} onRemoveFriend={this.handleRemoveFriend}/>
            </div>

        );
    }
}

export default App;
