import { useState, useEffect } from "react";
import { SearchInput } from "./components/Input";
import axios from "axios";
import { Select } from "./components/Select";
import { Header } from "./components/Header";
import { AddEmployeeButton } from "./components/AddEmployeeButton";
import { Employee } from "./components/Employee";
import { useModalState } from "./hooks/modal";
import { CreateEmployeeForm } from "./components/CreateEmployeeForm";
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
                                    />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div
                className={`modal-background ${modalOpen ? "open" : "closed"}`}
            >
                <div className="modal">
                    <span
                        onClick={handleModalClose}
                        className="modal-close-button"
                    >
                        X
                    </span>
                    <CreateEmployeeForm />
                </div>
            </div>
        </section>
    );
};
