import classes from './Counter.module.css';
import { counterActions } from '../store/Counter-Slice';
import { useSelector, useDispatch} from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter);
  const incrementHandler = () =>{
    dispatch(counterActions.increment());
  }
  const decrementHandler = () =>{
    dispatch(counterActions.decrement());
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleHandler())

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>increase by 5</button>
    </main>
  );
};

export default Counter;
