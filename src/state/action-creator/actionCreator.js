export const name=(name)=>{
    return(dispatch)=>{
        dispatch({
            type:"name",
            payload:name
        })
    }
}
export const setHero=(content)=>{
    return (dispatch)=>{
        dispatch({
            type:"setHero",
            payload:content
        })
    }
}


export const setIndex=(index)=>{
    return (dispatch)=>{
        dispatch({
            type:"index",
            payload:index
        })
    }
}

export const giveGold=(gold)=>{
    return (dispatch)=>{
        dispatch({
            type:"gold",
            payload:gold
        })
    }
}
export const purchase=(gold)=>{
    return (dispatch)=>{
        dispatch({
            type:"purchase",
            payload:gold
        })
    }
}
export const wearWeapon=(weapon,weapon2,iloczyn)=>{
    return (dispatch)=>{
        dispatch({
            type:"weapon",
            payload:weapon,
            payload2:weapon2,
            payload3:iloczyn
        })
    }
}

export const computeHp=(hp)=>{
    return (dispatch)=>{
        dispatch({
            type:"hp",
            payload:hp
        })
    }
}

export const itemki=(items)=>{
    return (dispatch)=>{
        dispatch({
            type:"itemki",
            payload:items
        })
    }
}
export const uzyciePotionaHp=(hp)=>{
    return (dispatch)=>{
        dispatch({
            type:"ile",
            payload:hp
        })
    }}

    export const kupienieItemki=(hp)=>{
        return (dispatch)=>{
            dispatch({
                type:"kup",
                payload:hp
            })
        }}
    
