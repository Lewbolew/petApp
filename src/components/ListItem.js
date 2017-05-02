import React, {Component} from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';


class ListItem extends Component {
    render() {
        console.log("PET", this.props.pet);
        const { register_date, transponder } = this.props.pet;
        const styles = require('./styles');

        return(
            <Content>
            <Card>
                <CardItem>
                    <Body>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{height: 100, width: 100}}>
                                <Image style={{height: 100, width: 100}} source={{uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkk1W1xukj5t0IcJBd3axCSdk7OH97M9bxRPtz_P2c2QIZz_pG'}}/>

                            </View>

                            <View style={{
                                left: 30,
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{fontWeight: 'bold',color:'grey'}} >Registration date </Text>
                                <Text style={{fontWeight: 'bold',color:'grey'}} >Sex </Text>
                                <Text style={{fontWeight: 'bold',color:'grey'}} >Transporter </Text>
                            </View>
                            <View style={{
                                left: 40,
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}>
                                <Text> {register_date} {'\n'}</Text>
                                <Text> Unknoun {'\n'}</Text>
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