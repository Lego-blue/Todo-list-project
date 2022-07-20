import DeleteIcon from "@mui/icons-material/Delete";
// import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import './todo.css';
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";



function Todo() {
    return (
      
            <ul className="list">
                <li className="item">
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
                <li className="item">
                    <div className="check-task">
                        <div className="check-box">
                            <input type="checkbox" />
                            <span>
                                <CheckBoxOutlineBlankSharpIcon className="check-icon" />
                            </span>
                        </div>
                        <span className="text">egr</span>
                    </div>

                    <button className="btn-delete">
                        <DeleteIcon className="icon" />
                    </button>
                </li>
            </ul>
    
    );
}

export default Todo;
