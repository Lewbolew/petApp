import {PET_CREATE_UPDATE, PET_CREATED, PET_FETCH_SUCCESS} from './types'
import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";

export  const petUpdate = ({prop, value}) => {
    return {
        type: PET_CREATE_UPDATE,
        payload: {prop, value}
    };
};

export const petCreate = ({user, name, phone, shift}) => {
    return (dispatch) => {
        console.log(user.data.auth_key);
        fetch('http://api.animal-id.info/homeless_v1/animal', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + user.data.auth_key
            },
            body: JSON.stringify({
                "breed": "BreedNone",
                "sex": 0,
                "nickname": "nickName",
                "species": 1,
                "sterilization": 1,
                "color":"NoneColor",
                "animal_size":1,
                "birth_date" : null,
                "_long": -1.0,
                "_lat": -1.0,
                "_weight":  1,
                "_lame": 1,
                "_skin_problem": 0,
                "_baby": 1,
                "_preg_lact": 4,
                "_owner": null,
                "_short_description": "SortDescript",
                "created_at": null,
                "photo": null
            })
        }).then((response) => response.json())
            .then((responseData) => {
                    console.log("Creation of new pet ", responseData.success, ' ', responseData);//TO DO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                dispatch({type: PET_CREATED});
                Actions.petList({type: 'reset'});
                    if (responseData.success){
                        Actions.petList();
                    }
                }
            ).done()
    }
};

export const petsFetch = (user) => {
  return (dispatch) => {
      fetch('http://api.animal-id.info/homeless_v1/animal', {
          method: 'get',
          headers: {
              'Authorization': 'Bearer ' + user.data.auth_key
          }
      }).then((response) => response.json())
          .then((responseData) => {
                  dispatch({type: PET_FETCH_SUCCESS, payload: responseData})
              }
          ).done()
  };
};