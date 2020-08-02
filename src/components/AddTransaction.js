import React, { useState } from 'react'


const AddTransaction = () => {
    const [income,setIncome]=useState({
        incomeText: "",
        incomeAmount:0,
    });

    const onChangeIncome = (e) => {

        setIncome({...income,[e.target.name]: e.target.value});

        console.log(income);
    }



    const onSubmitIncome = (e) =>{

        e.preventDefault();

    }




return(
    <div className="form-wrapper">
        <form onSubmit={onSubmitIncome}>
        <div className="input-groupe income">

            <input type="text" placeholder="Add Income ...." autoComplete="off" onChange={onChangeIncome}/>
            <input type="number" placeholder="Amount" autoComplete="off" onChange={onChangeIncome} />
            <input type="submit" value="Submit"onChange={onChangeIncome} />

        </div>

        <div className="input-groupe expense">

<input type="text" placeholder="Add Expense ...." autoComplete="off" />
<input type="number" placeholder="Amount" autoComplete="off" />
<input type="submit" value="Submit"/>

</div>
        </form>
    </div>




)
}


export default AddTransaction;