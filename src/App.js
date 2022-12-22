import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DATA = [
    {
        id: "1",
        date: new Date(2022, 11, 16),
        title: "React course",
        amount: 16.0,
    },
    {
        id: "2",
        date: new Date(2022, 10, 26),
        title: "Pantalone",
        amount: 350.0,
    },
];

function App() {
    const [expenses, setExpenses] = useState(DATA);

    const addExpenseHandler = (expense) => {
        setExpenses((state) => {
            return [expense, ...state];
        });
    };

    return (
        <div>
            <NewExpense onSaveExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
