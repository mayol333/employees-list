export const Employee = ({ name, email, profession, created, updated }) => {
    return (
        <tr className="table-row">
            <td className="table-data">{name}</td>
            <td className="table-data">{email}</td>
            <td className="table-data">{profession}</td>
            <td className="table-data">{created}</td>
            <td className="table-data">{updated}</td>
        </tr>
    );
};
