import React,{useState} from 'react';


export default function Textform(props) {

  
  const toUpcase =  () =>{

    let newtext=text.toUpperCase();
    setText(newtext)

  }
  
  const erase =  () =>{

    let newtext="";
    setText(newtext)

  }

  const copytext =  () =>{

    var copyText = document.getElementById("myBox");

    // Select the text field
    copyText.select();
   

     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    props.showAlert("Copied To Clipboard","Success");

    

    

  }

  const toLowcase =  () =>{

    let newtext=text.toLowerCase();
    setText(newtext)

  }

  const textchange =  (event) =>{
    
    setText(event.target.value);
  }

  const removespace =  () =>{
    
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));

  }

  const[text,setText]=useState("");

  return (

    

      <div className="container"  
      style={{
        color: props.mode==='dark'?'white':'#042743'
      }}
      >

     

        <h1>{props.heading}</h1> 

        <div className="mb-3">
        <textarea className="form-control" id="myBox" 
        style={{
          backgroundColor: props.mode==='dark'?'#042743':'white',
          color:props.mode==='dark'?'white':'black'
        }}  
        value={text} onChange={textchange} rows="8"></textarea>
        <button type="button" className="btn btn-primary my-3" onClick={toUpcase}>Convert to UPPERCASE</button>
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={toLowcase}>Convert to lowercase</button>
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={removespace}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={copytext}>Copy Text</button>
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={erase}>Erase Text</button>
        
        </div>
         <div className="container">

          <h2>Your text summary</h2>
          
          <p>{text.split(" ").length} Words and {text.length} Characters </p>

        </div> 

        
    </div>
      
    
  )
}
