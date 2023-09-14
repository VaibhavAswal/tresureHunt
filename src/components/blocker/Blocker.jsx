import { useState } from "react"
//eslint-disable-next-line
const Blocker = ({password}) => {       
    const [pass, setpass] = useState(false)
    const [val, setval] = useState("")
    const [war, setwar] = useState(" ")
    const [count, setcount] = useState(0)
    const check = ()=>{
        if (val===password){
            setpass(true)
        }else{
            setcount(old=>old+1)
            setwar(`*Passcode did't worked ${count}`)
        }
    }
  return (
    <div className={`Blocker ${pass?"pass":"block"}`}>
       <p className="blockerText">Hack It and Jack It</p>
    <input type="text" placeholder="Enter passcode" onChange={(e)=>setval(e.target.value)}/>
    <p className="blockerWar">{war}</p>
    <div className="clueButton" onClick={check}>Enter</div>
    </div>
  )
}

export default Blocker