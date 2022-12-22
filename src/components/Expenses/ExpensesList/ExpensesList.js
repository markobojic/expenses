import "./ExpensesList.scss";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

function ExpensesList({ expenses }) {
    if (expenses.length === 0) {
        return (
            <h3 className="expenses-list__fallback">
                No expenses for selected year
            </h3>
        );
    }

    return (
        <ul className="expenses-list">
            {expenses.map((expense) => (
                <ExpenseItem
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                    key={expense.id}
                />
            ))}
        </ul>
    );
}

export default ExpensesList;
