import { useState } from "react";

import "./ExpenseForm.scss";
import Button from "../../Shared/Button/Button";
import Input from "../../Shared/Input/Input";

function ExpenseForm({ onCancelEdit, onAddExpense }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const payload = {
            title,
            amount,
            date: new Date(date),
            id: Math.random().toString(),
        };

        setTitle("");
        setAmount("");
        setDate("");

        onAddExpense(payload);
    };

    return (
        <form className="new-expense" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <Input
                    label="Title"
                    type="text"
                    value={title}
                    onChange={titleChangeHandler}
                />
                <Input
                    label="Amount"
                    type="number"
                    value={amount}
                    onChange={amountChangeHandler}
                    min="0.1"
                    step="0.1"
                />
                <Input
                    label="Date"
                    type="date"
                    value={date}
                    onChange={dateChangeHandler}
                    min="2019-01-01"
                    max="2022-12-31"
                />
            </div>
            <div className="new-expense__actions">
                <Button type="secondary" text="Cancel" onClick={onCancelEdit} />
                <Button type="primary" text="Add Expense" />
            </div>
        </form>
    );
}

export default ExpenseForm;
