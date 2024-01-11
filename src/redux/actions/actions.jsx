//actions creater
// action is an object 
// reducer function modifies the state of the store
import * as actions from "./actionTypes";
export const setUser = (payload) => {
return {
    type: actions.SET_USER,
    user: payload,
};
};
export const setLoading = (status) => ({
type: actions.SET_LOADING_STATUS,
status: status,
});
export const getArticles = (payload) => ({
type: actions.GET_ARTICLES,
payload: payload,
});
