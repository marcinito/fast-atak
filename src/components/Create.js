import React,{useState,useEffect} from 'react'
import Miasto from './Miasto'
import wojownik from '../img/wojownik.png'
import czarodziej from '../img/czarodziej.png'
import {useDispatch,useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreator} from '../state/index'
import drzewo from '../img/drzewo.png'
import chmura from '../img/chmura.png'

function Create() {
    const nazwaBohatera= useSelector((state)=>state.name.name)
    const wygladBohatera= useSelector((state)=>state.hero.hero)
    const dispatch=useDispatch()
    const [dis,setDis]=useState(true)
    const [next,setNext]=useState(false)
    const {name,setHero}=bindActionCreators(actionCreator,dispatch)
    const [postacie,setPostacie]=useState([{postac:wojownik},{postac:czarodziej}])
    let [index,setIndex]=useState(0)
 
    const changeHero=()=>{
        setHero(postacie[index].postac)
   
  
      if(index===1)return setIndex(0)
      
        setIndex(index+=1)


    }
    useEffect(()=>{
        if(nazwaBohatera.length>4){
            setDis(false)
        }
        if(nazwaBohatera<=4){
            setDis(true)
        }
  
    })
useEffect(()=>{
    setHero(postacie[index].postac)
},[])


    if(next===true){
        return(
            <Miasto/>
        )
    }


    else{
    return (
        <div className="create">
            <h1 className="create__h1">Ustaw parametry swojej postaci</h1>
        <div className="inputy">
            <label className="label">Podaj nazwe bohatera<br></br>
        <input type="text" className="input" value={nazwaBohatera} placeholder="minimum 5 znaków" onChange={(e)=>name(e.target.value)}/>
        </label>
        </div>
            <div className="imgChoice">
        
  <img className="postac" src={wygladBohatera} alt="postac"/>
            </div>
            <div className="switch">
                <button onClick={()=>changeHero()}>next</button>
            </div>
            <button className="btngraj2" disabled={dis} onClick={()=>setNext(true)}>graj</button>
            <img className="drzewo" src={drzewo} alt="drzewo"/>
            <img src={chmura} className="chmura" alt="chmura"/>
        </div>
    )
}
}
export default Create
