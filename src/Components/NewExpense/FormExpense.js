import React, { useState} from "react";
import "./FormExpense.css";


let FormExpense = (props) => {

    
    const [titleVal, setTitle] = useState('');
    const [amountVal, setAmount] = useState('');
    const [dateVal, setDate] = useState('');


    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
        
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const formSubmit = (event) => {
        event.preventDefault();

        const obj = {
            
            title: titleVal,
            amount: amountVal,
            date: new Date(dateVal)
        }

        props.addData(obj); //  Sending data to parent components which is NewExpense.js

        setDate('');
        setTitle('');
        setAmount('');

    };
    

    return (
        <div className="form-expense">
            <form action="" onSubmit={formSubmit}>
                <div>                   
                    <label>ExpenseTitle</label>
                    <input type="text" className="inpt" value={titleVal} onChange={titleChangeHandler}/>
                </div>

                <div>
                    <label>ExpenseAmount</label>
                    <input type="number" className="inpt" value={amountVal} onChange={amountChangeHandler}/>
                </div>

                <div>
                    <label>ExpenseDate</label>
                    <input type="date" className="inptDate" value={dateVal} onChange={dateChangeHandler}/>
                </div>

                    <div className="btnContainer">
                    <button type="submit" className="btn" >Add Expense</button>
                    </div>
            </form>
        </div>
    );
    
};


export default FormExpense;