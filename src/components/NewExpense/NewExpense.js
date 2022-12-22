import { useState } from "react";

import Card from "../UI/Card";
import Button from "../Shared/Button/Button";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.scss";

function NewExpense({ onSaveExpense }) {
    const [editMode, setEditMode] = useState(false);

    const startEditingHandler = () => {
        setEditMode(true);
    };

    const cancelEditHandler = () => {
        setEditMode(true);
    };

    const onSaveExpenseHandler = (expense) => {
        onSaveExpense(expense);
        setEditMode(false);
    };

    let className = "new-expense__wrapper add-button";

    let content = (
        <Button
            type="primary"
            text="Add Expense"
            onClick={startEditingHandler}
        />
    );

    if (editMode) {
        content = (
            <ExpenseForm
                onCancelEdit={cancelEditHandler}
                onAddExpense={onSaveExpenseHandler}
            />
        );
        className = "new-expense__wrapper";
    }

    return <Card className={className}>{content}</Card>;
}

export default NewExpense;
