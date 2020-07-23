import {
    SET_USER,
    SET_REG_KEY,
    SET_VALIDATION_KEY,
    SET_KEYS_LIST,
    SET_USER_DATA,
    SET_USER_DATA_FRAMES,
    //
    AppActionTypes
} from '../types';
import { UserType, KEY_IN_LIST, FrameType, userField } from '../commonTypes';


const initialState = {
    reg_key: '' as string,
    isValidKey: false as boolean,
    keys_list: [] as Array<KEY_IN_LIST>,
    isKey: '' as string,
    authenticated: false as boolean,
    user: [] as Array<UserType>,
    userInterface: [] as Array<FrameType>,
    curOrgId: null as null | number,
    showRegSection: false as boolean,
    isSuperAdmin: false as boolean,
    userOrgName: "" as string
}

type InitialState = typeof initialState;

export default function(state = initialState, action: AppActionTypes) : InitialState {
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                authenticated: action.payload,
            }
        case SET_REG_KEY:
            return {
                ...state,
                reg_key: action.payload
            }
        case SET_VALIDATION_KEY:
            return {
                ...state,
                isValidKey: action.payload,
                isKey: action.isKey,
            }
        case SET_KEYS_LIST:
            return {
                ...state,
                keys_list: action.payload
            }
        case SET_USER_DATA:
            return {
                ...state,
                user: action.payload,
                curOrgId: action.curOrgId,
                showRegSection: action.showRegSection,
                isSuperAdmin: action.isSuperAdmin,
            }
        case SET_USER_DATA_FRAMES:
            return {
                ...state,
                userInterface: action.payload
            }
        default: return state;
    }
}