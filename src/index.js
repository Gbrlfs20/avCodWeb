import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PsiPage from './Routes/Psicologos/PsiPage';
import Navegation from './Componentes/Navegation/Navegation';
import UserList from './Routes/Users/userList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>  

            <Navegation></Navegation>

            <Routes>

                  <Route path= '/Home' element= {<App/>}> 

                  </Route>

                  <Route path= '/psiInfo' element= {<PsiPage/>}> 

                  </Route>

                  <Route path= '/users' element= {<UserList/>}> 

</Route>



            </Routes>

      </BrowserRouter>
  </React.StrictMode>
);







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


