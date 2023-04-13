import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const classes = "expenses " + props.className;

  const [selectedYear, setSelectedYear] = useState("2020");

  const getYear = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className={classes}>
        <ExpensesFilter selected={selectedYear} onChangeYear={getYear} />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
