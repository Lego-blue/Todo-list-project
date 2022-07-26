import DeleteIcon from "@mui/icons-material/Delete";
// import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import './todo.css';
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";



function Todo({ tasks, handleComplete, handleRemove, handleRemoveAll  }) {
    

    return (
        <ul className="list">
            {tasks.map((task, index) => (
                    <li className="item" key = {index}>
                        <div className="check-task">
                            <div className="check-box">
                                <input type="checkbox" onClick={() => handleComplete(index)}/>
                                <span>
                                    <CheckBoxOutlineBlankSharpIcon className="check-icon" />
                                </span>
                            </div>
                            <span className="text">{task.tasks}</span>
                        </div>
                        <button className="btn-delete" onClick = {() => handleRemove(index)}>
                            <DeleteIcon className="icon" />
                        </button>
                    </li>
                ))}
        </ul>
    );
}

export default Todo;

/* <li className="item">
                    <div className="check-task">
                        <div className="check-box">
                            <input type="checkbox" />
                            <span>
                                <CheckBoxOutlineBlankSharpIcon className="check-icon" />
                            </span>
                        </div>
                        <span className="text">er</span>
                    </div>
                    <button className="btn-delete">
                        <DeleteIcon className="icon" />
                    </button>
                </li>
 */