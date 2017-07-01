import React, {Component} from 'react';
import {View, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import {Container, Content, Card, CardItem, Text, Body} from 'native-base';


class ListItem extends Component {
    render() {
        console.log("PET", this.props.pet);
        const {register_date, transponder} = this.props.pet;
        const styles = require('./styles'); 
        var {height, width} = Dimensions.get('window'); 
        return (
            <Content 
                style = {{
                    marginLeft: (width - Math.min(width, 320))/2,
                    marginTop: 5,
                    marginBottom: 2,
                    width: Math.min(width, 320),
                    shadowColor: 'transparent',
            }}>
                <Card style={{
                            shadowColor: 'transparent',
                        }}>
                    <CardItem style={{
                            flex: 1, flexDirection: 'row',
                            paddingLeft: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            shadowColor: 'transparent',
                        }} >
                        <Body>
                        <View style={{
                            flex: 1, 
                            flexDirection: 'row',
                        }}>
                            <View style={{marginLeft: 0, paddingLeft:0, paddingTop: 5, height: 60, width: 60}}>
                                <Image style={{marginLeft: 0, paddingLeft:0, paddingTop: 5, height: 60, width: 60}}
                                       source={require('../img/dog-icon.png')}/>

                            </View>

                            <View style={{
                                paddingLeft: 10,
                                flexDirection: 'column',
                                justifyContent: 'space-between',

                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{
                                        paddingTop: 1,
                                        fontSize: 13, 
                                        fontWeight: 'bold', 
                                        color: 'grey'
                                    }}>
                                        Registration
                                    </Text>
                                    <Text style={{
                                        fontSize: 14,
                                        paddingLeft: 10
                                    }}>
                                        {register_date} {'\n'}
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{
                                        paddingTop: 1,
                                        fontSize: 13,
                                        fontWeight: 'bold', 
                                        color: 'grey'
                                    }}>
                                        Sex
                                    </Text>
                                    <Text style={{
                                        fontSize: 14,
                                        paddingLeft: 10
                                    }}>
                                        Unknown {'\n'}
                                    </Text>
                                    
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{
                                        paddingTop: 1,
                                        fontSize: 13,
                                        fontWeight: 'bold', 
                                        color: 'grey'
                                    }}>
                                        Id
                                    </Text>
                                    <Text style={{ 
                                        fontSize: 14,
                                        paddingLeft: 10
                                    }}>
                                        {transponder}
                                    </Text>
                                </View>
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