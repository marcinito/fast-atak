const zlotoState={
    zloto:10000
}
const zlotoReducer=(state=zlotoState,action)=>{
    switch(action.type){
        case "gold":
            return{...state,zloto:state.zloto+=action.payload}
            case "purchase":
                return{...state,zloto:state.zloto-=action.payload}
                case "zeruj":
                    return{...state,zloto:100}
            default:
                return state
    }
}

export default zlotoReducer