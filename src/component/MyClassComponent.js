import React ,{Component} from "react";
let title ="Created Using Class Component";
let btnTitle="to see styling using class Component";
class MyClassComponent extends Component{
  constructor(){
      super();
      this.state={
          visi:false
        };
  }

  hide = ()=>{
      this.setState({
        visi:!this.state.visi
      })
  }
  

    render(){
        return(
            <div className="Box">
    <button className="btnStyle" onClick={()=>{this.hide()}}>{btnTitle}</button>
   {
     this.state.visi?(<div className="showBox">
     <h1>{title}</h1>
     <p>This is done using external css</p>
     <p style={{color:"red"}}>This is done using inline css</p>
     </div>):null
   }
</div>
        )
    }
}export default MyClassComponent;