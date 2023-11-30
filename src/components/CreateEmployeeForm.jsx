import { Select } from "./Select";
import { professionsOptions } from "../App";
import { useState } from "react";
export const CreateEmployeeForm = () => {
    const [select, setSelect] = useState("");
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const handleSelect = (event) => {
        const { value } = event.target;
        setSelect(value);
    };
    const handleForm = (key) => (event) => {
        const { value } = event.target;
        setForm({ ...form, [key]: value });
    };
    return (
        <form className="modal-form">
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
