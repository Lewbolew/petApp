import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PetList from './components/PetList';
import PetCreate from './components/PetCreate';

const RouterComponent = () => {
    return(
        <Router sceneStyle={{paddingTop:65}}>

            <Scene key="auth" >
                <Scene key="login" component={LoginForm} title="Please Log" />
            </Scene>

            <Scene key="main">
                <Scene
                    key="petList"
                    component={PetList}
                    title="Pets"
                    rightTitle="Add"
                    onRight={() => Actions.petCreate()}
                    initial/>
                <Scene key="petCreate" component={PetCreate} title="Add an animal"/>
            </Scene>

        </Router>
    )

};

export default RouterComponent;