import { Select } from "./Select";
import {professionsOptions } from "../App";
import { ChangeEvent, ChangeEventHandler, FormEventHandler, useState } from "react";
import axios from "axios";
import { EditEmployeeFormProps } from "./types";
export const EditEmployeeForm = ({
    firstName,
    lastName,
    email,
    profession,
    refreshUsers,
    id,
    handleModalClose,
}:EditEmployeeFormProps) => {
    const [select, setSelect] = useState(profession);
    const [form, setForm] = useState({
        firstName: firstName,
        lastName: lastName,
        email: email,
    });
    const handleSelect:ChangeEventHandler<HTMLSelectElement> = (event) => {
        const { value } = event.target;
        setSelect(value);
    };
    const handleForm = (key:string) => (event:ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setForm({ ...form, [key]: value });
    };
    const handleSubmit:FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        if (!form.firstName || !form.lastName || !form.email || !select) {
            return;
        }
        try {
            await axios.patch(`http://localhost:8000/employes/${id}`, {
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                profession:select,
            });
            const { data } = await axios.get("http://localhost:8000/employes");
            refreshUsers(data);
            handleModalClose();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="modal-form">
            <input
                className="search-input"
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleForm("firstName")}
            />
            <input
                className="search-input"
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleForm("lastName")}
            />
            <input
                className="search-input"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleForm("email")}
            />
            <Select
                placeholder="Search a profession"
                options={professionsOptions}
                value={select}
                handleSelect={handleSelect}
            />
            <button className="send-form-button">submit</button>
        </form>
    );
};
