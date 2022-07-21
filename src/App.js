
import { useState } from 'react';
import './App.css';
import Form from './components/form/form';
import Todo from './components/todo/todo';

function App() {
    const [value, setValue ] = useState('');
    const [tasks, setTask] = useState([]);

    const handleChangeFormInput =(e) =>{ //onChage cua child
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value !== ''){
            const date = new Date().toLocaleDateString(); //chuyen date -> string
            const newTasks = {
                date: date,
                tasks: value,
                completed: false,
            };
            setTask([...tasks, newTasks]);
          
            setValue(""); //khi set xong => ' '
        }
    }

    //Complete(<li> - input)
    const handleComplete = (index) => {
        const newTasks = [...tasks];
        if(newTasks[index].completed === false){
            newTasks[index].completed = true;
        }else{
            newTasks[index].completed = false;
        }
        console.log(newTasks[index].completed);
        setTask(newTasks);
    }

    //Remove item <li>
    const handleRemove = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTask(newTasks);
    }

    //Remove all
    const handleRemoveAll = () =>{
        const newTasks = [...tasks];
        newTasks.remove();
        setTask(newTasks);
    }

    return (
        <div className="App">
            <Form
                formInput={value}
                handleChangeFormInput={handleChangeFormInput}
                handleSubmit={handleSubmit}
            />
            <Todo
                tasks={tasks}
                handleComplete={handleComplete}
                handleRemove={handleRemove}
                handleRemoveAll={handleRemoveAll}
            />
        </div>
    );
}

export default App;
