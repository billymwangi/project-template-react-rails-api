import React  from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({expenses, deleteExpense}) {
    

    
  return (
    <ul className='list-group'>
        {expenses.map((expense) => 
        <ExpenseItem key ={expense.id} 
                    id ={expense.id}
                    name= {expense.name}
                    cost={expense.cost}
                    deleteExpense={deleteExpense}/>)}
    </ul>
  )
}

export default ExpenseList