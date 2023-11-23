import { useState, useEffect } from "react";
import { SearchInput } from "./components/Input";
import axios from "axios";
import { Select } from "./components/Select";
import { Header } from "./components/Header";
import { AddEmployeeButton } from "./components/AddEmployeeButton";
import { Employee } from "./components/Employee";
const professionsOptions = [
    "Architect",
    "Financial Analyst",
    "Biologist",
    "Human Resources Manager",
    "Civil Engineer",
];
export const App = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
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
    return (
        <section className="page-background">
            <div className="container">
                <div className="top-bar">
                    <Header count={150} />
                    <AddEmployeeButton />
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
                                .map((user) => (
                                    <Employee
                                        key={user.id}
                                        name={`${user.firstName} ${user.lastName}`}
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
        </section>
    );
};
