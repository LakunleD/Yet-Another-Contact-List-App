import React from 'react';

import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [
                {
                    name: 'Awal',
                    status: true
                },
                {
                    name: 'Tk',
                    status: true
                },
                {
                    name: 'Fapo',
                    status: true

                }
            ],
            name: ''
        }
    }

    handleAddFriend = () => {
        this.setState((currentState) => {
            return {
                friends: currentState.friends.concat({name:this.state.name, status:true}),
                name: "",
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
            [inputName]: value
        });
    }

    clearInput = () => {
        this.setState({
            name: ''
        });
    }

    render() {
        return (
            <div>
                <AddFriend name={this.state.name} updateName={this.handleInput} onAddFriend={this.handleAddFriend}
                           clearInput={this.clearInput}/>
                <FriendsList list={this.state.friends} onRemoveFriend={this.handleRemoveFriend}/>
            </div>

        );
    }
}

export default App;
