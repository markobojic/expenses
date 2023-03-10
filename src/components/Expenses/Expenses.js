import Card from "../UI/Card";
import { useState } from "react";

import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import "./Expenses.scss";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpenseChart from "./ExpenseChart/ExpenseChart";

function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const expensesFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={expensesFilterHandler}
            />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
