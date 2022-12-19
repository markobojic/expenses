import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
        {
            id: "1",
            date: new Date(2022, 11, 16),
            title: "React course",
            amount: 16.0,
        },
        {
            id: "2",
            date: new Date(2022, 10, 25),
            title: "Jakna",
            amount: 360.0,
        },
        {
            id: "3",
            date: new Date(2022, 10, 26),
            title: "Pantalone",
            amount: 320.0,
        },
    ];

    return (
        <div>
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
