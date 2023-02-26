import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';


let reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogsReducer,
    friends: friendsReducer,
});

let store = createStore(reducers);

export default store