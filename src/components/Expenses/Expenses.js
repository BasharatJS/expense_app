import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    let expensesContent = <p style={{textAlign: 'center', fontSize: 20, color:'white'}}>No expenses found</p>
    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} />
    ))
    }
    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />

                {expensesContent}


                {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
                {filteredExpenses.length > 0 && 
                    filteredExpenses.map((expense) => (
                        <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} />
                ))} */}


                {/* by using ternary opertaor */}

                {/* {filteredExpenses.length === 0 ? (<p>No expense found</p>) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} />
                    ))
                )} */}

                {/* <ExpenseItem 
                    title={props.items[0].title} 
                    amount={props.items[0].amount} 
                    date={props.items[0].date}>
                </ExpenseItem>
                <ExpenseItem 
                    title={props.items[1].title} 
                    amount={props.items[1].amount} 
                    date={props.items[1].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={props.items[2].title} 
                    amount={props.items[2].amount} 
                    date={props.items[2].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={props.items[3].title} 
                    amount={props.items[3].amount} 
                    date={props.items[3].date}>
                </ExpenseItem> */}

            </Card>
        </div>
    )
}

export default Expenses;