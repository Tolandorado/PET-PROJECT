import "./Button.scss";

const Button = (callBack) => {
    return (
        <button onClick={callBack} className="button btn-14">New Expense</button>
    )
}

export default Button;