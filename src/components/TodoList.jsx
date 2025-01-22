import React, { useState } from "react";
import '../styles/TodoList.css';

export default function TodoList() {

    const [doList, setDoList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const listInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const listAdd = () => {
        if (!nputValue.trim()) return;
        const newDolist = {
            id: Date.now(),
            text: inputValue,
            isComplete: false
        };
        setDoList([...doList, newDolist]);
        setInputValue('');
    };

    const listEdit = (id, newText) => {
        if (!newText) return;
        setDoList(doList.map((list) =>
            list.id === id ? { ...list, text: newText } : list
        ));
    };

    const listDelete = (id) => {
        setDoList(doList.filter((list) => list.id !== id));
    };

    const listComplete = (id) => {
        setDoList(doList.map((list) =>
            list.id === id ? { ...list, isComplete: !list.isComplete } : list
        ));
    };

    return (
        <div className="container">
            <div className="containerToDoList">
                <div className="inputToDo">
                    <h1>Lista de Tareas</h1>
                    <div className="inputGroup">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={listInputChange}
                            placeholder="Añadir nueva tarea..."
                        />
                        <button className="button" onClick={listAdd}>Agregar</button>
                    </div>
                </div>

                <div className="cont">
                    <ul className="listCont">
                        {doList.map((list) => (
                            <li className={`listContainer ${list.isComplete ? 'completed' : ''}`} key={list.id}>
                                <input
                                    type="checkbox"
                                    checked={list.isComplete}
                                    onChange={() => listComplete(list.id)}
                                />

                                <span>{list.text}</span>

                                <button className="button" onClick={() => listEdit(list.id, prompt("Editar Tarea:", list.text))}>
                                    Editar
                                </button>

                                <button className="button delete" onClick={() => listDelete(list.id)}>Borrar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}