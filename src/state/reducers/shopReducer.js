import hpPotion from '../../img/hppoint.png'
import kulaognia from '../../img/kulaognia.png'
import ogien from '../../img/ogien.png'
const shopState={
hpPotion:{name:hpPotion,koszt:100,nazwa:"Mikstura Leczniczna",opis:"Mikstura która dodaje 50hp, wypij ja zanim bedziesz spragniony całkowicie,potwór może zaskoczyć Cie mocnym uderzeniem!"},
kulaognia:{name:kulaognia,koszt:300,hit:50,nazwa:"Mroczna kula ognia",opis:"Ten w którego wycelowana jest ta broń, marny jego los(uderzenie od 0 do 50)"},
ogien:{name:ogien,koszt:400,hit:160,nazwa:"Plomien zniszczenia",opis:"Ten przedmiot podpala przeciwnika zadqajac mu sroge rany(od 0 do 150)"}
}
const shopReducer=(state=shopState,action)=>{
    switch(action.type){
case "shop":
    return state
    default:
        return state
    }
}

export default shopReducer