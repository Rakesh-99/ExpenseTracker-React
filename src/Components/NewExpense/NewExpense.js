import React from "react";
import "./NewExpense.css";
import FormExpense from "./FormExpense";

let NewExpense = (props)=>{

    const dataRcv = (enteredExpenseData) => {    // Reciveing data from the FromExpense.js in the form of object in event argument
        
        const expenseData = {
          ...enteredExpenseData, // Store the event object in an object using spread operator
            id: Math.random().toString()
        };

        props.dataFrmChild(expenseData);    // Sending data (the data is the form of obj) to parent components which is App.jsx
    }
    
    return (
        <div>
            <FormExpense addData={ dataRcv} />
            
        </div>
    );
}

export default NewExpense;
