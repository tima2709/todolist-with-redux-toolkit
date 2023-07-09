import React from 'react';

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label>
            <input type="text" value={text} onChange={(e) => handleInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    );
};

export default InputField;