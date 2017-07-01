import React, {Component} from 'react';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {petUpdate, petCreate} from '../actions';
import {
    CardItem,
    Body,
    Card,
    Content,
    Badge,
    Icon,
    Left,
    Container,
    Item,
    Input,
    Button,
    Right,
    Text,
    View,
    Separator,
    Radio,
    ListItem,
    CheckBox
} from 'native-base';
import myTheme from '../Themes/myTheme.js';
import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';

//-------------------------------------------------------------------


exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
    {
        title: 'navigator.geolocation',
        render: function (): React.Element<any> {
            return <GeolocationExample />;
        },
    }
];


//---------------------------------------------------------------------


class PetCreate extends Component {
    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
        longitude: 'lon',
        latitude: 'lat',
        sex: 'Male',
        animal: 'Dog',
        motherhood: 'Pregnant',
        healthConditione: 'Normal',
        size: 'Small',
        puppy: false, 
        sterilized: false,
        proprietary: false,
        skin: false,
        lame: false,
        Breed: '',
        Alias: '',
        Color: ''
        

    };

    /*constructor(props) {
        super(props);
        this.props = {
            sex: null,
            catOrDog: null,
            motherhood: null,
            healthCondition: null,
            size: 'small',
            additionalFeatures: {
                puppy: false,
                sterilized: false,
                proprietary: false
            },
            problems: [],
            breed: null,
            puppy: false,

        };
    }*/

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            (error) => 1,//alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var longitude = position.coords.longitude;
            this.setState({longitude});
            var latitude = position.coords.latitude;
            this.setState({latitude});
        });
    }

    componentWillUnmount() {
        this.watchID != null && navigator.geolocation.clearWatch(this.watchID);
    }

    onButtonPress() {
        const {user, name, phone, shift} = this.props;
        this.props.petCreate({user, name, phone, shift : shift || 'Monday'})
    }

    render() {
        var {height, width} = Dimensions.get('window'); 
        return (
            <Container style={{
                marginTop: 0,
                backgroundColor:'#ebeef0',
            }}>
                <Content style={{
                    backgroundColor:'#fff', 
                    marginLeft: (width - Math.min(width, 300))/2,
                    width: Math.min(width, 300)
                }} showsVerticalScrollIndicator={false}   >

                    <TouchableOpacity
                        style={{}}
                        onPress={() => Actions.сameraView()}
                      >
                        <Text style={{fontSize: 15, color: 'grey'}}>Photo</Text>
                    </TouchableOpacity>

                    <Separator bordered style={{height: 60}}> 
                        <Text style={{fontSize: 15, color: 'grey'}}>COORDINATES</Text>
                    </Separator>

                    <ListItem>
                        <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}>

                            <View style={{
                                flex: 0.5,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                borderRightWidth: 1
                            }}>
                                <Text style={{paddingLeft: 30}}>
                                    {
                                        this.state.longitude != "lon" ? (Math.round(this.state.longitude * 1000) / 1000) : "lon"
                                    }
                                </Text>
                            </View>
                           <View style={{
                                flex: 0.5,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}>
                                <Text style={{paddingLeft: 30}}>
                                    {
                                        this.state.latitude != "lat" ? (Math.round(this.state.latitude * 1000) / 1000) : "lat"
                                    }
                                </Text>
                            </View>
                        </View>
                    </ListItem>
                    <Separator bordered style={{height: 20}}>
                    </Separator>
                    <ListItem>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>

                            <View style={{
                                flex: 0.5,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}>
                                <Radio selected={ this.state.sex === 'Male' }  
                                    theme={myTheme}
                                    onPress={(value) => {this.setState({sex:'Male'}) } }/>
                                <Text style={{paddingLeft: 20}}>Male</Text>
                            </View>
                           <View style={{
                                flex: 0.5,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}>
                                <Radio selected={ this.state.sex === 'Female' }
                                      onPress={(value) => {this.setState({sex:'Female'}) } }/>
                                <Text style={{paddingLeft: 20}}>Female</Text>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>

                            <View style={{
                                flex: 0.5,
                                flexDirection: 'row',
                                justifyContent: 'flex-start', 
                            }}>
                                <Radio selected={ this.state.animal === 'Dog' }      
                                        onPress={(value) => {this.setState({animal:'Dog'}) } }/>
                                <Text style={{paddingLeft: 20}}>Dog</Text>
                            </View>
                           <View style={{
                                flex: 0.5,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}>
                                <Radio selected={ this.state.animal === 'Cat' }
                                      onPress={(value) => {this.setState({animal:'Cat'}) } }/>
                                <Text style={{paddingLeft: 20}}>Cat</Text>
                            </View>
                        </View>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={this.state.puppy} 
                                onPress={(value) => {this.setState({puppy:!this.state.puppy}) } }/>
                        <Body>
                            <Text>Puppy</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={this.state.sterilized} 
                                onPress={(value) => {this.setState({sterilized:!this.state.sterilized}) } }/>
                        <Body>
                            <Text>Sterilized</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={this.state.proprietary} 
                                onPress={(value) => {this.setState({proprietary:!this.state.proprietary}) } }/>
                        <Body>
                            <Text>Proprietary</Text>
                        </Body>
                    </ListItem>
                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>MOTHERHOOD</Text>
                    </Separator>
                    <ListItem>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                        }}>

                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingBottom: 8
                            }}>
                                <Radio selected={ this.state.motherhood === 'Pregnant' }      
                                        onPress={(value) => {this.setState({motherhood:'Pregnant'}) } }/>
                                <Text style={{paddingLeft: 20}}>Pregnant</Text>
                            </View>
                           <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingTop: 8,
                            }}>
                                <Radio selected={ this.state.motherhood === 'Feeding' }
                                        onPress={(value) => {this.setState({motherhood:'Feeding'}) } }/>
                                <Text style={{paddingLeft: 20}}>Feeding</Text>
                            </View>
                        </View>
                    </ListItem>

                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>PROBLEMS</Text>
                    </Separator>

                    <ListItem>
                        <CheckBox checked={this.state.skin} 
                                onPress={(value) => {this.setState({skin:!this.state.skin}) } }/>
                        <Body>
                            <Text>Skin</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={this.state.lame} 
                                onPress={(value) => {this.setState({lame:!this.state.lame}) } } />
                        <Body>
                            <Text>Lame</Text>
                        </Body>
                    </ListItem>
                    
                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>HEALTH CONDITION</Text>
                    </Separator>
                    <ListItem>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                        }}>

                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingBottom: 8
                            }}>
                                <Radio selected={ this.state.healthConditione === 'Exhausted' }      
                                        onPress={(value) => {this.setState({healthConditione:'Exhausted'}) } }/>
                                <Text style={{paddingLeft: 20}}>Exhausted</Text>
                            </View>
                           <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingTop: 8,
                                paddingBottom: 8
                            }}>
                                <Radio selected={ this.state.healthConditione === 'Thin' }
                                      onPress={(value) => {this.setState({healthConditione:'Thin'}) } }/>
                                <Text style={{paddingLeft: 20}}>Thin</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingTop: 8,
                                paddingBottom: 8
                            }}>
                                <Radio selected={ this.state.healthConditione === 'Normal' }      
                                        onPress={(value) => {this.setState({healthConditione:'Normal'}) } }/>
                                <Text style={{paddingLeft: 20}}>Normal</Text>
                            </View>
                           <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingTop: 8,
                                paddingBottom: 8
                            }}>
                                <Radio selected={ this.state.healthConditione === 'Fat' }
                                      onPress={(value) => {this.setState({healthConditione:'Fat'}) } }/>
                                <Text style={{paddingLeft: 20}}>Fat</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingTop: 8
                            }}>
                                <Radio selected={ this.state.healthConditione === 'Adiposity' }      
                                        onPress={(value) => {this.setState({healthConditione:'Adiposity'}) } }/>
                                <Text style={{paddingLeft: 20}}>Adiposity</Text>
                            </View>
                        </View>
                    </ListItem>
                    
                    <Item underline style={{height: 60}}>
                        <Input
                            placeholder="Breed"
                            value={this.props.breed}

                            onChangeText={value => this.props.petUpdate({prop: 'breed', value})
                            }/>
                    </Item>
                    <Item underline style={{height: 60}}>
                        <Input
                            placeholder="Alias"
                            value={this.props.alias}

                            onChangeText={value => this.props.petUpdate({prop: 'alias', value})
                            }/>
                    </Item>
                    <Item underline style={{height: 60}}>
                        <Input
                            placeholder="Color"
                            value={this.props.color}

                            onChangeText={value => this.props.petUpdate({prop: 'color', value})
                            }/>
                    </Item>
                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>ANIMAL SIZE</Text>
                    </Separator>

                    <ListItem>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                        }}>

                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingBottom: 8
                            }}>
                                <Radio selected={ this.state.size === 'Small' }      
                                        onPress={(value) => {this.setState({size:'Small'}) } }/>
                                <Text style={{paddingLeft: 20}}>Small (up to 45cm)</Text>
                            </View>
                           <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingTop: 8,
                                paddingBottom: 8
                            }}>
                                <Radio selected={ this.state.size === 'Medium' }
                                      onPress={(value) => {this.setState({size:'Medium'}) } }/>
                                <Text style={{paddingLeft: 20}}>Medium (45cm-65cm)</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingTop: 8,
                                paddingBottom: 8
                            }}>
                                <Radio selected={ this.state.size === 'Large' }      
                                        onPress={(value) => {this.setState({size:'Large'}) } }/>
                                <Text style={{paddingLeft: 20}}>Large (from 65cm)</Text>
                            </View>
                        </View>
                    </ListItem>
                    <Separator bordered style={{height: 40}}>
                    </Separator>
                    <Button block large success onPress={this.onButtonPress.bind(this)}>
                        <Text style={{fontSize: 20}}> Register</Text>
                    </Button>
                </Content>
            </Container>

        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift, sex, catOrDog, motherhood, healthCondition, size, additionalFeatures, problems, puppy} = state.petForm;
    const user = state.auth.user;
    return {user, name, phone, shift, sex, catOrDog, motherhood, healthCondition, size, additionalFeatures, problems, puppy};
};

var styles = StyleSheet.create({
    title: {
        fontWeight: '500',
    },
});
export default connect(mapStateToProps, {petUpdate, petCreate})(PetCreate);