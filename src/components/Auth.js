import classes from './Auth.module.css';
import { authoActions } from '../store/Authentification-Slice';
import { useDispatch, useSelector } from 'react-redux';



const Auth = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  const loginHandler = (event) =>{
      event.preventDefault()
      dispatch(authoActions.login())
  }
  console.log(isAuth)
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
