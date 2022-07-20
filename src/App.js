
import { useState } from 'react';
import './App.css';
import Form from './components/form/form';
import Todo from './components/todo/todo';

function App() {
    const [value, setValue ] = useState('');
    const [task, setTask] = useState([]);

    const handleChangeFormInput =(e) =>{ //onChage cua child
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value !== ''){
            const date = new Date().toLocaleDateString(); //chuyen date -> string
            const newTask = {
                date: date,
                task: value,
                completed: false,
            };
            setTask([...task, newTask]);
            setValue(""); //khi set xong => ''
        }
    }
  
    return (
        <div className="App">
            <Form
                formInput={value}
                handleChangeFormInput={handleChangeFormInput}
                handleSubmit = {handleSubmit}
            />
            <Todo />
        </div>
    );
}

export default App;
