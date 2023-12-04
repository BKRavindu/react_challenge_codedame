/*

Ed has just started learning react, he seems to have run into a roadblock when 
trying to console.log the latest state of count . 
It always shows the previous button's state instead of the current value.

Can you find out and understand why his code is not working as 
Ed Expected & fix it for him.

NOTE: The test cases for this lab will 
pass if you attempt to increment the count when 
console logging, however that is not the right solution for this lab. 
Think about how react state updates when a setter function is called


*/






import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="card">{count}</div>
			<button
				id="increment"
				data-testid="incrementBtn"
				onClick={() => {
					const newCount = count + 1
					setCount(newCount);

					console.log(`newCount: ${newCount}`);
				}}
			>
				Increment
			</button>
		</>
	);
}

export default App;

