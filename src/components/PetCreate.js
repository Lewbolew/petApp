import React, {Component} from 'react';
import { Card, CardSection, Input, Button } from './common';
import {connect} from 'react-redux';
import { petUpdate, petCreate } from '../actions';

class PetCreate extends Component {
    onButtonPress() {
        const {user, name, phone, shift} = this.props;
        this.props.petCreate({user, name, phone, shift : shift || 'Monday'})
    }
    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label = "Name"
                           placeholder="Lana"
                           value={this.props.name}
                        onChangeText={value => this.props.petUpdate({prop: 'name', value})}/>
                </CardSection>

                <CardSection>
                    <Input label = "Phone" placeholder="555-555-5555"  value={this.props.phone}
                           onChangeText={value => this.props.petUpdate({prop: 'phone', value})}/>
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save
                    </Button>
                </CardSection>


            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.petForm;
    const user = state.auth.user;
    return {user, name, phone, shift};
};
export default connect(mapStateToProps, { petUpdate, petCreate })(PetCreate);