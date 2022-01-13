import tasak from '../../img/tasak.png'
const noszonaBronState={
    noszonaBron:{bron:tasak,hit:10,iloczyn:10}
}

const noszonaBronReducer=(state=noszonaBronState,action)=>{
    switch(action.type){
        case "weapon":
            return {...state,noszonaBron:{bron:action.payload,hit:action.payload2,iloczyn:action.payload3}}
            default:
                return state
    }
}
export default noszonaBronReducer