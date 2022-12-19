import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.scss";

function Expenses({ expenses }) {
    const renderItems = expenses.map((expense) => {
        return (
            <ExpenseItem
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
                key={expense.id}
            />
        );
    });

    return <Card className="expenses">{renderItems}</Card>;
}

export default Expenses;
