import "./Input.scss";

function Input({ label, type, value, onChange, ...rest }) {
    return (
        <div className="form-control">
            <label htmlFor={label}>{label}</label>
            <input
                value={value}
                id={label}
                type={type}
                onChange={onChange}
                {...rest}
            />
        </div>
    );
}

export default Input;
