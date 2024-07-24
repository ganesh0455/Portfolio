function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className="flex justify-center items-center shadow-2xl p-2 my-2 mx-4 w-[70%] rounded-xl bg-[#4b4b4b]">
      <div className="flex flex-col w-24 h-24 border-2 border-white bg-[#2a2a2a] text-white rounded-xl items-center justify-center">
        <div className="text-xs font-bold">{month}</div>
        <div className="text-xs">{year}</div>
        <div className="text-2xl font-bold">{day}</div>
      </div>
      <div className="mx-4 flex gap-4 items-center justify-start flex-1">
        <h2 className="text-white text-xl flex-1 mx-0 my-4">{props.title}</h2>
        <div className="text-base font-bold text-white bg-[#40005d] border-white border-2 p-4 px-10 rounded-xl">${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;