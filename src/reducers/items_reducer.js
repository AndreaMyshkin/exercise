export default function (state={}, action){
    switch (action.type) {
        case 'GET_MENU':
            return {...state, menuList:action.payload};
        case 'GET_PRODUCTS':
        return {...state, allProducts:action.payload};
        case 'GET_PRODUCT':
        return {...state, searchProduct:action.payload}
        default:
           return state;
    }
}