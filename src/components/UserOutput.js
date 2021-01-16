import React from 'react'
import './UserOutput.css'


const UserOutput = (props) =>  {
        return (
            <div className="content">
                <p>{props.name1} donated 250,000 naira</p>
                
                <p>{props.name2} donated 2.5 million naira</p>
            </div>
        )
    }

export default UserOutput
