import React, {Component} from 'react';
import {connect} from 'react-redux';
import { petUpdate, petCreate } from '../actions';
import {CardItem, Body, Card, Content, Container, Item,Input, Button, Text, View, Separator, Radio, ListItem, CheckBox} from 'native-base'
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
                    <Card>
                    <Item underline>
                    <Input
                        placeholder="Name"
                        value={this.props.name}

                        onChangeText={value => this.props.petUpdate({prop: 'name', value})
                        }/>
                    </Item>
                    <Input label = "Phone" placeholder="555-555-5555"  value={this.props.phone}
                           onChangeText={value => this.props.petUpdate({prop: 'phone', value})
                           }/>


                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>MOTHERHOOD</Text>
                    </Separator>
                    <ListItem>
                        <Radio/>
                        <Text>   Pregnant</Text>
                    </ListItem>
                    <ListItem>
                        <Radio/>
                        <Text>   Feeding</Text>
                    </ListItem>

                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>PROBLEMS</Text>
                    </Separator>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Text>   Skin</Text>
                    </ListItem>

                    <ListItem>
                        <CheckBox checked={false} />
                        <Text>   Lame</Text>
                    </ListItem>

                    <Separator bordered style={{height: 60}}>
                        <Text style={{fontSize: 15, color: 'grey'}}>HEALTH CONDITION</Text>
                    </Separator>
                        <ListItem>
                            <Radio selected={false}/>
                            <Text>   Exhausted</Text>
                        </ListItem>

                        <ListItem>
                            <Radio selected={false} />
                            <Text>   Thin</Text>
                        </ListItem>

                        <ListItem>
                            <Radio selected={true} />
                            <Text>   Normal</Text>
                        </ListItem>

                        <ListItem>
                            <Radio selected={false} />
                            <Text>   Fat</Text>
                        </ListItem>

                        <ListItem>
                            <Radio selected={false} />
                            <Text>   Adiposity</Text>
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
                        <Text>   Small (up to 45cm)</Text>
                    </ListItem>

                    <ListItem>
                        <Radio selected={false} />
                        <Text>   Medium (45cm-65cm)</Text>
                    </ListItem>

                    <ListItem>
                        <Radio selected={false} />
                        <Text>   Large (from 65cm)</Text>
                    </ListItem>

                    <Separator bordered>
                    </Separator>
                    <Button block large danger onPress={this.onButtonPress.bind(this)}>
                        <Text style={{fontSize: 20}}> Register</Text>
                    </Button>
                    </Card>
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