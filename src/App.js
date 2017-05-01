import React, {Component} from 'react';
import {Provider} from  'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
// З папки react-native-router-flux/node_modules видалити react-native
import Router from './Router';
import LoginForm from './components/LoginForm';
import  reducers from './reducers';

class App extends Component{
    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
               <Router />

            </Provider>

        );
    }
}
export default App;