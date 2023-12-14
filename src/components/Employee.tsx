import { formatDate } from "../utils/formatDate";
import { getRandomColor } from "../utils/randomColor";
import { Modal } from "./Modal";
import { useModalState } from "../hooks/modal";
import { EditEmployeeForm } from "./EditEmployeeForm";
import { DeleteEmployee } from "./DeleteEmployee";
import { EmployeeProps } from "./types";
export const Employee = ({
    firstName,
    lastName,
    email,
    profession,
    created,
    updated,
    refreshUsers,
    id,
}:EmployeeProps) => {
    const { modalOpen, handleModalOpen, handleModalClose } = useModalState();
    const {
        modalOpen: deleteModalOpen,
        handleModalOpen: handleDeleteModalOpen,
        handleModalClose: handleDeleteModalClose,
    } = useModalState();
    return (
        <>
            <tr className="table-row">
                <td className="table-data avatar-container">
                    <span
                        style={{
                            backgroundColor: getRandomColor(),
                        }}
                        className="avatar"
                    >
                        {firstName.charAt(0)}
                        {lastName.charAt(0)}
                    </span>
                    {firstName} {lastName}
                </td>
                <td className="table-data">{email}</td>
                <td className="table-data">{profession}</td>
                <td className="table-data">{formatDate(created)}</td>
                <td className="table-data">{formatDate(updated)}</td>
                <td>
                    <button className="edit-button" onClick={handleModalOpen}>
                        <img className="edit-icon" src="/editIcon.png" alt="" />
                    </button>
                </td>
                <td>
                    <button
                        onClick={handleDeleteModalOpen}
                        className="delete-icon"
                    >
                        <img
                            className="delete-icon-img"
                            src="/deleteIcon.png"
                            alt=""
                        />
                    </button>
                </td>
            </tr>
            <Modal modalOpen={modalOpen} handleModalClose={handleModalClose}>
                <EditEmployeeForm
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    profession={profession}
                    refreshUsers={refreshUsers}
                    id={id}
                    handleModalClose={handleModalClose}
                />
            </Modal>
            <Modal
                modalOpen={deleteModalOpen}
                handleModalClose={handleDeleteModalClose}
            >
                <DeleteEmployee
                    id={id}
                    handleModalClose={handleDeleteModalClose}
                    refreshUsers={refreshUsers}
                />
            </Modal>
        </>
    );
};
