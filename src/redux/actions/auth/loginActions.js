import * as actionTypes from './actionTypes';
import ApiService from '../../../services/api-service';
export function login(data){
    return async(dispatch,getState)=>{
        return {
            type: actionTypes.LOGIN,
            data
        }
    };
}