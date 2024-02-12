import React,{useState} from 'react'

export default function Textform(props) {
    const convertUpperCase =()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleOnChange=(event)=>{
        // console.log("Upper case word");
        setText(event.target.value); // with this function you can set your value up to date
    }
    
    // useState hook
    const [text,setText] = useState('Enter text here');
    // text = "Hudahhsaio";  wrong way to change the state , you have to use the function
    // setText("Text enter kro"); Correct way to change the state
  return (
    <div>
      
<div className="mb-3">
    <h2>{props.heading}</h2>
  <label for="myBox" className="form-label">{props.title}</label>
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
  <button type="button" className="btn btn-primary my-3" onClick={convertUpperCase}>Uppercase</button>
</div>
    </div>
  )
}
