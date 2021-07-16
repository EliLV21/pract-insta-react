import React from 'react';
import User from '../User/User';

class Suggestions extends React.Component{
    state = {
        users: null
    }
    async componentDidMount(){
        const resp = await fetch ('https://jsonplaceholder.typicode.com/users')
        const users = await resp.json()
        this.setState({users})
    }
    render (){
        const {users} = this.state
        return (
            <div>
                {
                    users &&
                    users.map(({...user}) => <User key={user.id} {...user}/>)
                }
            </div>
        )
    }
}

export default Suggestions;