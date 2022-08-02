
import { useState } from 'react';
import './Style.css'

const App=()=> {
  const [result,setResult]=useState("")
  const handler=(event)=>{
    setResult(result.concat(event.target.value))
  }
  const clear=()=>{
    setResult("");
  }
  const Del_num=()=>{
    setResult(result.slice(0,-1))
  }
  const evaluate=()=>{
    try {
      setResult(eval(result).toString());
      
    } catch (error) {
      alert("not possible")
      
    }
    
  }
  return ( 
     <div class="container">
    
    
  <input type="text" placeholder="0" id="out" value={result}/> 
  <input type="button" value="CL" class="cl" onClick={clear}/>
  <input type="button" value="DEL" class="del" onClick={Del_num}/>
   <input type="button" value="%" class="op" onClick={handler}/>
   <input type="button" value="/" class="op" onClick={handler}/>
   <input type="button" value="7" class="num" onClick={handler}/>
   <input type="button" value="8" class="num" onClick={handler}/>
   <input type="button" value="9" class="num" onClick={handler}/>
   <input type="button" value="*" class="op" onClick={handler}/>
   <input type="button" value="4" class="num" onClick={handler}/>
   <input type="button" value="5" class="num" onClick={handler}/>
   <input type="button" value="6" class="num" onClick={handler}/>
   <input type="button" value="-" class="op" onClick={handler}/>
   <input type="button" value="1" class="num" onClick={handler}/>
   <input type="button" value="2" class="num" onClick={handler}/>
   <input type="button" value="3" class="num" onClick={handler}/>
   <input type="button" value="+" class="op" onClick={handler}/>
   <input type="button" value="0" class="num" onClick={handler}/>
   <input type="button" value="=" class="eq" onClick={evaluate}/>

</div> );
}

export default App;
