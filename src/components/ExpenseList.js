import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction"


const ExpenseList = () => {

    const { ExpenseTransactions} = useContext(GlobalContext);

    return(<div className="transactions transactions-expense">
        <h2>Transaction history</h2>
        <ul className="tansaction-list">
        {ExpenseTransactions.map(expenseTransaction => (

<expenseTransaction key={expenseTransaction.id} expenseTransaction={expenseTransaction} />

))}
        </ul>

    </div>)

}

export default ExpenseList;