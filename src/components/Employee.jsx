import { formatDate } from "../utils/formatDate";
import { getRandomColor } from "../utils/randomColor";
export const Employee = ({
    firstName,
    lastName,
    email,
    profession,
    created,
    updated,
}) => {
    return (
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
        </tr>
    );
};
