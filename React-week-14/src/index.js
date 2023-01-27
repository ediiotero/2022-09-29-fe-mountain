import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateCounter from './routes/StateCounter';
import StateColor from './routes/StateColor';
import StateSample from './routes/StateSample';
import ClickWord from './routes/ClickWord';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="color" element={<StateColor />}/>
        <Route path="count" element={<StateCounter />}/>
        <Route path="sample" element={<StateSample />}/>
        <Route path="word" element={<ClickWord />}/>
      </Routes>
    </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
