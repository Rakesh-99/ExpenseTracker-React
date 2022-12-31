import React from "react";
import ItemExpense from "./ItemExpense";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expensesBox">
      {props.items.map((expense) => (
        <ItemExpense
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
