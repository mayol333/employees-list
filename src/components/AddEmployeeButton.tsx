import { AddEmployeeButtonProps } from "./types";
export const AddEmployeeButton = ({ handleModalOpen }:AddEmployeeButtonProps) => {
    return (
        <button onClick={handleModalOpen} className="add-employee-button">
            +
        </button>
    );
};
