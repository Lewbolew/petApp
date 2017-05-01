import React, {Component} from "react";
import {ListView} from "react-native";
import {connect} from "react-redux";
import {petsFetch} from "../actions";
import ListItem from "./ListItem";

class PetListComponent extends Component {

    componentWillMount() {
        this.props.petsFetch(this.props.user);
        this.componentWillReceiveProps(this.props)
    };

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that thos component will be rendered
        this.createDataSource(nextProps)
    }

    createDataSource({pets}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        if ('data' in pets) {
            this.dataSource = ds.cloneWithRows(pets.data);
        }
        else {
            this.dataSource = ds.cloneWithRows([{'status': 'wait'}]);
        }


    }

    renderRow(pet) {
        return <ListItem pet={pet}/>
    }

    render() {
        return (
            <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow}/>
        );
    }
}

const mapStateToProps = (state) => {
    const user = state.auth.user;
    const pets = state.pets;
    return {user, pets};
};

export default connect(mapStateToProps, {petsFetch})(PetListComponent);

