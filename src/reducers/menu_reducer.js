export default function (state={}, action){
    switch (action.type) {
        case 'GET_MENU':
            return {...state, menuList:action.payload}
        default:
           return state;
    }
}