import hpPotion from '../../img/hppoint.png'
import kulaognia from '../../img/kulaognia.png'
import ogien from '../../img/ogien.png'
import tasak from '../../img/tasak.png'
import siekiera from '../../img/siekiera.png'
const shopState={
hpPotion:{name:hpPotion,koszt:100,nazwa:"Mikstura Leczniczna",opis:"Mikstura która dodaje 50hp, wypij ja zanim bedziesz spragniony całkowicie,potwór może zaskoczyć Cie mocnym uderzeniem!",iloczyn:0},
kulaognia:{name:kulaognia,koszt:300,hit:16,nazwa:"Mroczna kula ognia",opis:"Ten w którego wycelowana jest ta broń, marny jego los(uderzenie od 16 do 41)",iloczyn:25},
ogien:{name:ogien,koszt:400,hit:33,nazwa:"Plomien zniszczenia",opis:"Ten przedmiot podpala przeciwnika zadqajac mu sroge rany(od 33 do 77)",iloczyn:44},
tasak:{name:tasak,koszt:0,hit:8,nazwa:"Tasak orków",opis:"Tasak wykuty w dolinie lodowego Wichru(Moc od 10 do 23",iloczyn:13},
siekiera:{name:siekiera,koszt:500,hit:40,nazwa:"axe",opis:"Hellish Axe which can damage any monster very strong",iloczyn:50}
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