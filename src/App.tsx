import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex gap-3">
        <button
          className="py-2 px-3 border border-red-500 rounded-md"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <div>{count}</div>
        <button
          className="py-2 px-3 border border-blue-500 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="py-2 px-3 border border-blue-500 rounded-md"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by value
        </button>
      </div>
    </>
  );
}

export default App;
