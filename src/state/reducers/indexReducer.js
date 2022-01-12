const indexState={
    index:0,
}

const indexReducer=(state=indexState,action)=>{
    switch(action.type){
        case "index":
            return {...state,index:state.index+=1}
            default:
                return state
    }

}

export default indexReducer