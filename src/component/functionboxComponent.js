import {useState} from "react";
function FunctionboxComponent(){
     var btnTitle ="to see styling in functional component";
    var title ="Created using Function Component";
    const [visi, setVisi] = useState(0);

  return(
  
  <div className="Box">
    <button className="btnStyle" onClick={()=>{setVisi(!visi)} }>{btnTitle}</button>
   {
     (visi)?(<div className="showBox">
     <h1>{title}</h1>
     <p>This is done using external css</p>
     <p style={{color:"red"}}>This is done using inline css</p>
     </div>):null
   }
</div>

)
}
export default FunctionboxComponent;
