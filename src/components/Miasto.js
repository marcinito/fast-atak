import React,{useRef,useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { actionCreator } from '../state/index'
import { bindActionCreators } from 'redux'
import empty from '../img/empty.png'

import Arena from './Arena'
import tasak from '../img/tasak.png'
import Sklep from './Sklep'
import itemkiReducer from '../state/reducers/itemkiReducer'
import { wearWeapon } from '../state/action-creator/actionCreator'




function Miasto() {
    const dispatch=useDispatch()
let zloto=useSelector(state=>state.zloto.zloto)
let itemki=useSelector(state=>state.itemki)
let noszonaBron=useSelector(state=>state.noszonaBron.noszonaBron)
let wlasneItemki=useSelector(state=>state.wlasneItemki)

const {uzyciePotionaHp,wearWeapon}=bindActionCreators(actionCreator,dispatch)
    const [flag,setFlag]=useState(false)
    const [flag1,setFlag1]=useState(false)
    const [switchArena,setSwitchArena]=useState(false)
    const [switchSklep,setSwitchSklep]=useState(false)
    const imgBohater=useSelector(state=>state.hero.hero)
    const nameBohater=useSelector(state=>state.name.name)

    const backpackRef=useRef()
    const openbpRef=useRef()   
    const iloscMiksturRef=useRef()   
    const leczenie=()=>{
        itemki.hpPotion.ilosc>0 ? uzyciePotionaHp(50):console.log("Nie masz wystarczajace ilosc potionow")
        itemki.hpPotion.ilosc===0?iloscMiksturRef.current.style.backgroundColor="black":iloscMiksturRef.current.style.backgroundColor="white"
    } 

// useEffect(()=>{
//     if(itemki.hpPotion.ilosc==0){
//         iloscMiksturRef.current.style.backgroundColor="black"
//     }
//     else {
//         iloscMiksturRef.current.style.backgroundColor="white" 
//     }

// })
    const openBp=()=>{
        setFlag(!flag)
        if(flag===true)
backpackRef.current.classList.add("otwartyPlecak")
else if(flag===false){
    backpackRef.current.classList.remove("otwartyPlecak")
}
    }

const wezdowalki=(e)=>{
    wearWeapon(e.target.src,e.target.alt)
    console.log("siema")
}
if(switchSklep===true){
    return(
        <Sklep headback={setSwitchSklep}/>
    )
}

else if(switchArena===true){
    return (
<Arena headback={setSwitchArena}/>
    )
}


else if(switchArena===false){
    return (
        <div className="miasto">
            <div className="sky">
                
            </div>
            <div className="polozenieMiasta">
            <div className="leftSide"><button onClick={()=>setSwitchArena(true)} style={{width:"100%",height:"100%"}}>Arena</button></div>
            <div className="bohater">
            <div ><h3 className="nick">{nameBohater}</h3></div> 
                <div className="posBohater">
                  
                <img className="imgBohater" src={imgBohater} alt="bohater"/>
                </div>
                <div className="armor"> <div className="gold"><p>ZŁOTO</p><span>{zloto}</span><img src={itemki.gold} alt="gold"/></div>
                <div className="noszonaBron"><p>AKTUALNA ITEMA</p><span><img src={noszonaBron.bron} alt="aktualnaItema"/></span></div>
                <div className="noszoneFluidy" ref={iloscMiksturRef} onClick={()=>leczenie()}><p className="iloscFluidowCity">ILOSC FLUIDOW {itemki.hpPotion.ilosc}</p><img src={itemki.hpPotion.name} alt="hp"/></div></div>
       <div className="backpack" >
           <button onClick={()=>openBp()} >Klik</button>
           <div className="zamknietyBp" ref={backpackRef}>
               <div  className="miejsce1"></div>
               <div className="miejsce2"><img onClick={(e)=>wezdowalki(e)} src={wlasneItemki.item2.name===null?null:wlasneItemki.item2.name} alt={wlasneItemki.item2.hit}/></div>
               <div className="miejsce3"><img onClick={(e)=>wezdowalki(e)} src={wlasneItemki.item3.name===null?null:wlasneItemki.item3.name} alt={wlasneItemki.item3.hit}/></div>
               <div className="miejsce4"><img src={wlasneItemki.item4===null?null:wlasneItemki.item4} alt=""/></div>
           </div>
       </div>
               
              
            </div>

            <div className="rightSide"><button onClick={()=>setSwitchSklep(true)}>Sklep</button></div>
            </div>
            <div className="ground"></div>
        </div>
    )
}
}
export default Miasto
