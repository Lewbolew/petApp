import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {petUpdate, petCreate} from '../actions';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from 'react-native-check-box'
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
    //CheckBox
} from 'native-base'
    ;

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
    };

    floatParser(str) {
        a = this.state.lastPosition.substr(this.state.lastPosition.search('longitude'), this.state.lastPosition.search('longitude') +8)
        return a;
    }
    constructor(props) {
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
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
    }

    componentWillUnmount() {
        this.watchID != null && navigator.geolocation.clearWatch(this.watchID);
    }

    onButtonPress() {
        const {user, name, phone, shift, breed, alias, color, birth, sex} = this.props;
        this.props.petCreate({user, name, phone, breed, alias, color, birth, sex, shift: shift || 'Monday'})
    }

    render() {
        return (
            <Container>
                <Content>
                    {/*<View>
                        <Text>
                            <Text style={styles.title}>Current position: </Text>
                            {this.floatParser(this.state.lastPosition)}
                        </Text>
                    </View>*/}
                    <ListItem>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}
                            <RadioForm
                                radio_props={[
                                    {label: 'Male', value: 0 },
                                    {label: 'Female', value: 1 }
                                ]}
                                initial = {0}
                                formHorizontal={true}
                                labelWrapStyle={{
                                    padding: 50
                                }}
                                labelStyle={{fontSize: 15}}
                                buttonSize={10}
                                buttonOuterSize={20}
                                borderWidth={1}
                                onPress={(value) => {this.setState({value:value})}}
                                buttonWrapStyle={{marginLeft: 30}}

                            />
                        </View>
                    </ListItem>
                    <ListItem>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>
                            <RadioForm
                              radio_props={[
                                  {label: 'Dog', value: 0 },
                                  {label: 'Cat', value: 1 }
                                ]}
                                initial = {0}
                              formHorizontal={true}
                                labelStyle={{fontSize: 15}}
                                buttonSize={10}
                                buttonOuterSize={20}
                                borderWidth={1}
                              onPress={(value) => {this.setState({value:value})}}
                              buttonWrapStyle={{marginLeft: 0}}

                            />
                        </View>
                    </ListItem>

                    <ListItem>
                        <CheckBox
                            style={{flex: 1}}
                            onClick={()=>console.log("Puppy")}
                            isChecked={false}
                            rightTextStyle={{
                                fontSize: 15,
                                color: "black"
                            }}
                            rightText={"Puppy"}
                        />
                    </ListItem>
                    <ListItem>
                        <CheckBox
                            style={{flex: 1}}
                            onClick={()=>console.log("Puppy")}
                            isChecked={false}
                            rightTextStyle={{
                                fontSize: 15,
                                color: "black"
                            }}
                            rightText={"Sterilized"}
                        />
                    </ListItem>
                    <ListItem>
                        <CheckBox
                            style={{flex: 1}}
                            onClick={()=>console.log("Puppy")}
                            isChecked={false}
                            rightTextStyle={{
                                fontSize: 15,
                                color: "black"
                            }}
                            rightText={"Proprietary"}
                        />
                    </ListItem>
                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>MOTHERHOOD</Text>
                    </Separator>
                    <ListItem>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>
                            <RadioForm
                                radio_props={[
                                  {label: 'Pregnant', value: 0 },
                                  {label: 'Feeding', value: 1 }
                                ]}
                                formHorizontal={false}
                                labelStyle={{fontSize: 15}}
                                buttonSize={10}
                                buttonOuterSize={20}
                                labelWrapStyle={{paddingBottom:10}}
                                borderWidth={1}
                                onPress={(value) => {this.setState({value:value})}}
                            />
                        </View>
                    </ListItem>

                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>PROBLEMS</Text>
                    </Separator>

                    <ListItem>
                        <CheckBox
                            style={{flex: 1}}
                            onClick={()=>console.log("Puppy")}
                            isChecked={false}
                            rightTextStyle={{
                                fontSize: 15,
                                color: "black"
                            }}
                            rightText={"Skin"}
                        />
                    </ListItem>
                    <ListItem>
                        <CheckBox
                            style={{flex: 1}}
                            onClick={()=>console.log("Puppy")}
                            isChecked={false}
                            rightTextStyle={{
                                fontSize: 15,
                                color: "black"
                            }}
                            rightText={"Lame"}
                        />
                    </ListItem>

                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>HEALTH CONDITION</Text>
                    </Separator>

                    <ListItem>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>
                            <RadioForm
                              radio_props={[
                                  {label: 'Exhausted', value: 0 },
                                  {label: 'Thin', value: 1 },
                                  {label: 'Normal', value: 2 },
                                  {label: 'Fat', value: 3 },
                                  {label: 'Adiposity', value: 4 }
                                ]}

                              initial={2}
                              formHorizontal={false}
                                labelStyle={{fontSize: 15}}
                                buttonSize={10}
                                buttonOuterSize={20}
                                borderWidth={1}
                                onPress={(value) => {this.setState({value:value})}}
                            />
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
                    <Item underline style={{height: 60}}>
                        <Input
                            placeholder="Birth date"
                            value={this.props.birth}

                            onChangeText={value => this.props.petUpdate({prop: 'birth', value})
                            }/>
                    </Item>
                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>ANIMAL SIZE</Text>
                    </Separator>
                    <ListItem>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>
                            <RadioForm
                              radio_props={[
                                  {label: 'Small (up to 45cm)', value: 0 },
                                  {label: 'Medium (45cm-65cm)', value: 1 },
                                  {label: 'Large (from 65cm)', value: 2 }
                                ]}
                              initial={1}
                              formHorizontal={false}
                                labelStyle={{fontSize: 15}}
                                buttonSize={10}
                                buttonOuterSize={20}
                                borderWidth={1}
                                onPress={(value) => {this.setState({value:value})}}
                            />
                        </View>
                    </ListItem>
                    <Separator style={{height: 50}} bordered>
                    </Separator>
                    <Button block large danger onPress={this.onButtonPress.bind(this)}>
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