import Card from "../../UI/Card";
import "./ExpenseDate.scss";

function ExpenseDate({ date }) {
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return (
        <Card className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </Card>
    );
}

export default ExpenseDate;
