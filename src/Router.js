import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PetList from './components/PetList';
import PetCreate from './components/PetCreate';
import CameraView from './components/CameraView';

const RouterComponent = () => {
    return(
        <Router sceneStyle={{paddingTop:65, marginBottom: 0}}>

            <Scene key="auth" >
                <Scene key="login" component={LoginForm} title="Please Log" />
            </Scene>

            <Scene key="main">
                <Scene
                    key="petList"
                    component={PetList}
                    title="Pets"
                    leftTitle="Logout"
                    rightTitle="Add"
                    onLeft={() => this.props.logoutUser()}
                    onRight={() => Actions.petCreate()}
                    initial/>
                <Scene key="petCreate" component={PetCreate} title="Add an animal"/>
                <Scene key="сameraView" component={CameraView} title="Make photo"/>
            </Scene>

        </Router>
    )

};

export default RouterComponent;