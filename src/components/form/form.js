import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import './form.css';
function Form({ formInput, handleChangeFormInput, handleSubmit }) {
    return (
        <div>
            <form className="formInput" onSubmit={handleSubmit}>
                {/* <label htmlFor="taskInput"></label> */}
                <input
                    required
                    type="text"
                    value={formInput}
                    onChange={handleChangeFormInput}
                />
                <button className="btn" type="submit">
                    <AddIcon className="plus-icon" />
                </button>
            </form>
        </div>
    );
}

export default Form;
