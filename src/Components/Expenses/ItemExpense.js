import React from "react";
import "./ItemExpense.css";
import DateExpense from "./DateExpense";
import Card from "../UI/Card";

function ItemExpense(props) {
  return (
    <Card className="box">
      <div>
        <DateExpense date={new Date( props.date )} />
      </div>

      <div className="title">
        <h3> { props.title } </h3>
      </div>
      <div className="doller">
        <h5> ${ props.amount } </h5>
      </div>
    </Card>
  );
}
export default ItemExpense;
