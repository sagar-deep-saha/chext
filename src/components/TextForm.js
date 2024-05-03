import React, { useState, usestate } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text');

    const setHover = () => {
        // alert(9);
        // setText("Durgm");
        let render = text.toUpperCase();
        setText(render);
    }
    const setRover = () => {
        // alert(9);
        // setText("Durgm");
        let render = text.toLowerCase();
        setText(render);
    }

    const handler = (event) => {
        // alert(9);
        setText(event.target.value);
    }
    return (
        <>
            <div className="mb-3">
                <h2 className='my-3'>{props.heading}</h2>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handler} rows="7"></textarea>
                <button className="btn btn-primary my-3" onClick={setHover} >Do Upper</button>
                <button className="btn btn-success my-3" onClick={setRover} >Do Lower</button>
            </div>
            <div className="container">
                <h2 className='my-2'>Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </>
    )
}
