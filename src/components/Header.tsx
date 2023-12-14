import { HeaderProps } from "./types";
export const Header = ({ count }:HeaderProps) => {
    return (
        <div className="employees-count">
            <h1>Employees</h1>
            <span className="count">({count})</span>
        </div>
    );
};
