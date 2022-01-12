import React,{useRef,useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {actionCreator} from '../state/index'
import {bindActionCreators} from 'redux'
import hp from '../img/hppoint.png'
import tasak from '../img/tasak.png'
import { kupienieItemki } from '../state/action-creator/actionCreator'

function Sklep(props) {
  const [dis,setDis]=useState(false)
  let [flag,setFlag]=useState(true)
  const dispatch=useDispatch()
    const koszykRef=useRef()
    const produktRef=useRef()
    const btnKupRef=useRef()
    const mocUderzeniaRef=useRef()
    const nazwaItemaRef=useRef()
    let zakupRef=useRef()
    let cenaRef=useRef()
    let zaplataRef=useRef()
    let opisRef=useRef()
 
    let rodzajzakupuRef=useRef()
  const {giveGold,purchase,kupienieItemki}=bindActionCreators(actionCreator,dispatch)
    const zloto=useSelector(state=>state.zloto.zloto)
    const wlasneItemki=useSelector(state=>state.wlasneItemki)
    const shop=useSelector(state=>state.shop)
    const items=useSelector(state=>state.itemki)
    console.log(wlasneItemki)
  
useEffect(()=>{
  if(zloto-cenaRef.current<-1 ){
  setDis(true)
  btnKupRef.current.style.backgroundColor="red"
  zaplataRef.current.textContent="Nie masz tyle pieniedzy"
  }
  else if(zloto-cenaRef.current>=0){
    setDis(false)
    btnKupRef.current.style.backgroundColor="darkblue"
    zaplataRef.current.textContent=zloto-cenaRef.current
  }

})

  const dodaj=(e)=>{
rodzajzakupuRef.current=e.target.id
zakupRef.current=e.target.src
cenaRef.current=e.target.alt
mocUderzeniaRef.current=e.target.dataset.hit
nazwaItemaRef.current=e.target.dataset.name

opisRef.current=e.target.dataset.opis




setFlag(!flag)
  }
  const kupItemke=e=>{
    
if(zloto>=cenaRef.current) 
{
  if(koszykRef.current.alt==="hpPotion")
    dispatch({type:"kupionyHp"})
  


  dispatch({type:koszykRef.current.alt,payload:koszykRef.current.src,payload2:mocUderzeniaRef.current,payload3:nazwaItemaRef.current,payload4:opisRef.current})
  purchase(cenaRef.current)
  
}
else{
  console.log("no")
  

}


  }
    return (
        <div className="sklep">
          <div className="logoSklepu"><h1>Witaj w Sklepie</h1></div>
         <div className="polki">
             <div onClick={(e)=>dodaj(e)} value={shop.hpPotion}  className="przedmiot jeden" ><img src={shop.hpPotion.name} alt={shop.hpPotion.koszt}  id="hpPotion" data-name={shop.hpPotion.nazwa} data-opis={shop.hpPotion.opis} /></div>
             <div  className="przedmiot dwa" onClick={(e)=>dodaj(e)}><img src={shop.kulaognia.name} alt={shop.kulaognia.koszt} id="kulaognia" data-hit={shop.kulaognia.hit} data-name={shop.kulaognia.nazwa} data-opis={shop.kulaognia.opis}/></div>
             <div  className="przedmiot trzy" onClick={(e)=>dodaj(e)} ><img src={shop.ogien.name} alt={shop.ogien.koszt} id="ogien" data-hit={shop.ogien.hit} data-name={shop.ogien.nazwa} data-opis={shop.ogien.opis} /></div>
             <div  className="przedmiot cztery"></div>
             <div className="przedmiot piec"></div>
             <div className="przedmiot szesc"></div>
             <div className="lada" ref={opisRef} >
               {opisRef.current}
               
             </div>
         </div>
        
         <button ref={btnKupRef} className="kupItem" disabled={dis} onClick={((e)=>kupItemke(e))}>kup</button>
         <div className="koszyk"  ><div className="cena">{cenaRef.current}</div><img ref={koszykRef} src={zakupRef.current} alt={rodzajzakupuRef.current} data-hit={mocUderzeniaRef} data-name={nazwaItemaRef.current} data-opis={opisRef.current}/><div className="opisItemu">{nazwaItemaRef.current}</div></div>
          <div className="twojeZloto"><div className="zaplata" ref={zaplataRef}><h1 style={{fontSize:"1.5rem"}}>Kwota po tranzakcji</h1></div>{zloto}</div>
     
            <button className="btnExit" onClick={()=>props.headback(false)}>Powrót</button>
        </div>
    )
}

export default Sklep
