/**
 * Created by arsen on 22.04.17.
 */
import React, {Component } from 'react';
import {StyleSheet, Image} from  'react-native';
import {connect } from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Text,Form, Item,Input,View,Content, Label,Container, Button, Header,Grid,Row, Left, Icon, Body, Title, Right, CheckBox, Thumbnail, Spinner} from 'native-base';



class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
        // this.props.email = text;
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
        // this.props.password = text;
    }
    onButtonPress(){
        const { email, password } = this.props;
        console.log(this.props);
        this.props.loginUser({ email, password })
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }

        return (
            <Button large full success onPress={this.onButtonPress.bind(this)}  >
                <Text>Login</Text>
            </Button>
        );
    }
    render(){


        return(
            <Container>
                <Content>
                    <View>
                        <View style={{height: 100}}>
                        </View>
                            <View style={{alignItems: 'center'}} >
                                <Image
                                    style={{resizeMode:'contain', width: 500}}
                                    source={require('../img/logo.png')}
                                />
                            </View>
                        <Form>
                            <View style={{left: 175, width: 250,}}>
                                <Item floatingLabel highligh>
                                    <Label>Email</Label>
                                    <Input onChangeText={this.onEmailChange.bind(this)}
                                           value={this.props.email}
                                    />
                                </Item>
                            </View>
                            <View style={{height: 25}}>
                            </View>
                            <View style={{left: 175, width: 250,}}>
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Input defaultsecureTextEntry
                                           onChangeText={this.onPasswordChange.bind(this)}
                                           value={this.props.password}
                                    />
                                </Item>
                            </View>
                        </Form>


                        <Text style={styles.errorTextStyle}>
                            {this.props.error}
                        </Text>
                        <View style={{height: 60}}>
                        </View>
                        <View style={{width: 250, height: 100, left: 175}}>
                            {this.renderButton()}
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const {email, password, error, loading} = auth;
    return {email, password, error, loading}
};
const styles =  StyleSheet.create({
    errorTextStyle: {
        fontSize:50,
        alignSelf: 'center',
        color: 'red'
    }
});

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);