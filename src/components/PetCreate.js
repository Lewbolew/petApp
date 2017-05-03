import React, {Component} from 'react';
import {connect} from 'react-redux';
import { petUpdate, petCreate } from '../actions';
import {CardItem, Body, Card, Content,Badge, Icon, Left, Container, Item,Input, Button, Right, Text, View, Separator, Radio, ListItem, CheckBox} from 'native-base'
    ;
class PetCreate extends Component {
    onButtonPress() {
        const {user, name, phone, shift, breed, alias, color, birth} = this.props;
        this.props.petCreate({user, name, phone, breed, alias, color, birth, shift : shift || 'Monday'})
    }
    render() {
        return(


            <Container>
                <Content>
  
                    <ListItem>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>
                            <Radio selected={false} />
                            <Text style={{paddingLeft: 15}}>Male</Text>
                            <Radio style={{paddingLeft: 100}} selected={false} />
                            <Text style={{paddingLeft: 15}}>Female</Text>

                        </View>
                    </ListItem>

                    <ListItem>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    }}>
                            <Radio selected={false} />
                            <Text style={{paddingLeft: 15}}>Dog</Text>
                                <Radio style={{paddingLeft: 108}} selected={false} />
                                <Text>   Cat</Text>

                    </View>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Text style={{paddingLeft: 15}}>Puppy</Text>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Text style={{paddingLeft: 15}}>Sterilized</Text>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Text style={{paddingLeft: 15}}>Proprietary</Text>
                    </ListItem>
                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>MOTHERHOOD</Text>
                    </Separator>
                    <ListItem>
                        <Radio/>
                        <Text style={{paddingLeft: 15}}>Pregnant</Text>
                    </ListItem>
                    <ListItem>
                        <Radio/>
                        <Text style={{paddingLeft: 15}}>Feeding</Text>
                    </ListItem>

                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>PROBLEMS</Text>
                    </Separator>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Text style={{paddingLeft: 15}}>Skin</Text>
                    </ListItem>

                    <ListItem>
                        <CheckBox checked={false} />
                        <Text style={{paddingLeft: 15}}>Lame</Text>
                    </ListItem>

                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>HEALTH CONDITION</Text>
                    </Separator>
                        <ListItem>
                            <Radio selected={false}/>
                            <Text style={{paddingLeft: 15}}>Exhausted</Text>
                        </ListItem>

                        <ListItem>
                            <Radio selected={false} />
                            <Text style={{paddingLeft: 15}}>Thin</Text>
                        </ListItem>

                        <ListItem>
                            <Radio selected={true} />
                            <Text style={{paddingLeft: 15}}>Normal</Text>
                        </ListItem>

                        <ListItem>
                            <Radio selected={false} />
                            <Text style={{paddingLeft: 15}}>Fat</Text>
                        </ListItem>

                        <ListItem>
                            <Radio selected={false} />
                            <Text style={{paddingLeft: 15}}>Adiposity</Text>
                        </ListItem>

                        <Item underline style={{height: 70}}>
                        <Input
                            placeholder="Breed"
                            value={this.props.breed}

                            onChangeText={value => this.props.petUpdate({prop: 'breed', value})
                            }/>
                    </Item>
                    <Item underline style={{height: 70}}>
                        <Input
                            placeholder="Alias"
                            value={this.props.alias}

                            onChangeText={value => this.props.petUpdate({prop: 'alias', value})
                            }/>
                    </Item>
                    <Item underline style={{height: 70}}>
                        <Input
                            placeholder="Color"
                            value={this.props.color}

                            onChangeText={value => this.props.petUpdate({prop: 'color', value})
                            }/>
                    </Item>
                    <Item underline style={{height: 70}}>
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
                        <Radio selected={false} />
                        <Text style={{paddingLeft: 15}}>Small (up to 45cm)</Text>
                    </ListItem>

                    <ListItem>
                        <Radio selected={false} />
                        <Text style={{paddingLeft: 15}}>Medium (45cm-65cm)</Text>
                    </ListItem>

                    <ListItem>
                        <Radio selected={false} />
                        <Text style={{paddingLeft: 15}}>Large (from 65cm)</Text>
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
    const {name, phone, shift} = state.petForm;
    const user = state.auth.user;
    return {user, name, phone, shift};
};
export default connect(mapStateToProps, { petUpdate, petCreate })(PetCreate);