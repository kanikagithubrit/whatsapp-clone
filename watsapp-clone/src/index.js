import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer , { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState}
      reducer={reducer} >
         <App />
    </StateProvider>  
   
  </React.StrictMode>,  //state provider is basically like a data layer so it surrounds the app and what we can do is we can push info into the data layer and we can pull it from any component
                        // so our goal here is that when we sign in we push the user into the data layer and we pull the user fom the data layer whenever we need it

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
