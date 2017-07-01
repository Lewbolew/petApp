/**
 * Created by arsen on 22.04.17.
 */
import React, {Component} from 'react';
import {StyleSheet, Image, Dimensions} from  'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {
    Text,
    Form,
    Item,
    Input,
    View,
    Content,
    Label,
    Container,
    Button,
    Header,
    Grid,
    Row,
    Left,
    Icon,
    Body,
    Title,
    Right,
    CheckBox,
    Thumbnail,
    Spinner
} from 'native-base';


class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
        // this.props.email = text;
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
        // this.props.password = text;
    }

    onButtonPress() {
        const {email, password} = this.props;
        console.log(this.props);
        this.props.loginUser({email, password})
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large"/>
        }

        return (
            <Button large full success onPress={this.onButtonPress.bind(this)}>
                <Text>Login</Text>
            </Button>
        );
    }

    render() {

        var {height, width} = Dimensions.get('window');
        return (
            <Container>
                <Content style={{paddingTop: 25}}>
                    <View style={{paddingLeft:  Math.max((width-500)/2, 50), paddingRight:  Math.max((width-500)/2, 50)}}>
                        <View style={{alignItems: 'center'}} >
                            <Image
                                style={{resizeMode:'contain', width: Math.min(width-100, 500)}}
                                source={require('../img/logo.png')}
                            />
                        </View>
                        <Form>
                            <View>
                                <Item floatingLabel highligh>
                                    <Label>Email</Label>
                                    <Input onChangeText={this.onEmailChange.bind(this)}
                                           value={this.props.email}
                                    />
                                </Item>
                            </View>
                            <View style={{paddingTop: 15}}>
                                <Item floatingLabel>
                                    <Label>Password</Label>
                                    <Input defaultsecureTextEntry
                                        secureTextEntry={true}
                                        onChangeText={this.onPasswordChange.bind(this)}
                                        value={this.props.password}
                                    />
                                </Item>
                            </View>
                            <View style={{paddingTop: 40}}>
                                {this.renderButton()}
                            </View>
                        </Form>


                        <Text style={{
                            marginTop: 5,
                            fontSize: 15,
                            alignSelf: 'center',
                            color: 'red'
                        }}>
                            {this.props.error}
                        </Text>

                    </View>
                </Content>
            </Container>
        );
    }
}
const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;
    return {email, password, error, loading}
};
const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 50,
        alignSelf: 'center',
        color: 'red'
    }
});

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);