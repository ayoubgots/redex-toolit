import Counter from './components/Counter';
import Header from './components/Header';
import Auth from "./components/Auth";
import UserPofile from './components/UserProfile'
import { useDispatch,useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  console.log(isAuth)
  return (
    <>
    <Header/>
    {!isAuth && <Auth/>}
    {isAuth && <UserPofile/>}
    <Counter/>
    </>
  );
}

export default App;
