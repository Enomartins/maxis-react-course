import React from 'react'


function validationComponent(props) {
    let validationMessage = "Text is long enough";

    if (props.inputLength <= 5) {
        validationMessage = "Text is too short";
    }
    return (
        <div>

            {
                <p>{validationMessage}</p>
                // props.inputLength < 5 ?
                // <p>Text too short</p> :
                // <p>Text long Enough</p>
            }
        </div>
    )
}

export default validationComponent
