import React, { useState } from 'react'

export const TextForm = (props) => {

    const [text, setText] = useState('Enter your text here...')
    // const [myStyle, setStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black',
    // })
    // const[darkbtn, setbtnval] = useState('Enable Light Mode')
    
    const handleOnChange = (event) => {
        //console.log('onChange')
        setText(event.target.value)
    }

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase", "success")
    }

    const handleLoClick = () => {
        const newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase", "success")

    }

    const clear = () => {
        const newText = ''
        setText(newText)
        props.showAlert("Text Cleared", "success")

    }

    // const toggleMode = () => {
    //     if(myStyle.color === 'white'){
    //         setStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnval('Enable Dark Mode')

    //     }
    //     else{
    //         setStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtnval('Enable Light Mode')
    //     }
    // }

    const copyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard", "success")

    }


    return (
        <div className='my-2 p-1 container'>
            <div className="mt-5 container">
                <h1>{props.heading}</h1>
                <div className="form-floating">
                    <textarea className="mb-3 form-control" placeholder="Leave a comment here" id="myBox" rowq='8' value={text} onChange={handleOnChange}></textarea>
                    <label htmlFor="myBox"></label>
                </div>
                <button className="mx-1 btn btn-primary" onClick={handleUpClick}>To Upper Case</button>
                <button className="mx-1 btn btn-primary" onClick={handleLoClick}>To Lower Case</button>
                <button className="mx-1 btn btn-primary" onClick={clear}>Clear</button>
                <button className="mx-1 btn btn-primary" onClick={copyText}>Copy Text</button>
                {/* <button className="mx-1 btn btn-primary" onClick={toggleMode}>{darkbtn}</button> */}
            </div>

            <div className="container">
                <h2 className='mt-5'>Your Text Summary</h2>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters.</p>
                <p><b>{0.008 * text.split(" ").length}</b> minutes to read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>

    )
}

