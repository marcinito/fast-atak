const zlotoState={
    zloto:1000
}
const zlotoReducer=(state=zlotoState,action)=>{
    switch(action.type){
        case "gold":
            return{...state,zloto:state.zloto+=action.payload}
            case "purchase":
                return{...state,zloto:state.zloto-=action.payload}
            default:
                return state
    }
}

export default zlotoReducer