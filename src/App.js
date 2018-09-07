import React, {Component} from 'react';

import FriendList from './FriendList';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            friends: ['Awal', 'Tk', 'Fapo']
        }
    }

    render() {
        return (
            <div>
                <FriendList list={this.state.friends}/>
            </div>

        );
    }
}

export default App;
