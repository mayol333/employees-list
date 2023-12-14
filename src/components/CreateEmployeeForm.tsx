import { Select } from "./Select";
import { professionsOptions } from "../App";
import { ChangeEvent, ChangeEventHandler, FormEventHandler, useState } from "react";
import { CreateEmployeeFormProps } from "./types";
export const CreateEmployeeForm = ({ submit }:CreateEmployeeFormProps) => {
    const [select, setSelect] = useState("");
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const handleSelect:ChangeEventHandler<HTMLSelectElement> = (event) => {
        const { value } = event.target;
        setSelect(value);
    };
    const handleForm = (key:string) => (event:ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setForm({ ...form, [key]: value });
    };
    const handleSubmit:FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (!form.firstName || !form.lastName || !form.email || !select) {
            return;
        }
        submit({ ...form, select });
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
