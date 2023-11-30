export const Select = ({ placeholder, options, handleSelect, value }) => {
    return (
        <select className="select" onChange={handleSelect}>
            {" "}
            <option value="" selected>
                {placeholder}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
