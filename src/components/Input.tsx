import { SearchInputProps } from "./types";
export const SearchInput = ({ handleSearch, value }:SearchInputProps) => {
    return (
        <input
            onChange={handleSearch}
            className="search-input"
            placeholder="Search by first name, last name, email or profession"
            type="text"
            value={value}
        />
    );
};
