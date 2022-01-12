const playerHpState={
    hp:200
}

const playerHpReducer=(state=playerHpState,action)=>{
    switch(action.type){
        case "hp":
            return {...state,hp:action.payload}
            case "ile":
                return{...state,hp:state.hp+50}
            default:
                return state
    }
}

export default playerHpReducer