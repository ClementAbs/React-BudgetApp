import React,{createContext, useReducer} from "react"
import AppReducer from "./AppReducer"

const initialState = {

    incomeTrransactions:[ 
        {id:1, incomeText:"Car sold", incomeAmount:15000},
        {id:2, incomeText:"Salary", incomeAmount:5000},
        {id:3, incomeText:"Bonus", incomeAmount:13000},
    ],

    expenseTransactions: [
        {id:3, incomeText:"Rent", incomeAmount:1000},
        {id:4, incomeText:"Bank", incomeAmount:2000},
        {id:5, incomeText:"Clothes", incomeAmount:500},
    ]

};


export const GlobalContext = createContext(initialState);


export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    return(
        <GlobalContext.Provider value={{
        incomeTransactions: state.incomeTransactions, 
        expenseTransactions: state.expenseTransactions
        }} >
       {children}
        </GlobalContext.Provider>
    );

}