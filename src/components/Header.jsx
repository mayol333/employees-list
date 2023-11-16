export const Header = ({ count }) => {
    return (
        <div className="employees-count">
            <h1>Employees</h1>
            <span className="count">({count})</span>
        </div>
    );
};
