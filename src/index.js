import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  App from './App';
//import BtnClick from './learning/src/learn'
//import Add from './learning/src/calci'
//import {App} from './learning/src/Person'
import Candidate from './learning/src/MiniProject'
import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';
//import Student from './learning/src/name'
import registerServiceWorker from './registerServiceWorker';

runWithAdal(authContext, () => {
    console.log("ankit");
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
});
