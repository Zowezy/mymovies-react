import './App.css';
import { Header} from './components';
import { Suspense, lazy, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Log from './pages/Auth/Log';
import {Preloader} from './components/loader/index';
import { useDispatch } from 'react-redux';
import { getRequestToken } from './redux/reducers/authReducer';
import Toast from './components/utils/Toast';
const SearchSingle = lazy(()=>import('./pages/Search/SearchSingle'));
const Home = lazy(()=>import('./pages/Home/Home'));
const MultiSearch = lazy(()=>import('./pages/Search/MultiSearch/MultiSearch'));
const Single = lazy(()=>import('./pages/Single/Single'));
const Profile = lazy(()=>import('./pages/Profile/Profile'));
const Actor = lazy(()=>import('./pages/Actor/Actor/Actor'));



function App() {

  const dispatch = useDispatch();

  const catchAllUnhandleErrors = (promise) => {
    debugger;
    alert(promise.reason.response.data.status_message);
  }
  
  useEffect(()=>{
    dispatch(getRequestToken());
    window.addEventListener('unhandledrejection',catchAllUnhandleErrors);
    return () => {
      window.removeEventListener('unhandledrejection',catchAllUnhandleErrors);
    }
  },[dispatchEvent])

  return (
    <div className={"wrapper"}>
      <Header />
      <Toast />
      <Suspense fallback={<Preloader />} >
        <Switch>
          <Route exact path="/home" render={ ()=><Home /> } ></Route>
          <Route exact path="/searchSingle/:type?" render={ ()=><SearchSingle /> } ></Route>
          <Route exact path="/search" render={ ()=><MultiSearch /> } ></Route>
          <Route exact path="/login" render={ ()=><Log /> } ></Route>
          <Route exact path="/Profile" render={ ()=><Profile /> }></Route>
          <Route exact path="/Actor/:id" render={ ()=><Actor /> }></Route>
          <Route path="/single/:type/:id" render={ ()=><Single /> }  ></Route>
          <Redirect from='/' to='/home' />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
