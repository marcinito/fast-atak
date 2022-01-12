import tasak from '../../img/tasak.png'
const noszonaBronState={
    noszonaBron:{bron:tasak,hit:30}
}

const noszonaBronReducer=(state=noszonaBronState,action)=>{
    switch(action.type){
        case "weapon":
            return {...state,noszonaBron:{bron:action.payload,hit:action.payload2}}
            default:
                return state
    }
}
export default noszonaBronReducer