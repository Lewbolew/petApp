import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import { CardSection } from './common';
import {MKButton, MKColor, MKIconToggle, getTheme} from 'react-native-material-kit';



class ListItem extends Component {
    render() {
        console.log("PET", this.props.pet);
        const { register_date, transponder } = this.props.pet;
        const theme = getTheme();
        const styles = require('./styles');

        const Cards = React.createClass({
            render(){
                var base64Icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Emoji_u1f408.svg/2000px-Emoji_u1f408.svg.png';
                return (
                    <ScrollView style={styles.scrollView}>
                        <CardSection>
                            <View style={theme.cardStyle}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                <Image source={{uri : base64Icon}} style={{height: 100, width: 100}}/>
                                <View
                                    style={{
                                        padding : 10,
                                    }}
                                >
                                    <View style={{
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Text>
                                            <Text style={{fontWeight: 'bold'}}> Registration date {' '} </Text> {register_date} {'\n'}
                                        </Text>

                                        <Text>
                                            <Text style={{fontWeight: 'bold'}}> Sex {'                            '} </Text>Unknown {'\n'}
                                        </Text>

                                        <Text>
                                            <Text style={{fontWeight: 'bold'}}> Transponder {'          '} </Text>{transponder}
                                        </Text>

                                    </View>
                                </View>
                                </View>
                            </View>

                        </CardSection>
                    </ScrollView>
                )
            }
        });
        return(
            <Cards/>

        );
    }
}

export default ListItem;