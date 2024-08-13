import Card from "./Card";
import { expenses } from "./constants";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "./NewExpense/NewExpense";

const ExpenseTracker = () => {

  return (
    <div className="w-[100%] h-[100%]  bg-gray-900 px-6 flex flex-col items-center justify-center">
      <div className="py-5 px-4 w-full flex items-center">
        <span className="text-white text-xl m-auto">Expense Tracker</span>
      </div>
      <NewExpense />
      <Card className="w-[60%] h-[80%] bg-gradient-to-tl from-[#3333331a] to-[#4d4d4d23] flex justify-center items-center flex-col">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        >
        </ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        >
        </ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        >
        </ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        >
        </ExpenseItem>

      </Card>
    </div>
  )
}

export default ExpenseTracker;
