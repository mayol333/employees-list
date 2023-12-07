import { useState, useEffect } from "react";
import { SearchInput } from "./components/Input";
import axios from "axios";
import { Select } from "./components/Select";
import { Header } from "./components/Header";
import { AddEmployeeButton } from "./components/AddEmployeeButton";
import { Employee } from "./components/Employee";
import { useModalState } from "./hooks/modal";
import { v4 as uuidv4 } from "uuid";
import { CreateEmployeeForm } from "./components/CreateEmployeeForm";
import { Modal } from "./components/Modal";
export const professionsOptions = [
    "Architect",
    "Financial Analyst",
    "Biologist",
    "Human Resources Manager",
    "Civil Engineer",
];
export const App = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("");
    const { modalOpen, handleModalOpen, handleModalClose } = useModalState();
    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:8000/employes"
                );
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, []);
    const handleSearch = (event) => {
        const { value } = event.target;
        setSearch(value);
    };
    const handleSelect = (event) => {
        const { value } = event.target;
        setSelect(value);
    };
    const submit = async (formState) => {
        try {
            await axios.post("http://localhost:8000/employes", {
                id: uuidv4(),
                firstName: formState.firstName,
                lastName: formState.lastName,
                email: formState.email,
                profession: formState.select,
            });
            const { data } = await axios.get("http://localhost:8000/employes");
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section className="page-background">
            <div className="container">
                <div className="top-bar">
                    <Header count={150} />
                    <AddEmployeeButton handleModalOpen={handleModalOpen} />
                </div>
                <div className="inputs">
                    <div>
                        <SearchInput
                            value={search}
                            handleSearch={handleSearch}
                        />
                    </div>
                    <div className="selects-div">
                        <Select
                            placeholder="Search a profession"
                            options={professionsOptions}
                            value={select}
                            handleSelect={handleSelect}
                        />
                    </div>
                </div>
                <div>
                    <table className="table">
                        <thead className="table-head">
                            <tr>
                                <th className="table-header">Employee name</th>
                                <th className="table-header">Email</th>
                                <th className="table-header">Profession</th>
                                <th className="table-header">Created At</th>
                                <th className="table-header">Updated At</th>
                                <th className="edit-button"></th>
                                <th className="delete-icon"></th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {users
                                .filter((user) => {
                                    return (
                                        user.firstName.includes(search) ||
                                        user.lastName.includes(search)
                                    );
                                })
                                .filter((user) => {
                                    return select === ""
                                        ? true
                                        : user.profession === select;
                                })
                                .map((user) => (
                                    <Employee
                                        key={user.id}
                                        firstName={`${user.firstName}`}
                                        lastName={`${user.lastName}`}
                                        email={user.email}
                                        profession={user.profession}
                                        created={user.createdAt}
                                        updated={user.updatedAt}
                                        refreshUsers={setUsers}
                                        id={user.id}
                                    />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal modalOpen={modalOpen} handleModalClose={handleModalClose}>
                <CreateEmployeeForm submit={submit} />
            </Modal>
        </section>
    );
};
