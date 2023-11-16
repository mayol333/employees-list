import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import { AddEmployeeButton } from "./components/AddEmployeeButton";
export const App = () => {
    const [users, setUsers] = useState([]);
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
    return (
        <section className="page-background">
            <div className="container">
                <div className="top-bar">
                    <Header count={150} />
                    <AddEmployeeButton />
                </div>
            </div>
        </section>
    );
};
