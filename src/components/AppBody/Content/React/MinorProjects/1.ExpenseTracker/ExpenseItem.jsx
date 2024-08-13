import {useState} from 'react';
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
// const [title, setTitle ] = array;

  const [title, setTitle] = useState(props.title);
  const clickHandler = () =>{
    
    setTitle("Updated!");
  }
  
  return (
    
    <Card className="flex justify-center items-center shadow-2xl p-2 my-2 mx-4 w-[95%] bg-[#4b4b4b]">      
      <ExpenseDate
        date={props.date}
      />
      <div className="mx-4 flex gap-4 items-center justify-start flex-1">
        <h2 className="text-white text-xl flex-1 mx-0 my-4">{title}</h2>
        <div className="text-base font-bold text-white bg-[#40005d] border-white border-2 p-4 px-10 rounded-xl">${props.amount}</div>
      </div>
      <button onClick={clickHandler} className="bg-white rounded-md p-2">Change Title</button>
    </Card>
  )
}

export default ExpenseItem;