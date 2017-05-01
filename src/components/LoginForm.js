/**
 * Created by arsen on 22.04.17.
 */
import React, {Component } from 'react';
import {Text, StyleSheet, View, Image} from  'react-native';
import {connect } from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {MKButton, MKColor, MKTextField, mdl, getTheme, appStyles} from 'react-native-material-kit';



class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const { email, password } = this.props;

        this.props.loginUser({ email, password })
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }

        const ColoredRaisedButton = MKButton.coloredButton()
            .withText('Login')
            .withBackgroundColor('green')
            .withOnPress(() => {
                this.onButtonPress.bind(this);
            })
            .build();
        return (
            <Button onPress={this.onButtonPress.bind(this)}  >
                Login
            </Button>
        );
    }
    render(){

        /*


         <Input label="Email"
         placeholder="'email@gmail.com"
         onChangeText={this.onEmailChange.bind(this)}
         value={this.props.email}/>

         <Input
         secureTextEntry
         label="Password"
         placeholder="'password"
         onChangeText={this.onPasswordChange.bind(this)}
         value={this.props.password}
         />

         <Text style={styles.errorTextStyle}>
         {this.props.error}
         </Text>
         */
        const styles = Object.assign({}, appStyles, StyleSheet.create({
            col: {
                flex: 1,
                flexDirection: 'column',
                // alignItems: 'center', // this will prevent TFs from stretching horizontal
                marginLeft: 7, marginRight: 7,
                // backgroundColor: MKColor.Lime,
            },
            textfield: {
                height: 28,  // have to do it on iOS
                marginTop: 32,
            },
            textfieldWithFloatingLabel: {
                height: 48,  // have to do it on iOS
                marginTop: 10,
            },
        }));

        const PasswordInput = mdl.Textfield.textfieldWithFloatingLabel()
            .withPassword(true)
            .withPlaceholder('Password')
            .withHighlightColor(MKColor.Green)
            .withStyle(styles.textfieldWithFloatingLabel)
            .withOnTextChange((e) => console.log('TextChange', e))
            .withOnChangeText((e) => console.log('ChangeText', e))
            .build();

        const Textfield = MKTextField.textfieldWithFloatingLabel()
            .withPlaceholder('Email@gmail.com')
            .withFloatingLabelFont({
                fontSize: 10,
                fontWeight: '200',
            })
            .withHighlightColor(MKColor.Green)
            .withStyle(styles.textfieldWithFloatingLabel)
            .withStyle(styles.textfield)
            .build();

        const ColoredRaisedButton = MKButton.coloredButton()
            .withText('Login')
            .withTextStyle({
                color: 'white',
                alignItems: 'center',
                fontSize: 28
            })
            .withBackgroundColor('green')
            .withOnPress(() => {
                this.onButtonPress.bind(this);
            })
            .build();
        return(
            <View>
                <View style={{
                    height: 150,
                }}>
                </View>
                <Image
                    style={{height: 200, borderRadius: 30}}
                    source={{uri:'https://pp.userapi.com/c615720/v615720567/a5f6/HguQJqm8lI8.jpg'}}
                />
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Textfield style={{height: 100, width: 300}}/>
                    <PasswordInput style={{height: 100, width: 300}}/>

                </View>
                <View style={{
                    width: 300,
                    left: 150,
                }}>
                    <ColoredRaisedButton/>
                </View>
            </View>
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