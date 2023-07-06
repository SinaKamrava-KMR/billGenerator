import Button from "./Button";


export default function Counter({onDec,onInc,value=0}){
  return <div className="counter-wrapper">
        
    <Button onClick={onInc}>
    <i className="bi bi-plus"></i>
    </Button>
    <span>{ value}</span>
    <Button  onClick={onInc} >
    <i className="bi bi-dash"></i>
    </Button>
    
    

  </div>
}