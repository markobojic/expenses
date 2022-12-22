import "./Button.scss";

function Button({ type, text, onClick }) {
    const className = `button button__${type}`;

    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    );
}

export default Button;
