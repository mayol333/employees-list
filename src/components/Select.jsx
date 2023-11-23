export const Select = ({ placeholder, options }) => {
    return (
        <select className="select">
            <option value="" disabled selected hidden>
                {placeholder}
            </option>
            {options.map((option, index) => (
                <option key={index} value="">
                    {option}
                </option>
            ))}
        </select>
    );
};
