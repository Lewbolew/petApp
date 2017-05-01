Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.petsFetch = exports.petCreate = exports.petUpdate = undefined;

var _types = require('./types');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _reactRedux = require('react-redux');

var petUpdate = exports.petUpdate = function petUpdate(_ref) {
    var prop = _ref.prop,
        value = _ref.value;

    return {
        type: _types.PET_CREATE_UPDATE,
        payload: { prop: prop, value: value }
    };
};

var petCreate = exports.petCreate = function petCreate(_ref2) {
    var user = _ref2.user,
        name = _ref2.name,
        phone = _ref2.phone,
        shift = _ref2.shift;

    return function (dispatch) {
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
                "color": "NoneColor",
                "animal_size": 1,
                "birth_date": null,
                "_long": -1.0,
                "_lat": -1.0,
                "_weight": 1,
                "_lame": 1,
                "_skin_problem": 0,
                "_baby": 1,
                "_preg_lact": 4,
                "_owner": null,
                "_short_description": "SortDescript",
                "created_at": null,
                "photo": null
            })
        }).then(function (response) {
            return response.json();
        }).then(function (responseData) {
            console.log("Creation of new pet ", responseData.success, ' ', responseData);
            dispatch({ type: _types.PET_CREATED });
            _reactNativeRouterFlux.Actions.petList({ type: 'reset' });
            if (responseData.success) {
                _reactNativeRouterFlux.Actions.petList();
            }
        }).done();
    };
};

var petsFetch = exports.petsFetch = function petsFetch(user) {
    return function (dispatch) {
        fetch('http://api.animal-id.info/homeless_v1/animal', {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + user.data.auth_key
            }
        }).then(function (response) {
            return response.json();
        }).then(function (responseData) {
            dispatch({ type: _types.PET_FETCH_SUCCESS, payload: responseData });
        }).done();
    };
};