import React, {Component} from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body} from 'native-base';


class ListItem extends Component {
    render() {
        console.log("PET", this.props.pet);
        const {register_date, transponder} = this.props.pet;
        const styles = require('./styles');

        return (
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                        <View style={{
                            flex: 1, flexDirection: 'row',
                        }}>
                            <View style={{height: 70, width: 70}}>
                                <Image style={{height: 70, width: 70}}
                                       source={require('../img/dog-icon.png')}/>

                            </View>

                            <View style={{
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{fontWeight: 'bold', color: 'grey'}}>Registration</Text>
                                <Text style={{fontWeight: 'bold', color: 'grey'}}>Sex</Text>
                                <Text style={{fontWeight: 'bold', color: 'grey'}}>ID</Text>
                            </View>
                            <View style={{
                                flexDirection: 'column',
                                paddingLeft: 10,
                                justifyContent: 'space-between',
                            }}>
                                <Text> {register_date} {'\n'}</Text>
                                <Text> Unknown {'\n'}</Text>
                                <Text> {transponder}</Text>
                            </View>
                        </View>
                        </Body>
                    </CardItem>
                </Card>

            </Content>


        );
    }
}


export default ListItem;