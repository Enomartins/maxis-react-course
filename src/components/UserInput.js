import React, { Component } from 'react'

export class UserInput extends Component {
    render() {
        const styButton = {
            margin: '2em auto',
            padding: '1em 10px',
            borderRadius: '5px',
            backgroundColor: 'purple'
        }
        return (
            <div>
                <input style={styButton} onChange={this.props.changed} type="text" value={this.props.name1}/>
            </div>
        )
    }
}

export default UserInput

