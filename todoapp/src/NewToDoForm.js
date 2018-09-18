import React from 'react';

const NewToDoForm = (props) => {
    return (
        <form onSubmit={props.formSubmitted}>
            <label htmlFor="NewToDoApp">New ToDo App</label><br /><br />
            <input onChange={props.newToDoChanged} type="text" id="NewToDo" name="NewToDo" value={props.newToDo} /><br /><br />
            <button type="submit">Add To ToDo</button><br /><br />
        </form>
    )
};
export default NewToDoForm;