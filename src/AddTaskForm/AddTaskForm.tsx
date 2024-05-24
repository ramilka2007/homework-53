import {Tasks} from "../types";
import React, {ChangeEvent, useState} from "react";

interface AddTaskFormProps {
    onSubmit: (tasks: Tasks) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({onSubmit}) => {
    const [newTask, setNewTask] = useState({
        taskName: '',
    });

    const inputField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;

        setNewTask((prevNewTask) => {
            return {
                ...prevNewTask,
                [name]: value,
            }
        });
    };

    const FormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const task: Tasks = {
            ...newTask,
            id: Math.random().toString(),
        }

        onSubmit(task);
    }

    return (
        <form onSubmit={FormSubmit}>
            <input type="text" name="taskName" onChange={inputField}/>
            <button type={"submit"}>Add</button>
        </form>
    );
};

export default AddTaskForm;