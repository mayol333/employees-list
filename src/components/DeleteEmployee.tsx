import axios from "axios";
import { DeleteEmployeeProps } from "./types";
export const DeleteEmployee = ({ handleModalClose, id, refreshUsers }:DeleteEmployeeProps) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/employes/${id}`);
            const { data } = await axios.get("http://localhost:8000/employes");
            refreshUsers(data);
            handleModalClose();
        } catch (error) {
            console.log(error);
        }
    };
    console.log(id);
    return (
        <div className="buttons-to-bottom">
            <p>Are you sure you want to delete employee?</p>
            <div className="delete-buttons-container">
                <button onClick={handleDelete} className="delete-green-button">
                    delete
                </button>
                <button
                    onClick={handleModalClose}
                    className="cancel-red-button"
                >
                    cancel
                </button>
            </div>
        </div>
    );
};
