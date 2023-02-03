import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from './redux/configStore';
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeTemplate from './Pages/Template/HomeTemplate';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import 'antd/dist/reset.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const history: any = createBrowserHistory();
root.render(
  <>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route path='home' element={<Home />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>

        </Routes> 

      </HistoryRouter>
    </Provider>
  </>
);


