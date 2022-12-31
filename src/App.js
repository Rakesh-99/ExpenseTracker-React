import React, { useState} from "react";

import Expenses from "./Components/Expenses/Expenses";
import "./App.css";
import NewExpense from './Components/NewExpense/NewExpense';


    let dummyExpense = [
      {
        id: "e2",
        date: new Date(2021, 9, 2),
        title: "Room rent",
        amount: 500,
      },
    ];

const App = () =>{

  
  const [expenses, setExpenses] = useState(dummyExpense);
  

  const childData = (expense) => {    // Reciveing data in the form of object from the child which is NewExpense.js
    const updatedData = [expense, ...expenses]
    setExpenses(updatedData);
    
  }
    
    return (
      <div className>
        <span className="appDiv"><h2>Expense Tracker</h2></span>

        <NewExpense dataFrmChild={childData } />
        
        <Expenses items={ expenses } />
      </div>
    );
};

export default App;